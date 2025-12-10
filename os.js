// Importamos el módulo 'os' de Node.js.
// Este módulo nos permite obtener información del sistema operativo.
const os = require('os');

// Imprime el tiempo que lleva encendido el sistema en segundos.
console.log(os.uptime());

// Imprime la plataforma del sistema operativo (ej: 'win32', 'linux', 'darwin').
console.log(os.platform());

// Imprime información del usuario actual (nombre, directorio home, etc).
console.log(os.userInfo());

// Usamos console.table para mostrar información del sistema en formato tabla.
// Esto hace que los datos sean más fáciles de leer.
console.table({
    os: os.type(),          // Devuelve el nombre del sistema operativo.
    release: os.release(),  // Versión específica del sistema operativo.
    totalMem: os.totalmem(),// Memoria total disponible en el sistema (en bytes).
    freeMem: os.freemem(),  // Memoria libre del sistema (en bytes).
    version: os.version()   // Muestra la versión completa del sistema operativo.
});