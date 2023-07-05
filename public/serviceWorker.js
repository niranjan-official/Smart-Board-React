/**
 * @file Service Worker
 * @desc MIME-Type: application/javascript
 */

const staticCacheName = 'static-assets-v1';
const dynamicCacheName = 'dynamic-assets-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // Add other static assets here
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before storing in the cache
        const clonedResponse = response.clone();

        // Open the dynamic cache and store the fetched response
        caches.open(dynamicCacheName).then(cache => {
          cache.put(event.request, clonedResponse);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('static-assets-') && cacheName !== staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
