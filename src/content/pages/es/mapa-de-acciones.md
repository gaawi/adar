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
<link rel="stylesheet" href="/vendor/leaflet/leaflet.css"/>
<link rel="stylesheet" href="/vendor/leaflet/MarkerCluster.css"/>


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
<p class="amp-subtitle">Arte contemporáneo en el medio rural · 2021 – 2026</p>
</div>
</div>

<!-- MAP -->
<div class="amp-map-wrap">
<p class="amp-section-label">Territorio ADAR</p>

<div class="amp-filters">
<button class="amp-filter-btn active" data-year="all">Todos los años</button>
<button class="amp-filter-btn" data-year="2026">2026</button>
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
<div class="amp-legend-item"><div class="amp-leg-dot"></div>Sede con actividades</div>
<div class="amp-legend-item"><div class="amp-leg-badge">N</div>Número de acciones</div>
</div>
<p class="amp-map-hint">Haz clic en cada marcador</p>
</div>
<!-- STATS — mismo ancho que el mapa -->
<div class="amp-stats">
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="39">39</span><span class="amp-stat-l">Actividades</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="14">14</span><span class="amp-stat-l">Concejos</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="6">6</span><span class="amp-stat-l">Ediciones</span></div>
<div class="amp-stat"><span class="amp-stat-n amp-counter" data-target="2021">2021</span><span class="amp-stat-l">Desde</span></div>
</div>
</div>

</div>

