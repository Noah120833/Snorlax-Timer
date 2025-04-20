self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
            '/Snorlax-Timer/',
    '/Snorlax-Timer/index.html.html',
    '/Snorlax-Timer/relaxocard.html.html',
    '/Snorlax-Timer/stylerelaxo.css',
    '/Snorlax-Timer/stylerelaxo2.css',
    '/Snorlax-Timer/scriptrelaxo.js',
    '/Snorlax-Timer/scriptrelaxo2.js',
    '/Snorlax-Timer/Relaxo.png',
    '/Snorlax-Timer/icon-192.png',
    '/Snorlax-Timer/icon-512.png',
    '/Snorlax-Timer/product_image.png',
    '/Snorlax-Timer/relaxo_eating.webp',
    '/Snorlax-Timer/relaxo_fighting.webp',
    '/Snorlax-Timer/relaxo_sitting.webp',
    '/Snorlax-Timer/relaxo_sleeping.webp',
    '/Snorlax-Timer/relaxo_working.webp',
    '/Snorlax-Timer/manifest.json',
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
