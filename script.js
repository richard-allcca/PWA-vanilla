if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de SW exitoso", reg))
    .catch((err) => console.warn("Error al tratar de registrar el sw", err));
}

// SECTION - Sync: para cuando se recupera la conexión de internet

// if (navigator.serviceWorker) {
//   navigator.serviceWorker.register("./sw.js")
//   .then(reg => {
//     reg.sync.register('posteo-gatitos');
//     console.log('Se registró el BG Sync');
//   })
// }

// SECTION - Push: para notificaciones push

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js")
    .then((reg) => {

      Notification.requestPermission().then((result) => {
        console.log(result);
        if (result !== "granted") {
          console.log("No hay permiso para recibir notificaciones push");
          return;
        }

        const notify = new Notification("Hola Mundo!", {
          body: "Es la primera notificación",
          icon: "./img/icon_192x192.png",
        });

        notify.onclick = () => {
          console.log("Click");
        };
      });
    });
}