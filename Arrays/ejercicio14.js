//  Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más 
// IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA. 
// Escribe también la versión con for en otra función y comprueba que las dos den el mismo 
// resultado. 
 
 
 function leerPrecios(cantidad) {
     let precios = [];
     for (let i = 0; i < cantidad; i++) {
         precios.push(Number(prompt("Precio " + (i + 1) + ":")));
     }
     return precios;
 }

function calcularConIva(precio) {
     return Math.round(precio * 1.19);
 }

function aplicarIvaConMap(precios) {
     return precios.map((precio) => calcularConIva(precio));
 }

function aplicarIvaConFor(precios) {
     let preciosConIva = [];
     for (let i = 0; i < precios.length; i++) {
         preciosConIva.push(calcularConIva(precios[i]));
     }
     return preciosConIva;
 }

function calcularTotal(numeros) {
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
         suma = suma + numeros[i];
     }
     return suma;
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

 const cantidadProductos = Number(prompt("¿Cuántos productos?"));
 const precios = leerPrecios(cantidadProductos);
 const conIvaMap = aplicarIvaConMap(precios);
 const conIvaFor = aplicarIvaConFor(precios);
 console.log("Sin IVA: " + unirConComas(precios));
 console.log("Con IVA: " + unirConComas(conIvaMap));
 console.log("Con IVA (versión con for): " + unirConComas(conIvaFor));
 console.log("Total con IVA: $" + calcularTotal(conIvaMap));
