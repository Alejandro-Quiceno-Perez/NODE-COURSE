const path = require('path');

const filePath = path.join('/public', 'dist', '/styles', 'main.css');

console.log(filePath); // Imprime la ruta completa del archivo
console.log(path.basename(filePath)); // Imprime el nombre del archivo: 'main.css'
console.log(path.dirname(filePath)); // Imprime el directorio del archivo: '/public/dist/styles'
console.log(path.extname(filePath)); // Imprime la extensión del archivo: '.css'
console.log(path.parse(filePath)); // Imprime un objeto con detalles del archivo

console.log(path.resolve('dist')); // Imprime la ruta absoluta al directorio 'dist' desde el directorio actual