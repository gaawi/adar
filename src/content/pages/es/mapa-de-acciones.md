---
title: "Mapa de Acciones"
slug: "mapa-de-acciones"
lang: "es"
date: "2026-02-21T19:38:50Z"
modified: "2026-03-11T21:59:42Z"
status: "publish"
wp_id: 568
original_url: "https://festivaladar.com/es/mapa-de-acciones/"
permalink: "/es/mapa-de-acciones/"
categories: []
tags: []
featured_image: "https://creartbox-media-cdn.b-cdn.net/adarimages/adar25fx30/corias.jpg"
excerpt: ""
author: "gaawi_rei1q"
parent_id: 0
menu_order: 0
translation_group: "pll_69b06583421f1"
---

<!-- ============================================================
FESTIVAL ADAR · Mapa de Acciones
WORDPRESS: Editor → Text (no Visual) → pega todo → Update
============================================================ -->

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>


<!-- PAGE -->
<div id="adar-map-page">

<!-- HERO con foto de fondo -->
<div class="amp-hero">
<div class="amp-hero-bg">
<img src="https://creartbox-media-cdn.b-cdn.net/adarimages/adar25fx30/corias.jpg" alt=""/>
</div>
<div class="amp-hero-inner">
<span class="amp-eyebrow">Festival ADAR · Principado de Asturias</span>
<h2 class="amp-title">Mapa de <em>Acciones</em></h2>
<p class="amp-subtitle">Arte contemporáneo en el medio rural · 2021 – 2025</p>
</div>
</div>

<!-- MAP -->
<div class="amp-map-wrap">
<p class="amp-section-label">Territorio ADAR</p>

<!-- STATS — mismo ancho que el mapa -->
<div class="amp-stats">
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="36">36</span><span class="amp-stat-l">Actividades</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="14">14</span><span class="amp-stat-l">Concejos</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="5">5</span><span class="amp-stat-l">Ediciones</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="2021">2021</span><span class="amp-stat-l">Desde</span></div>
</div>
<div class="amp-filters">
<button class="amp-filter-btn active" data-year="all">Todos los años</button>
<button class="amp-filter-btn" data-year="2025">2025</button>
<button class="amp-filter-btn" data-year="2024">2024</button>
<button class="amp-filter-btn" data-year="2023">2023</button>
<button class="amp-filter-btn" data-year="2022">2022</button>
<button class="amp-filter-btn" data-year="2021">2021</button>
</div>
<div class="amp-map-outer">
<div id="adar-leaflet-map"></div>
<div class="amp-map-vignette"></div>
</div>
<div class="amp-map-footer">
<div class="amp-legend">
<div class="amp-legend-item"><div class="amp-leg-dot"></div>Concejo con actividades</div>
<div class="amp-legend-item"><div class="amp-leg-badge">N</div>Número de acciones</div>
</div>
<p class="amp-map-hint">Haz clic en cada marcador</p>
</div>
</div>

