// OAuth relay for the /admin panel (Sveltia / Decap CMS · GitHub backend).
//
// Step 2 of the handshake: GitHub sends the user back here with a temporary
// ?code=. We exchange it (server-side, using the client secret) for an access
// token, then hand that token back to the CMS window via postMessage using the
// message format Decap/Sveltia expect:
//
//   "authorization:github:success:{\"token\":\"...\",\"provider\":\"github\"}"
//
// Requires GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET (see api/auth.js).

function parseCookies(header) {
  const out = {};
  (header || '').split(';').forEach((part) => {
    const i = part.indexOf('=');
    if (i > -1) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  });
  return out;
}

function render(status, payload) {
  // Página mínima que se comunica con la ventana del CMS y se cierra.
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html>
<html><head><meta charset="utf-8" /></head><body>
<p>${status === 'success' ? 'Autenticado. Puedes cerrar esta ventana.' : 'Error de autenticación.'}</p>
<script>
(function () {
  var message = ${JSON.stringify(message)};
  function receive(e) {
    window.removeEventListener('message', receive, false);
    // Respondemos al mensaje "authorizing:github" del CMS con el resultado.
    if (window.opener) window.opener.postMessage(message, e.origin || '*');
    window.close();
  }
  window.addEventListener('message', receive, false);
  // El CMS espera este primer aviso para empezar el diálogo.
  if (window.opener) window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send('Faltan GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET en las variables de entorno.');
    return;
  }

  const url = new URL(req.url, `https://${req.headers.host}`);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookies = parseCookies(req.headers.cookie);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // Limpiamos la cookie de estado en cualquier caso.
  res.setHeader('Set-Cookie', 'csm_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');

  if (!code || !state || !cookies.csm_state || state !== cookies.csm_state) {
    res.status(400).send(render('error', { error: 'Estado OAuth no válido. Inténtalo de nuevo.' }));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await tokenRes.json();
    if (data.error || !data.access_token) {
      res.status(401).send(render('error', { error: data.error_description || data.error || 'Sin token.' }));
      return;
    }
    res.status(200).send(render('success', { token: data.access_token, provider: 'github' }));
  } catch (err) {
    res.status(500).send(render('error', { error: 'Fallo al contactar con GitHub.' }));
  }
}
