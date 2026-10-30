const CACHE_NAME = 'word-card-v1';
const ASSETS = ['./index.html','./manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