</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function(){

var CDN = 'https://creartbox-media-cdn.b-cdn.net/adarimages/';

var concejos = [
{ name:'Belmonte de Miranda', lat:43.2185, lng:-6.2020, activities:[
{ year:'2025', title:'Evento de Clausura: Concierto y Espicha en Leiguarda',          url:'/es/134/',                                                                                          img:CDN+'adar25fx30/DSC01841.jpg' },
{ year:'2025', title:'Recital de Andrea Casarrubios en la Iglesia de Leiguarda',      url:'/es/recital-de-andrea-casarrubios-en-la-iglesia-de-leiguarda/',                                    img:CDN+'adar25fx30/DSC01590.jpg' },
{ year:'2025', title:'Paseo Sonoro en Leiguarda',                                      url:'/es/paseo-sonoro-en-leiguarda/',                                                                    img:CDN+'ADAR_Eventos/2025/09_Paseo_Sonoro_en_Leiguarda/C1927T01.jpg' },
{ year:'2024', title:'Concierto de clausura en el Invernadero de Cristal',             url:'/es/concierto-de-clausura-en-el-invernadero-de-cristal-leiguarda-2024/',                          img:CDN+'ADAR_Eventos/2024/18_Concierto_de_clausura_en_el_Invernadero_de_cristal_Leiguarda_2024/image15.jpg' },
{ year:'2024', title:'Micro Conciertos y Paseo Sonoro en Leiguarda',                  url:'/es/micro-conciertos-y-paseo-sonoro-en-leiguarda/',                                              img:CDN+'ADAR_Eventos/2024/16_Micro_Conciertos_y_Paseo_Sonoro_en_Leiguarda/03.jpg' },
{ year:'2023', title:'Concierto visual de clausura en Leiguarda',                      url:'/es/concierto-visual-de-clausura-en-leiguarda-2023/',                                            img:CDN+'ADAR_Eventos/2023/13_Concierto_visual_de_clausura_en_Leiguarda_2023/02.jpg' },
{ year:'2023', title:'Paseo sonoro en el Museo de las Ayalgas',                        url:'/es/paseo-sonoro-en-el-museo-de-las-ayalgas-belmonte-de-miranda-2/',                            img:CDN+'ADAR_Eventos/2023/12_Paseo_sonoro_en_el_Museo_de_las_Ayalgas_Belmonte_de_Miranda/06.jpg' },
{ year:'2023', title:'Instalación: Toccata and Bruise (Celeste Oram)',                  url:'/es/instalacion-toccata-and-bruise-celeste-oram/',                                              img:CDN+'ADAR_Eventos/2023/03_Instalacion_Toccata_and_Bruise_Celeste_Oram/083.jpg' },
{ year:'2022', title:'Concierto de clausura en Belmonte de Miranda',                   url:'/es/concierto-de-clausura-en-belmonte-de-miranda-2022/',                                        img:CDN+'Festival%20ADAR%20Photos/2022/concierto%20belmonte/PXL_20220813_175723812.jpg' },
{ year:'2021', title:'Concierto de Inauguración en Leiguarda',                         url:'/es/concierto-de-inauguracion-en-leiguarda-2/',                                                  img:CDN+'ADAR_Eventos/2021/14_Concierto_de_Inauguracion_en_Leiguarda/image71.jpg' }
]},
{ name:'Grado', lat:43.3861, lng:-6.0768, activities:[
{ year:'2024', title:'Concierto y performance en la Capilla de los Dolores',           url:'/es/concierto-y-performance-en-la-capilla-de-los-dolores-grado-2024/',                          img:CDN+'ADAR_Eventos/2024/17_Concierto_y_performance_en_la_Capilla_de_los_Dolores/capilla.jpg' },
{ year:'2024', title:'Instalación de Sarah K. Williams en la Oficina de Turismo',     url:'/es/instalacion-de-sarah-k-williams-en-la-oficina-de-turismo-grado/',                          img:CDN+'ADAR_Eventos/2024/17_Instalacion_site_specific_de_sara_k_william/image20.jpg' },
{ year:'2024', title:'Concierto en el Palacio de Miranda-Valdecarzana (2024)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2024-2/',                            img:CDN+'ADAR_Eventos/2024/17_Concierto_en_el_Palacio_de_Miranda-Valdecarzana_Grado_2024/20.jpg' },
{ year:'2023', title:'Micro concierto en la Capilla de los Dolores',                   url:'/es/micro-concierto-en-la-capilla-de-los-dolores-grado-2023/',                                  img:CDN+'ADAR_Eventos/2023/10_Micro_concierto_en_la_Capilla_de_los_Dolores_Grado_2023/31.jpg' },
{ year:'2023', title:'Concierto en el Palacio de Miranda-Valdecarzana (2023)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2023-2/',                            img:CDN+'Festival%20ADAR%20Photos/2023/06%20concierto%20grado/image5.jpg' },
{ year:'2023', title:'Paseo sonoro en el Palacio Fontela',                             url:'/es/paseo-sonoro-en-el-palacio-fontela-grado-2/',                                              img:CDN+'ADAR_Eventos/2023/10_Paseo_sonoro_en_el_Palacio_Fontela_Grado/28.jpg' },
{ year:'2022', title:'Concierto en el Palacio de Miranda-Valdecarzana (2022)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2022/',                              img:CDN+'ADAR_Eventos/2022/12_Concierto_en_el_Palacio_de_Miranda-Valdecarzana_Grado_2022/PXL_20220812_184621365~2.jpg' }
]},
{ name:'Llanes', lat:43.4185, lng:-4.7540, activities:[
{ year:'2025', title:'Concierto Visual en Llanes',                                     url:'/es/concierto-visual-en-llanes/',                                                                img:CDN+'ADAR_Eventos/2025/08_Concierto_Visual_en_Llanes/DSC00638.jpg' },
{ year:'2025', title:'The Whale (Ballarte) en el Monasterio de San Antolín de Bedón', url:'/es/the-whale-ballarte-en-el-monasterio-de-san-antolin-de-bedon/',                              img:CDN+'ADAR_Eventos/2025/07_The_Whale_Ballarte_en_el_Monasterio_de_San_Antolin_de_Bedon/DSC00382.jpg' },
{ year:'2024', title:'Concierto en el Monasterio de San Antolín de Bedón',             url:'/es/concierto-en-el-monasterio-de-san-antolin-de-bedon/',                                      img:CDN+'ADAR_Eventos/2024/12_Concierto_en_el_Monasterio_de_San_Antolin_de_Bedon/15.jpg' },
{ year:'2022', title:'Concierto al aire libre en Llanes',                              url:'/es/concierto-en-llanes-2/',                                                                    img:CDN+'ADAR_Eventos/2022/11_Concierto_en_Llanes/image59.jpg' }
]},
{ name:'El Franco', lat:43.5447, lng:-6.8283, activities:[
{ year:'2023', title:'Concierto en El Franco',                                         url:'/es/concierto-en-el-franco/',                                                                    img:CDN+'ADAR_Eventos/2023/09_Concierto_en_El_Franco/49.jpg' },
{ year:'2023', title:'Paseo sonoro en El Franco',                                      url:'/es/paseo-sonoro-el-franco/',                                                                    img:CDN+'ADAR_Eventos/2023/09_Paseo_sonoro_El_Franco/01.jpg' },
{ year:'2023', title:'Instalación artística de luz y proyecciones (Mizuko Kaji)',      url:'/es/instalacion-artistica-de-luz-y-proyecciones-mizuko-kaji/',                                  img:CDN+'ADAR_Eventos/2023/03_Instalacion_artistica_de_luz_y_proyecciones_Mizuko_Kaji/42.jpg' },
{ year:'2022', title:'Concierto visual en El Franco',                                  url:'/es/concierto-visual-en-el-franco-2/',                                                          img:CDN+'ADAR_Eventos/2022/08_Concierto_visual_en_El_Franco/PXL_20220808_201603027~2.jpg' }
]},
{ name:'Colunga', lat:43.4810, lng:-5.2716, activities:[
{ year:'2023', title:'Concierto visual en Colunga (Sala Loreto)',                      url:'/es/concierto-visual-en-colunga-sala-loreto/',                                                  img:CDN+'ADAR_Eventos/2023/11_Concierto_visual_en_Colunga_Sala_Loreto/48.jpg' },
{ year:'2022', title:'Concierto en la Iglesia de Santa María de Sabada',               url:'/es/concierto-en-la-iglesia-de-santa-maria-de-sabada-colunga/',                                img:CDN+'ADAR_Eventos/2022/10_Concierto_en_la_Iglesia_de_Santa_Maria_de_Sabada_Colunga/PXL_20220810_175359505.jpg' }
]},
{ name:'Cangas del Narcea', lat:43.1753, lng:-6.5479, activities:[
{ year:'2025', title:'Paseo sonoro en el Claustro del Parador de Corias',              url:'/es/paseo-sonoro-en-el-claustro-del-parador-de-corias/',                                        img:CDN+'adar25fx30/corias.jpg' }
]},
{ name:'Villanueva de Oscos', lat:43.3615, lng:-6.8830, activities:[
{ year:'2025', title:'Concierto en el Monasterio de Villanueva de Oscos',              url:'/es/concierto-en-el-monasterio-de-villanueva-de-oscos/',                                        img:CDN+'adar25fx30/DSC01456.jpg' }
]},
{ name:'Taramundi', lat:43.3700, lng:-7.1020, activities:[
{ year:'2025', title:'Concierto en Taramundi',                                         url:'/es/concierto-en-taramundi/',                                                                    img:CDN+'adar25fx30/DSC01048.jpg' }
]},
{ name:'Tineo', lat:43.3305, lng:-6.5055, activities:[
{ year:'2025', title:'Concierto en el Monasterio de Obona, Tineo',                     url:'/es/concierto-en-el-monasterio-de-obona-tineo/',                                                img:CDN+'adar25fx30/DSC00981.jpg' }
]},
{ name:'Las Regueras', lat:43.3730, lng:-5.9670, activities:[
{ year:'2025', title:'Micro-Concierto en Puerma',                                      url:'/es/micro-concierto-en-puerma-las-regueras/',                                                  img:CDN+'adar25fx30/C1970T01.jpg' }
]},
{ name:'Gozón', lat:43.5680, lng:-5.8360, activities:[
{ year:'2025', title:'Micro-Concierto en Susacasa Agrocultural',                       url:'/es/micro-concierto-en-susacasa-agrocultural/',                                                img:CDN+'ADAR_Eventos/2025/05_Micro-Concierto_en_Susacasa_Agrocultural/C1575T01.jpg' }
]},
{ name:'Somiedo', lat:43.0730, lng:-6.2490, activities:[
{ year:'2024', title:'Concierto en el Mercado de Pola de Somiedo',                     url:'/es/concierto-en-el-mercado-de-pola-de-somiedo/',                                              img:CDN+'ADAR_Eventos/2024/14_Concierto_en_el_Mercado_de_Pola_de_Somiedo/Pola_01_00_02_03.jpg' }
]},
{ name:'Salas', lat:43.4128, lng:-6.2554, activities:[
{ year:'2024', title:'Concierto en el Monasterio de San Salvador (Cornellana)',        url:'/es/concierto-en-el-monasterio-de-san-salvador-cornellana-2/',                                  img:CDN+'adar24fx30/12/IMG_0203.jpg' }
]},
{ name:'Soto del Barco', lat:43.5273, lng:-6.0700, activities:[
{ year:'2022', title:'Concierto visual en Soto del Barco',                             url:'/es/concierto-visual-en-soto-del-barco-2/',                                                    img:CDN+'ADAR_Eventos/2022/09_Concierto_visual_en_Soto_del_Barco/PXL_20220809_190711391.jpg' }
]}
];

/* MAP */
if (typeof L !== 'undefined') {
var map = L.map('adar-leaflet-map',{center:[43.28,-6.05],zoom:8,zoomControl:true,scrollWheelZoom:false,tap:false});
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{
attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
subdomains:'abcd', maxZoom:19
}).addTo(map);

/* POPUP */
function buildPopup(c, yr){
var acts = yr==='all' ? c.activities : c.activities.filter(function(a){return a.year===yr;});
if(!acts.length) return null;
var cards = acts.map(function(a){
var thumb = a.img
? '<img class="amp-ac-thumb" src="'+a.img+'" alt="" loading="lazy"/>'
: '<div class="amp-ac-thumb-ph">♪</div>';
return '<a class="amp-activity-card" href="'+a.url+'" target="_blank" rel="noopener">'+
thumb+
'<div class="amp-ac-body">'+
'<div class="amp-ac-year">'+a.year+'</div>'+
'<div class="amp-ac-title">'+a.title+'</div>'+
'</div>'+
'<span class="amp-ac-arrow">→</span>'+
'</a>';
}).join('');
return '<div class="amp-popup-inner">'+
'<div class="amp-popup-header">'+
'<div class="amp-popup-concejo">Concejo de</div>'+
'<div class="amp-popup-title">'+c.name+'</div>'+
'<div class="amp-popup-count">'+acts.length+' acción'+(acts.length!==1?'es':'')+'</div>'+
'</div>'+
'<div class="amp-popup-body">'+cards+'</div>'+
'</div>';
}

/* MARKERS */
var currentYear = 'all';
var markerObjects = [];
concejos.forEach(function(c,i){
var el = document.createElement('div');
el.className='adar-pin';
el.innerHTML='<div class="adar-ring" style="animation-delay:'+(i*0.28)+'s"><div class="adar-dot"></div></div><div class="adar-badge">'+c.activities.length+'</div>';
var icon = L.divIcon({html:el.outerHTML,className:'',iconSize:[38,38],iconAnchor:[19,19],popupAnchor:[0,-24]});
var popup = L.popup({className:'adar-popup',closeButton:true,maxWidth:330,offset:L.point(0,-6),autoPanPadding:L.point(28,28)});
var marker = L.marker([c.lat,c.lng],{icon:icon}).addTo(map);
var refresh = function(){
var yr = currentYear;
var html = buildPopup(c, yr);
var markerEl = marker.getElement();
if(html){
popup.setContent(html);
marker.bindPopup(popup);
if(markerEl) markerEl.style.opacity = '1';
} else {
marker.unbindPopup();
map.closePopup();
if(markerEl) markerEl.style.opacity = '0.2';
}
}
refresh();
markerObjects.push({marker:marker,concejo:c,refresh:refresh});
});

/* FILTERS — event delegation en el contenedor, compatible con WordPress */
function initFilters(){
var wrap = document.querySelector('.amp-filters');
if(!wrap) return;
wrap.addEventListener('click', function(e){
var btn = e.target.closest('.amp-filter-btn');
if(!btn) return;
document.querySelectorAll('.amp-filter-btn').forEach(function(b){ b.classList.remove('active'); });
btn.classList.add('active');
currentYear = btn.getAttribute('data-year') || 'all';
markerObjects.forEach(function(m){ m.refresh(); });
map.closePopup();
});
}
if(document.readyState === 'loading'){
document.addEventListener('DOMContentLoaded', initFilters);
} else {
initFilters();
}
}

/* COUNTERS */
function animateCounter(el){
var target=+el.dataset.target, start=Date.now(), dur=1400;
(function tick(){
var p=Math.min(1,(Date.now()-start)/dur);
var ease=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
el.textContent=Math.round(ease*target);
if(p<1) requestAnimationFrame(tick);
})();
}
var observed=false;
var observer=new IntersectionObserver(function(entries){
entries.forEach(function(e){
if(e.isIntersecting&&!observed){observed=true;document.querySelectorAll('.amp-counter').forEach(animateCounter);}
});
},{threshold:.3});
var statsEl=document.querySelector('.amp-stats');
if(statsEl) observer.observe(statsEl);

})();
</script>
