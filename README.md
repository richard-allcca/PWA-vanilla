# Ver Proyecto

- [PWA en linea](https://richard-allcca.github.io/PWA-vanilla/)

## Descripción

- En esta primera versión, solo se esta probando funcionalidad básica
- Instalación básica y funcionamiento offline
- En una proxima versión se realizara con una pagina dinámica con funcionalidad completa.

## orientation en json

- landscape = horizontal
- portrait = vertical

## quitar la barra de navegador al explorador

- display = standalone
- display = browser (para mostrar la barra)

## Descripción de los elementos del manifest

- name: Este campo define el nombre de la aplicación que se mostrará al usuario. Es importante para la identificación de la aplicación en la pantalla de inicio y en la tienda de aplicaciones.

- short_name: Proporciona una versión abreviada del nombre de la aplicación, que se utiliza en espacios limitados, como en la pantalla de inicio.

- start_url: Especifica la URL que se abrirá cuando el usuario inicie la aplicación desde la pantalla de inicio. Esto puede ser una página específica de la aplicación.
  - El valor que mencionas, "start_url": "./?utm_source=web_app_manifest", tiene varias implicaciones:
  - Ruta Relativa: El uso de ./ indica que la URL es relativa al directorio donde se encuentra el archivo manifest.json. Esto significa que la aplicación se abrirá en la      misma ubicación que el archivo del manifiesto, lo que es útil para mantener la estructura de la aplicación organizada.
  - Parámetro UTM: El parámetro utm_source=web_app_manifest es un parámetro de seguimiento que se utiliza comúnmente en marketing digital. Este parámetro permite a los desarrolladores o a los analistas de datos identificar que el tráfico proviene de la instalación de la aplicación a través del manifiesto web. Esto puede ser útil para analizar el comportamiento de los usuarios que acceden a la aplicación desde la pantalla de inicio en comparación con otros métodos de acceso.
  - Experiencia del Usuario: Al definir un start_url específico, se asegura que los usuarios siempre comiencen en una página determinada de la aplicación, en lugar de la última página que estaban visitando en el navegador. Esto ayuda a proporcionar una experiencia más coherente y controlada al interactuar con la aplicación.

- display: Indica cómo debe mostrarse la aplicación. Los valores comunes son:
  - fullscreen: La aplicación ocupa toda la pantalla.
  - standalone: La aplicación se muestra como una aplicación nativa, sin la interfaz del navegador.
  - minimal-ui: Muestra una interfaz mínima del navegador.
  - browser: Se abre en una pestaña del navegador.

- background_color: Define el color de fondo de la pantalla de inicio de la aplicación. Esto es útil para mejorar la experiencia visual al cargar la aplicación.

- theme_color: Establece el color del tema de la aplicación, que puede influir en la barra de herramientas del navegador y en otros elementos de la interfaz.

- icons: Es un array que contiene objetos que definen los iconos de la aplicación en diferentes tamaños. Esto permite que la aplicación se muestre correctamente en diferentes dispositivos y resoluciones.

- description: Proporciona una breve descripción de la aplicación, que puede ser útil para los usuarios y para el SEO.
- author: Indica el autor o desarrollador de la aplicación, aunque este campo no es obligatorio.
- orientation: Define la orientación de la aplicación
  - Portrait (Vertical): Esta orientación se caracteriza por tener una altura mayor que el ancho. Es ideal para mostrar contenido que se lee de arriba hacia abajo, como textos, listas o imágenes que se benefician de un formato vertical. Por ejemplo, la mayoría de los teléfonos móviles se sostienen en esta posición para leer mensajes o navegar por redes sociales.
  - Landscape (Horizontal): En esta orientación, el ancho es mayor que la altura. Es más adecuada para contenido visual amplio, como videos, juegos o aplicaciones que requieren una vista más amplia. Esta disposición permite una mejor visualización de gráficos y elementos que se extienden horizontalmente.
