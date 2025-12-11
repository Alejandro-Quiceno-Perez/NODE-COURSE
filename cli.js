/*
    --- Breve documentación del uso del paquete "colors" en Node.js ---

    El paquete "colors" permite agregar estilos, colores y fondos a los textos 
    que se muestran en la consola, facilitando la lectura y destacando mensajes.

    1. Importación del paquete:
       const colors = require('colors');
       Esto carga todas las funciones y modificaciones que "colors" añade 
       a los strings en Node.js.

    2. console.log(colors);
       Muestra en consola el objeto completo del módulo, útil para revisar 
       qué métodos y estilos están disponibles.

    3. "Hola mundo".bgGreen
       Aplica un fondo verde al texto. Gracias a "colors", los strings 
       pueden encadenar propiedades de estilo.

    4. "AlejandroQuicenoPerez".bgCyan
       Muestra el texto con un fondo color cian.

    5. "Bienvenido a mi mundo!!!".yellow
       Colorea el texto en amarillo.

    Este paquete funciona extendiendo el prototipo de String, lo que permite 
    escribir estilos como propiedades directamente. Es ideal para logs más 
    llamativos en aplicaciones de consola.
*/


const colors = require('colors');


console.log(colors);
console.log("Hola mundo".bgGreen);
console.log("AlejandroQuicenoPerez".bgCyan);
console.log("Bienvenido a mi mundo!!!".yellow)