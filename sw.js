const CACHE="progym-v310-20261120";
const ASSETS=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("message",e=>{if(e.data?.type==="SKIP_WAITING")self.skipWaiting();});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith("progym-")||k.startsWith("palestra-coach-"))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==self.location.origin)return;if(u.pathname.endsWith("/version.json")){e.respondWith(fetch(e.request,{cache:"no-store"}));return;}if(e.request.mode==="navigate"){e.respondWith(caches.open(CACHE).then(c=>c.match("./index.html")).then(r=>r||fetch(e.request)));return;}e.respondWith(caches.open(CACHE).then(c=>c.match(e.request)).then(r=>r||fetch(e.request)));});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(cs=>{const c=cs.find(c=>new URL(c.url).pathname.startsWith(new URL(self.registration.scope).pathname));return c?c.focus():self.clients.openWindow("./");}));});
