/* 
    --- DOCUMENTACIÓN BREVE SOBRE HTTP EN NODE.JS ---

    Node.js incluye un módulo nativo llamado 'http', que permite crear 
    servidores web sin necesidad de frameworks externos. Este módulo 
    funciona de manera asíncrona y orientada a eventos, lo cual hace 
    que Node sea eficiente para manejar múltiples solicitudes al mismo tiempo.

    1. Importación del módulo:
       const http = require('http');
       Esto permite acceder a las funciones necesarias para crear un servidor.

    2. Creación del servidor:
       const server = http.createServer((req, res) => {});
       La función recibe:
         - req (request): contiene datos enviados por el cliente.
         - res (response): se usa para enviar respuestas al cliente.

    3. Información común del request (req):
         - req.url : ruta solicitada por el cliente.
         - req.method : método HTTP (GET, POST, etc.).
         - req.headers : cabeceras enviadas por el cliente.

    4. Manejo de la respuesta (res):
         - res.writeHead(statusCode, headers): establece estado y tipo de contenido.
         - res.write(): escribe contenido en la respuesta.
         - res.end(): finaliza la respuesta (obligatorio).

    5. Manejo de rutas básico:
         Puedes usar condicionales para responder diferente según req.url.

    6. Lectura del cuerpo (body) en solicitudes POST:
         El cuerpo llega en "chunks", por lo que debe leerse con:
         req.on('data', ...) y req.on('end', ...).

    7. Puesta en marcha del servidor:
         server.listen(puerto, callback):
         Permite que el servidor comience a escuchar solicitudes entrantes.

    Esta es la base para crear APIs y servicios web con Node.js puro.
*/


// ! Importamos el módulo nativo 'http' de Node.js, que permite crear servidores web.
const http = require('http');

// Creamos un servidor HTTP básico usando createServer().
// Esta función recibe un callback que se ejecuta cada vez que el servidor
// recibe una solicitud (request). El callback recibe dos parámetros:
//   - req: contiene la información de la solicitud realizada por el cliente
//          como la URL, el método HTTP y los headers.
//   - res: permite enviar una respuesta al cliente.
const server = http.createServer((req, res) => {

    // Mostramos en consola la ruta solicitada por el cliente.
    // Esto ayuda a saber qué endpoint está accediendo el usuario.
    console.log(req.url);

    // Validamos si la ruta solicitada es la raíz del sitio ('/').
    // Si es así, respondemos con un mensaje de bienvenida.
    if (req.url === '/') {
        res.write('Bienvenido a la página principal');
        return res.end(); // Finalizamos la respuesta inmediatamente.
    }

    // Validamos si el usuario accedió a la ruta '/about'.
    // En ese caso, enviamos información relacionada con dicha página.
    if (req.url === '/about') {
        res.write('Esta es la página de About');
        return res.end(); // Finalizamos la respuesta.
    }

    // Si ninguna de las rutas coincide, enviamos una página HTML simple
    // indicando que la ruta no existe (Error 404).
    res.write(`
            <h1>Not Found - 404</h1>
            <p>La página que buscas no existe.</p>
            <a href="/">Volver al inicio</a>
        `);

    // Finalizamos la respuesta. Es obligatorio cerrar la respuesta
    // para que el cliente pueda recibirla correctamente.
    res.end();

    // El servidor atenderá cualquier tipo de solicitud que llegue,
    // pero solo manejamos manualmente las rutas definidas arriba.
});

// listen(3000) indica que el servidor escuchará las solicitudes HTTP
// en el puerto 3000 de la máquina local.
server.listen(3000);

// Mensaje para confirmar en la consola que el servidor está activo
// y funcionando correctamente.
console.log("Servidor corriendo en el puerto 3000");

