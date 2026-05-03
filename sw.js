const CACHE_NAME = 'horlys-tech-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html1',
  '/style.css1',
  '/script.js1',
  '/manifest.json1'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
