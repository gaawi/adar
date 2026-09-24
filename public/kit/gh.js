/* Guardado compartido en GitHub para las páginas internas.
 *
 * Lo usan la barra de revisión (kit y /borradores/) y el calendario. Antes
 * estaba copiado en cada sitio; al querer arrastrar en el calendario iban a
 * ser tres copias de lo mismo, así que vive aquí.
 *
 * No guarda ningún secreto: el token sale del mismo login de GitHub del panel
 * (/api/auth abre una ventana que lo devuelve por postMessage, igual que al
 * CMS) y se queda en sessionStorage, o sea que muere al cerrar la pestaña.
 */
window.ADAR_GH = (function () {
  var AYUDA =
    'Revisiones escritas desde el panel interno. Cada clave es «idioma/slug». ' +
    'estado: «listo» (listo para publicar) o «cambios» (hay que corregir algo, la nota dice qué). ' +
    'fecha_prevista: cuándo toca publicarlo. textos: los pies de foto de cada red. ' +
    'Lo escribe la propia página; no hace falta editarlo a mano.';

  var CLAVE_TOKEN = 'adar_gh_token';

  function olvidaToken() {
    try { sessionStorage.removeItem(CLAVE_TOKEN); } catch (e) {}
  }

  function pedirToken() {
    return new Promise(function (resolve, reject) {
      var cache;
      try { cache = sessionStorage.getItem(CLAVE_TOKEN); } catch (e) {}
      if (cache) return resolve(cache);

      var w = window.open('/api/auth', 'adar-gh-auth', 'width=700,height=740');
      if (!w) {
        return reject(new Error('El navegador bloqueó la ventana. Permite las ventanas emergentes y vuelve a intentarlo.'));
      }
      var tope = setTimeout(function () {
        window.removeEventListener('message', recibir);
        reject(new Error('Se agotó el tiempo esperando a GitHub.'));
      }, 120000);

      function recibir(e) {
        if (e.origin !== window.location.origin) return;
        var d = e.data;
        if (typeof d !== 'string') return;
        // El diálogo del CMS: la ventana avisa y espera respuesta para contestar.
        if (d === 'authorizing:github') {
          try { w.postMessage('adar', window.location.origin); } catch (err) {}
          return;
        }
        var m = d.match(/^authorization:github:(success|error):([\s\S]*)$/);
        if (!m) return;
        clearTimeout(tope);
        window.removeEventListener('message', recibir);
        var payload;
        try { payload = JSON.parse(m[2]); } catch (err) { return reject(new Error('Respuesta de GitHub no válida.')); }
        if (m[1] === 'success' && payload.token) {
          try { sessionStorage.setItem(CLAVE_TOKEN, payload.token); } catch (err) {}
          resolve(payload.token);
        } else {
          reject(new Error(payload.error || 'GitHub no autorizó la sesión.'));
        }
      }
      window.addEventListener('message', recibir);
    });
  }

  // Base64 pasando por UTF-8: btoa solo admite bytes, y aquí hay acentos.
  function aBase64(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  function deBase64(s) {
    var bin = atob(String(s).replace(/\s/g, ''));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  }

  function url(destino) {
    return 'https://api.github.com/repos/' + destino.repo + '/contents/' + destino.path;
  }

  async function leer(token, destino) {
    var r = await fetch(url(destino) + '?ref=' + destino.branch, {
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
      cache: 'no-store',
    });
    if (r.status === 404) return { sha: null, datos: { actualizado: null, posts: {} } };
    if (!r.ok) {
      var err0 = new Error('GitHub respondió ' + r.status + ' al leer ' + destino.path + '.');
      err0.status = r.status;
      throw err0;
    }
    var j = await r.json();
    var datos;
    try { datos = JSON.parse(deBase64(j.content)); } catch (e) { datos = { posts: {} }; }
    if (!datos.posts) datos.posts = {};
    return { sha: j.sha, datos: datos };
  }

  async function escribir(token, destino, datos, sha, mensaje) {
    var cuerpo = {
      message: mensaje || 'Revisión desde el panel interno',
      content: aBase64(JSON.stringify(datos, null, 2) + '\n'),
      branch: destino.branch,
    };
    if (sha) cuerpo.sha = sha;
    var r = await fetch(url(destino), {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cuerpo),
    });
    if (!r.ok) {
      var detalle = '';
      try { detalle = (await r.json()).message || ''; } catch (e) {}
      var err = new Error(detalle || 'GitHub respondió ' + r.status);
      err.status = r.status;
      throw err;
    }
  }

  /** ¿Esta entrada dice algo, o está vacía y se puede borrar? */
  function tieneAlgo(e) {
    if (!e) return false;
    if (e.estado || e.nota || e.fecha_prevista) return true;
    return !!(e.textos && Object.keys(e.textos).some(function (k) { return (e.textos[k] || '').trim(); }));
  }

  /**
   * Sube `estado` al archivo de `destino` fusionándolo con lo que haya allí.
   * Entrada por entrada gana la marca más reciente, así dos dispositivos no se
   * pisan. Si alguien escribe entre la lectura y la escritura, GitHub responde
   * 409 y se reintenta una vez releyendo.
   */
  async function guardarRevisiones(destino, estado, mensaje) {
    var token = await pedirToken();

    async function intento() {
      var remoto = await leer(token, destino);
      var fusion = remoto.datos;
      Object.keys(estado).forEach(function (k) {
        var mio = estado[k];
        if (!tieneAlgo(mio)) { delete fusion.posts[k]; return; }
        var suyo = fusion.posts[k];
        if (!suyo || !suyo.fecha || (mio.fecha && mio.fecha > suyo.fecha)) fusion.posts[k] = mio;
      });
      fusion._ayuda = AYUDA;
      fusion.actualizado = new Date().toISOString();
      await escribir(token, destino, fusion, remoto.sha, mensaje);
      return fusion;
    }

    try {
      return await intento();
    } catch (e) {
      if (e.status === 409) return await intento();
      // Un token caducado deja de servir: se borra para pedirlo otra vez.
      if (e.status === 401 || e.status === 403 || /bad credentials/i.test(e.message || '')) olvidaToken();
      throw e;
    }
  }

  /** Mezcla lo guardado en el repositorio con lo que haya en este navegador. */
  function fusionaLocal(remotas, claveLocal) {
    var fusion = {};
    Object.keys(remotas || {}).forEach(function (k) { fusion[k] = Object.assign({}, remotas[k]); });
    var local = {};
    try { local = JSON.parse(localStorage.getItem(claveLocal) || '{}'); } catch (e) { local = {}; }
    Object.keys(local).forEach(function (k) {
      var a = fusion[k], b = local[k];
      if (!a || !a.fecha || (b.fecha && b.fecha > a.fecha)) {
        fusion[k] = Object.assign({}, b, { sinSubir: true });
      }
    });
    return fusion;
  }

  return {
    pedirToken: pedirToken,
    olvidaToken: olvidaToken,
    leer: leer,
    guardarRevisiones: guardarRevisiones,
    fusionaLocal: fusionaLocal,
    tieneAlgo: tieneAlgo,
  };
})();