<script src="/vendor/leaflet/leaflet.js"></script>
<script src="/vendor/leaflet/leaflet.markercluster.js"></script>
<script>
(function(){

var CDN = 'https://creartbox-media-cdn.b-cdn.net/adarimages/';

var concejos = [
{ name:'Aula del Oro', concejo:'Belmonte de Miranda', lat:43.28298, lng:-6.21847, activities:[
{ year:'2026', title:'Umbral Zero (Aula del Oro)', url:'/es/umbral-zero-aula-del-oro/', img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2026-08-07%20Aula%20del%20oro_Fotos/07.08.26_Aula%20del%20oro_Fotos_1.jpg' }
]},
{ name:'Leiguarda', concejo:'Belmonte de Miranda', lat:43.33015, lng:-6.22539, activities:[
{ year:'2025', title:'Evento de Clausura: Concierto y Espicha en Leiguarda',          url:'/es/134/',                                                                                          img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-17-evento-clausura-leiguarda-concierto-espicha-2025/dsc01841.jpg' },
{ year:'2025', title:'Recital de Andrea Casarrubios en la Iglesia de Leiguarda',      url:'/es/recital-de-andrea-casarrubios-en-la-iglesia-de-leiguarda/',                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-16-recital-andrea-casarrubios-iglesia-leiguarda-2025/dsc01590.jpg' },
{ year:'2025', title:'Paseo Sonoro en Leiguarda',                                      url:'/es/paseo-sonoro-en-leiguarda/',                                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-09-paseo-sonoro-leiguarda-2025/c1927t01.jpg' },
{ year:'2024', title:'Concierto de clausura en el Invernadero de Cristal',             url:'/es/concierto-de-clausura-en-el-invernadero-de-cristal-leiguarda-2024/',                          img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-18-concierto-clausura-invernadero-cristal-leiguarda-2024/image15.jpg' },
{ year:'2024', title:'Micro Conciertos y Paseo Sonoro en Leiguarda',                  url:'/es/micro-conciertos-y-paseo-sonoro-en-leiguarda/',                                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-16-micro-conciertos-paseo-sonoro-leiguarda-2024/03.jpg' },
{ year:'2023', title:'Concierto visual de clausura en Leiguarda',                      url:'/es/concierto-visual-de-clausura-en-leiguarda-2023/',                                            img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-13-concierto-visual-clausura-leiguarda-2023/02.jpg' },
{ year:'2023', title:'Instalación: Toccata and Bruise (Celeste Oram)',                  url:'/es/instalacion-toccata-and-bruise-celeste-oram/',                                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-03-instalacion-toccata-bruise-celeste-oram-2023/083.jpg' },
{ year:'2021', title:'Concierto de Inauguración en Leiguarda',                         url:'/es/concierto-de-inauguracion-en-leiguarda-2/',                                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2021-03-10-concierto-inauguracion-leiguarda-2021/image71.jpg' }
]},
{ name:'Museo de las Ayalgas', concejo:'Belmonte de Miranda', lat:43.32853, lng:-6.21148, activities:[
{ year:'2023', title:'Paseo sonoro en el Museo de las Ayalgas',                        url:'/es/paseo-sonoro-en-el-museo-de-las-ayalgas-belmonte-de-miranda-2/',                            img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-12-paseo-sonoro-museo-ayalgas-belmonte-2023/06.jpg' }
]},
{ name:'Belmonte de Miranda (villa)', concejo:'Belmonte de Miranda', lat:43.279, lng:-6.2205, activities:[
{ year:'2022', title:'Concierto de clausura en Belmonte de Miranda',                   url:'/es/concierto-de-clausura-en-belmonte-de-miranda-2022/',                                        img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-13-concierto-clausura-belmonte-2022/pxl-20220813-175723812.jpg' }
]},
{ name:'Capilla de los Dolores', concejo:'Grado', lat:43.38977, lng:-6.06847, activities:[
{ year:'2024', title:'Concierto y performance en la Capilla de los Dolores',           url:'/es/concierto-y-performance-en-la-capilla-de-los-dolores-grado-2024/',                          img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-17-concierto-performance-capilla-dolores-grado-2024/capilla.jpg' },
{ year:'2023', title:'Micro concierto en la Capilla de los Dolores',                   url:'/es/micro-concierto-en-la-capilla-de-los-dolores-grado-2023/',                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-10-micro-concierto-capilla-dolores-grado-2023/31.jpg' }
]},
{ name:'Oficina de Turismo de Grado', concejo:'Grado', lat:43.38909, lng:-6.06886, activities:[
{ year:'2024', title:'Instalación de Sarah K. Williams en la Oficina de Turismo',     url:'/es/instalacion-de-sarah-k-williams-en-la-oficina-de-turismo-grado/',                          img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-17-instalacion-sarah-williams-oficina-turismo-grado-2024/image20.jpg' }
]},
{ name:'Palacio de Miranda-Valdecarzana', concejo:'Grado', lat:43.39004, lng:-6.0682, activities:[
{ year:'2024', title:'Concierto en el Palacio de Miranda-Valdecarzana (2024)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2024-2/',                            img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-17-concierto-miranda-valdecarzana-grado-2024/20.jpg' },
{ year:'2023', title:'Concierto en el Palacio de Miranda-Valdecarzana (2023)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2023-2/',                            img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-10-concierto-miranda-valdecarzana-grado-2023/image5.jpg' },
{ year:'2022', title:'Concierto en el Palacio de Miranda-Valdecarzana (2022)',         url:'/es/concierto-en-el-palacio-de-miranda-valdecarzana-grado-2022/',                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-12-concierto-miranda-valdecarzana-grado-2022/pxl-20220812-184621365-2.jpg' }
]},
{ name:'Palacio Fontela', concejo:'Grado', lat:43.38824, lng:-6.06882, activities:[
{ year:'2023', title:'Paseo sonoro en el Palacio Fontela',                             url:'/es/paseo-sonoro-en-el-palacio-fontela-grado-2/',                                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-10-paseo-sonoro-palacio-fontela-grado-2023/28.jpg' }
]},
{ name:'Plaza de Santa Ana · Llanes', concejo:'Llanes', lat:43.42119, lng:-4.7525, activities:[
{ year:'2025', title:'Concierto Visual en Llanes',                                     url:'/es/concierto-visual-en-llanes/',                                                                img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-08-concierto-visual-llanes-2025/dsc00638.jpg' },
{ year:'2022', title:'Concierto al aire libre en Llanes',                              url:'/es/concierto-en-llanes-2/',                                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-11-concierto-aire-libre-llanes-2022/image59.jpg' }
]},
{ name:'Monasterio de San Antolín de Bedón', concejo:'Llanes', lat:43.4381, lng:-4.86936, activities:[
{ year:'2025', title:'The Whale (Ballarte) en el Monasterio de San Antolín de Bedón', url:'/es/the-whale-ballarte-en-el-monasterio-de-san-antolin-de-bedon/',                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-07-the-whale-ballarte-monasterio-san-antolin-bedon-2025/dsc00382.jpg' },
{ year:'2024', title:'Concierto en el Monasterio de San Antolín de Bedón',             url:'/es/concierto-en-el-monasterio-de-san-antolin-de-bedon/',                                      img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-12-concierto-monasterio-san-antolin-bedon-2024/15.jpg' }
]},
{ name:'Auditorio As Quintas · La Caridad', concejo:'El Franco', lat:43.55239, lng:-6.83154, activities:[
{ year:'2023', title:'Concierto en El Franco',                                         url:'/es/concierto-en-el-franco/',                                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-09-concierto-en-el-franco-2023/49.jpg' },
{ year:'2023', title:'Paseo sonoro en El Franco',                                      url:'/es/paseo-sonoro-el-franco/',                                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-09-paseo-sonoro-el-franco-2023/01.jpg' },
{ year:'2023', title:'Instalación artística de luz y proyecciones (Mizuko Kaji)',      url:'/es/instalacion-artistica-de-luz-y-proyecciones-mizuko-kaji/',                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-03-instalacion-luz-proyecciones-mizuko-kaji-2023/42.jpg' },
{ year:'2022', title:'Concierto visual en El Franco',                                  url:'/es/concierto-visual-en-el-franco-2/',                                                          img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-08-concierto-visual-el-franco-2022/pxl-20220808-201603027-2.jpg' }
]},
{ name:'Sala Loreto', concejo:'Colunga', lat:43.48512, lng:-5.27067, activities:[
{ year:'2023', title:'Concierto visual en Colunga (Sala Loreto)',                      url:'/es/concierto-visual-en-colunga-sala-loreto/',                                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2023-08-11-concierto-visual-colunga-sala-loreto-2023/48.jpg' }
]},
{ name:'Iglesia de Santa María de Sábada · Lué', concejo:'Colunga', lat:43.49497, lng:-5.31686, activities:[
{ year:'2022', title:'Concierto en la Iglesia de Santa María de Sabada',               url:'/es/concierto-en-la-iglesia-de-santa-maria-de-sabada-colunga/',                                img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-10-concierto-iglesia-santa-maria-sabada-colunga-2022/pxl-20220810-175359505.jpg' }
]},
{ name:'Parador de Corias', concejo:'Cangas del Narcea', lat:43.19548, lng:-6.54346, activities:[
{ year:'2026', title:'La forma de la memoria (Parador de Corias)', url:'/es/la-forma-de-la-memoria-parador-de-corias/', img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2026-08-05-Parador%20de%20Corias_Fotos/05.08.26_Parador%20de%20Corias_Fotos_1.jpg' },
{ year:'2025', title:'Paseo sonoro en el Claustro del Parador de Corias',              url:'/es/paseo-sonoro-en-el-claustro-del-parador-de-corias/',                                        img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-15-paseo-sonoro-claustro-parador-corias-2025/corias.jpg' }
]},
{ name:'Monasterio de Villanueva de Oscos', concejo:'Villanueva de Oscos', lat:43.312, lng:-6.98593, activities:[
{ year:'2025', title:'Concierto en el Monasterio de Villanueva de Oscos',              url:'/es/concierto-en-el-monasterio-de-villanueva-de-oscos/',                                        img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-14-concierto-monasterio-villanueva-oscos-2025/dsc01456.jpg' }
]},
{ name:'Taramundi', concejo:'Taramundi', lat:43.36319, lng:-7.07778, activities:[
{ year:'2025', title:'Concierto en Taramundi',                                         url:'/es/concierto-en-taramundi/',                                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-13-concierto-taramundi-2025/dsc01048.jpg' }
]},
{ name:'Monasterio de Obona', concejo:'Tineo', lat:43.34007, lng:-6.47991, activities:[
{ year:'2025', title:'Concierto en el Monasterio de Obona, Tineo',                     url:'/es/concierto-en-el-monasterio-de-obona-tineo/',                                                img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-12-concierto-monasterio-obona-tineo-2025/dsc00981.jpg' }
]},
{ name:'Puerma', concejo:'Las Regueras', lat:43.39922, lng:-6.02041, activities:[
{ year:'2025', title:'Micro-Concierto en Puerma',                                      url:'/es/micro-concierto-en-puerma-las-regueras/',                                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-11-micro-concierto-puerma-las-regueras-2025/c1970t01.jpg' }
]},
{ name:'Susacasa Agrocultural', concejo:'Gozón', lat:43.60539, lng:-5.83758, activities:[
{ year:'2025', title:'Micro-Concierto en Susacasa Agrocultural',                       url:'/es/micro-concierto-en-susacasa-agrocultural/',                                                img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2025-08-05-micro-concierto-susacasa-agrocultural-gozon-2025/c1575t01.jpg' }
]},
{ name:'Mercado de Pola de Somiedo', concejo:'Somiedo', lat:43.09315, lng:-6.25725, activities:[
{ year:'2024', title:'Concierto en el Mercado de Pola de Somiedo',                     url:'/es/concierto-en-el-mercado-de-pola-de-somiedo/',                                              img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-14-concierto-mercado-pola-de-somiedo-2024/Pola_01_00_02_03.jpg' }
]},
{ name:'La Figal de Xugabolos', concejo:'Salas', lat:43.40343, lng:-6.23333, activities:[
{ year:'2026', title:'De danzas y sonatas (La Figal de Xugabolos)', url:'/es/de-danzas-y-sonatas-la-figal-de-xugabolos/', img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2026-08-04%20La%20Figal%20de%20Xugabolos_Fotos/04.08.26_La%20Figal%20de%20Xugabolos_Fotos_1.jpg' }
]},
{ name:'Monasterio de San Salvador de Cornellana', concejo:'Salas', lat:43.40896, lng:-6.15702, activities:[
{ year:'2024', title:'Concierto en el Monasterio de San Salvador (Cornellana)',        url:'/es/concierto-en-el-monasterio-de-san-salvador-cornellana-2/',                                  img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2024-08-13-concierto-monasterio-san-salvador-cornellana-2024/img-0203.jpg' }
]},
{ name:'Soto del Barco', concejo:'Soto del Barco', lat:43.52632, lng:-6.05211, activities:[
{ year:'2022', title:'Concierto visual en Soto del Barco',                             url:'/es/concierto-visual-en-soto-del-barco-2/',                                                    img:'https://creartbox-archive.b-cdn.net/adarimages/memoria-de-acciones/2022-08-09-concierto-visual-soto-del-barco-2022/pxl-20220809-190711391.jpg' }
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
(c.concejo&&c.concejo!==c.name?'<div class="amp-popup-concejo">'+c.concejo+'</div>':'')+
'<div class="amp-popup-title">'+c.name+'</div>'+
'<div class="amp-popup-count">'+acts.length+' acción'+(acts.length!==1?'es':'')+'</div>'+
'</div>'+
'<div class="amp-popup-body">'+cards+'</div>'+
'</div>';
}

/* MARKERS + AGRUPACIÓN (clustering) */
var currentYear = 'all';
var markerObjects = [];

/* Icono del pin, con el nº de acciones del año filtrado */
function makeIcon(c, i){
var count = (currentYear==='all') ? c.activities.length : c.activities.filter(function(a){return a.year===currentYear;}).length;
var el = document.createElement('div');
el.className='adar-pin';
el.innerHTML='<div class="adar-ring" style="animation-delay:'+(i*0.28)+'s"><div class="adar-dot"></div></div><div class="adar-badge">'+count+'</div>';
return L.divIcon({html:el.outerHTML,className:'',iconSize:[38,38],iconAnchor:[19,19],popupAnchor:[0,-24]});
}

/* Grupo de clúster: agrupa sedes cercanas y las separa al ampliar */
var clusterGroup = (typeof L.markerClusterGroup === 'function') ? L.markerClusterGroup({
showCoverageOnHover:false,
spiderfyOnMaxZoom:true,
maxClusterRadius:48,
iconCreateFunction:function(cluster){
return L.divIcon({html:'<div class="adar-cluster">'+cluster.getChildCount()+'</div>',className:'',iconSize:L.point(46,46)});
}
}) : null;

concejos.forEach(function(c,i){
var popup = L.popup({className:'adar-popup',closeButton:true,maxWidth:330,offset:L.point(0,-6),autoPanPadding:L.point(28,28)});
var marker = L.marker([c.lat,c.lng],{icon:makeIcon(c,i)});
markerObjects.push({marker:marker,concejo:c,popup:popup,i:i});
});

/* Muestra solo las sedes con acciones en el año filtrado; recalcula clústeres */
function refreshAll(){
if(clusterGroup) clusterGroup.clearLayers();
var shown=[];
markerObjects.forEach(function(m){
if(!clusterGroup) map.removeLayer(m.marker);
var html = buildPopup(m.concejo, currentYear);
if(html){
m.marker.setIcon(makeIcon(m.concejo, m.i));
m.popup.setContent(html);
m.marker.bindPopup(m.popup);
shown.push(m.marker);
} else {
m.marker.unbindPopup();
}
});
if(clusterGroup) clusterGroup.addLayers(shown);
else shown.forEach(function(mk){ mk.addTo(map); });
}

if(clusterGroup) map.addLayer(clusterGroup);
refreshAll();

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
refreshAll();
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
