// Importamos el módulo nativo 'fs' (File System) de Node.js,
// que nos permite trabajar con archivos en el sistema.
const fs = require('fs');

// Leemos de manera SINCRÓNICA el contenido del archivo 'firts.txt'.
// Al incluir 'utf8', el contenido se devuelve directamente como texto.
const firts = fs.readFileSync('./data/firts.txt', 'utf8'); // Lee el contenido del archivo como string

// Leemos de manera SINCRÓNICA el archivo 'second.txt'.
// En este caso NO especificamos codificación, así que devuelve un Buffer.
const second = fs.readFileSync('./data/second.txt'); // Lee el contenido del archivo como Buffer

// Mostramos en consola el contenido del primer archivo (ya es texto).
console.log(firts);

// Para mostrar el contenido del segundo archivo, convertimos el Buffer a string.
console.log(second.toString());

// Creamos un nuevo archivo llamado 'third.txt' combinando el contenido
// de los dos archivos anteriores. También agregamos un mensaje personalizado.
// writeFileSync crea o sobreescribe el archivo de forma síncrona.
fs.writeFileSync(
    './data/third.txt',
    `Este es el tercer archivo creado con Node.js y contiene: \n ${firts} \n ${second}`
); // Crea o sobrescribe el archivo con el contenido indicado

// Definimos un texto a escribir en un nuevo archivo.
const titleContainer = `--- TITULO DEL ARCHIVO ---`;

// Creamos un archivo llamado 'fourth.txt' que contiene únicamente el título.
// writeFileSync nuevamente lo crea o sobrescribe.
fs.writeFileSync('./data/fourth.txt', titleContainer);