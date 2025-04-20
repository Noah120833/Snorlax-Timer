self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html.html',
        '/relaxocard.html.html',
        '/stylerelaxo.css',
        '/stylerelaxo2.css',
        '/scriptrelaxo.js',
        '/scriptrelaxo2.js',
        '/Relaxo.png',
        '/icon-192.png',
        '/icon-512.png',
        '/product_image.png',
        '/relaxo_eating.webp',
        '/relaxo_fighting.webp',
        '/relaxo_sitting.webp',
        '/relaxo_sleeping.webp',
        '/relaxo_working.webp',
        // Weitere Ressourcen, die du im Cache speichern möchtest
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
