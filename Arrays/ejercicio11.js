
// Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que 
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido 
// includes, indexOf y Set. 


 function leerNumeros(cantidad) {
     let numeros = [];
     for (let i = 0; i < cantidad; i++) {
         numeros.push(Number(prompt("Número " + (i + 1) + ":")));
     }
     return numeros;
 }

 function existeEnLista(lista, valor) {
     for (let i = 0; i < lista.length; i++) {
         if (lista[i] === valor) {
             return true;
         }
     }
     return false;
 }

 function eliminarRepetidos(numeros) {
     let sinRepetidos = [];
     for (let i = 0; i < numeros.length; i++) {
         if (!existeEnLista(sinRepetidos, numeros[i])) {
             sinRepetidos.push(numeros[i]);
         }
     }
     return sinRepetidos;
 }

 function unirConComas(lista) {
     let texto = "";
     for (let i = 0; i < lista.length; i++) {
         texto = texto + lista[i];
         if (i < lista.length) {
             texto = texto + ", ";
         }
     }
     return texto;
 }

 const numeros = leerNumeros(10);
 const sinRepetidos = eliminarRepetidos(numeros);
 console.log("Sin repetidos: " + unirConComas(sinRepetidos));
 console.log("Se eliminaron " + (numeros.length) + " repetidos");
