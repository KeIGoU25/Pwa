// Service worker script
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('hello-world').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
        // Add more URLs you want to cache for offline access
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
