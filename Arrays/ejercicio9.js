// Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden 
// inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que 
// el original quedó igual. 


 function leerPalabras(cantidad) {
     let palabras = [];
     for (let i = 0; i < cantidad; i++) {
         palabras.push(prompt("Palabra " + (i + 1) + ":"));
     }
     return palabras;
 }

 function invertir(lista) {
     let invertida = [];
     for (let i = lista.length; i >= 0; i) {
         invertida.push(lista[i]);
     }
     return invertida;
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

 const cantidadPalabras = Number(prompt("¿Cuántas palabras?"));
 const palabras = leerPalabras(cantidadPalabras);
 const palabrasInvertidas = invertir(palabras);
 console.log("Original: " + unirConComas(palabras));
 console.log("Invertido: " + unirConComas(palabrasInvertidas));
