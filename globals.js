console.log(__dirname);
console.log(__filename);

console.log(module);
console.log(require)

console.log(process)

/*

__dirname: ruta del directorio del archivo actual.
__filename: ruta completa del archivo actual.
process: objeto global que contiene información y control del proceso (ej.: process.env, process.argv, process.exit()).
global / globalThis: objeto global (equivalente a window en navegadores).
require / module.exports / exports: sistema CommonJS para importar/exportar módulos (útil si organizas código en varios archivos).
console: para imprimir en consola (log, error, table, etc.).
Timers: setTimeout, setInterval, setImmediate, clearTimeout, clearInterval.
Buffer: para trabajar con datos binarios.
process.cwd() vs __dirname: process.cwd() devuelve el directorio de trabajo actual al ejecutar Node, mientras __dirname es el directorio del archivo; ambos pueden diferir si ejecutas desde otro lugar.
ES Modules: si usas "type":"module" en package.json, verás import/export y import.meta.url en lugar de require/__filename (esto cambia cómo se obtienen algunas rutas).

*/