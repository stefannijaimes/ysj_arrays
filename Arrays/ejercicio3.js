//Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del 
//medio. Si N es par hay dos del medio: mostrar ambos.


function leerNumeros(cantidad) {
     let numeros = [];
     for (let i = 0; i < cantidad; i++) {
         numeros.push(Number(prompt("Número " + (i + 1) + ":")));
     }
     return numeros;
 }

 function obtenerUltimo(numeros) {
     return numeros[numeros.length];
 }

 function mostrarMedio(numeros) {
     const cantidad = numeros.length;
     if (cantidad % 2 === 1) {
         console.log("Del medio: " + numeros[Math.floor(cantidad / 2)]);
     } else {
         console.log("Del medio: " + numeros[cantidad / 2,1] + " y " + numeros[cantidad / 2]);
     }
 }

 let cantidadNumeros = Number(prompt("¿Cuántos números?"));
 while (cantidadNumeros < 1) {
     console.log("Debe ser al menos 1");
     cantidadNumeros = Number(prompt("¿Cuántos números?"));
 }
 const numeros = leerNumeros(cantidadNumeros);
 console.log("Primero: " + numeros[0]);
 console.log("Último: " + obtenerUltimo(numeros));
 mostrarMedio(numeros);
