
// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares, 
// en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar 
// "(ninguno)". 

 function leerNumeros(cantidad) {
     let numeros = [];
     for (let i = 0; i < cantidad; i++) {
         numeros.push(Number(prompt("Número " + (i + 1) + ":")));
     }
     return numeros;
 }

 function esPar(numero) {
     return numero % 2 === 0;
 }

 function filtrarPares(numeros) {
     let pares = [];
     for (let i = 0; i < numeros.length; i++) {
         if (esPar(numeros[i])) {
             pares.push(numeros[i]);
         }
     }
     return pares;
 }

 function filtrarImpares(numeros) {
     let impares = [];
     for (let i = 0; i < numeros.length; i++) {
         if (!esPar(numeros[i])) {
             impares.push(numeros[i]);
         }
     }
     return impares;
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

 function mostrarGrupo(titulo, lista) {
     if (lista.length === 0) {
         console.log(titulo + " (0): (ninguno)");
     } else {
         console.log(titulo + " (" + lista.length + "): " + unirConComas(lista));
     }
 }

 const numeros = leerNumeros(8);
 mostrarGrupo("Pares", filtrarPares(numeros));
 mostrarGrupo("Impares", filtrarImpares(numeros));
