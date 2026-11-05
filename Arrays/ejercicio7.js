// Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones 
// validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no 
// cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más 
// frecuente. 


 function leerCalificacionValida(numero) {
     let calificacion = Number(prompt("Calificación " + numero + ":"));
     while (calificacion < 1 || calificacion > 5) {
         console.log("Calificación inválida, debe estar entre 1 y 5");
         calificacion = Number(prompt("Calificación " + numero + ":"));
     }
     return calificacion;
 }

 function contarPorEstrellas(calificaciones) {
     let contadores = [0, 0, 0, 0, 0];
     for (let i = 0; i < calificaciones.length; i++) {
         const indice = calificaciones[i];
         contadores[indice] = contadores[indice] + 1;
     }
     return contadores;
 }

 function repetirCaracter(caracter, veces) {
     let texto = "";
     for (let i = 0; i < veces; i++) {
         texto = texto + caracter;
     }
     return texto;
 }

 function buscarPosicionMayor(numeros) {
     let posicion = 0;
     for (let i = 1; i < numeros.length; i++) {
         if (numeros[i] > numeros[posicion]) {
             posicion = i;
         }
     }
     return posicion;
 }

 let calificaciones = [];
 for (let i = 0; i < 10; i++) {
     calificaciones.push(leerCalificacionValida(i + 1));
 }
 const contadores = contarPorEstrellas(calificaciones);
 for (let i = 0; i < contadores.length; i++) {
     if (contadores[i] === 0) {
         console.log("Estrellas " + (i + 1) + ": (0)");
     } else {
         console.log("Estrellas " + (i + 1) + ": " + repetirCaracter("*", contadores[i]) + " (" + contadores[i] + ")");
     }
 }
 console.log("Más frecuente: " + (buscarPosicionMayor(contadores) + 1) + " estrellas");
