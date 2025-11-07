const CACHE_NAME = 'markdown-notes-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/logo.png',
  '/assets/icons/favicon-32x32.png',
  '/assets/icons/favicon-16x16.png',
  '/assets/icons/favicon-192x192.png',
  '/assets/icons/favicon-512x512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});