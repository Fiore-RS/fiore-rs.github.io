// "Interruptor" para el service worker viejo de Sobres (scope /sobres/).
// Quien tenía la app abierta sigue con ese service worker, que serviría la
// versión guardada en caché en vez de la redirección a /zobro/. Cuando el
// navegador busca una actualización de /sobres/sw.js, recibe este archivo:
// borra solo las cachés de /sobres/ (no las de Teleo ni las de Zobro), se
// da de baja y recarga las pestañas, que así caen en public/sobres/index.html.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const claves = await caches.keys()
      await Promise.all(claves.filter((c) => c.includes('/sobres/')).map((c) => caches.delete(c)))
      await self.registration.unregister()
      const ventanas = await self.clients.matchAll({ type: 'window' })
      ventanas.forEach((v) => v.navigate(v.url))
    })(),
  )
})
