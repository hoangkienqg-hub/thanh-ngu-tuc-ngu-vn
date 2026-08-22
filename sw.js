/**
 * Service Worker - Chiến lược Stale-While-Revalidate cho PWA Offline
 * Nền tảng Thành Ngữ & Tục Ngữ Dân Gian - Tiếng Việt 4-5
 */
const CACHE_NAME = 'thanh-ngu-tuc-ngu-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './games/index.html',
  './games/29_th_thanh_ngu_tuc_ngu/index.html',
  './games/29_th_thanh_ngu_tuc_ngu/game_01_Bat_dau.html'
];

// Cài đặt: Nén cache các tài nguyên tĩnh
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Kích hoạt: Xóa cache cũ
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request)
        .then(networkResponse => {
          if (networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});

// Background sync cho dữ liệu điểm
self.addEventListener('sync', event => {
  if (event.tag === 'sync-scores') {
    event.waitUntil(syncScoresToSheet());
  }
});

async function syncScoresToSheet() {
  const cache = await caches.open(CACHE_NAME);
  const pending = await cache.match('/api/pending-scores');
  if (pending) {
    const data = await pending.json();
    // Gửi lên Google Sheet Web App
    await fetch('https://script.google.com/macros/s/AKfycbxYOUR_SCRIPT_ID/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors'
    });
  }
}
