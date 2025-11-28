// setInterval ejecuta una función repetidamente cada cierto tiempo.
// En este caso, cada 2000 milisegundos (2 segundos).
setInterval(() => {
    console.log('Hola cada 2 segundos'); // Esto se imprime cada 2 segundos.
}, 2000);


// setTimeout ejecuta una función una sola vez después del tiempo indicado.
// En este caso, después de 3000 milisegundos (3 segundos).
setTimeout(() => {
    console.log('Hola después de 3 segundos'); // Esto se imprime solo una vez.
}, 3000);