//asignar un nombre y versión al cache
const CACHE_NAME = "v1_cache_programador_fitness";
const urlsToCache = [
  "./",
  "https://fonts.googleapis.com/css?family=Raleway:400,700",
  // "https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2",
  "https://use.fontawesome.com/releases/v5.0.7/css/all.css",
  // "https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2",
  "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
  "./style.css",
  "./script.js",
  "./img/ProgramadorFitness.png",
  "./img/favicon.png",
];

// Install: Durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache
          .addAll(urlsToCache)
          .then(() => {
            self.skipWaiting(); // para forzar el reemplazo de el worker anterior (no se recomienda usarlo)
          }
          );
      })
      .catch((err) => console.log("Falló registro de cache", err))
  );
});

// Activate: Una vez instalado el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [ CACHE_NAME ];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

// Fetch: Cuando el navegador recupera una url
self.addEventListener("fetch", (e) => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        //recuperar del cache
        return res;
      }
      //recuperar de la petición a la url
      return fetch(e.request);
    })
  );
});

// SYNC: Cuando recuperamos la conexión a internet
// self.addEventListener("sync", (e) => {
//   console.log("Tenemos conexión");
//   console.log(e);
//   console.log(e.tag);
// });

// PUSH: Manejar las push notifications
// self.addEventListener("push", (e) => {
//   console.log(e);
//   console.log(e.data);
//   console.log(e.data.text());
//   console.log("Notificación recibida");
// });