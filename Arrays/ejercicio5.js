//Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la 
//diferencia entre ambos. 


let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function leerVentas(dias) {
     let ventas = [];
     for (let i = 0; i < dias.length; i++) {
         ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
     }
     return ventas;
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


function buscarPosicionMenor(numeros) {
     let posicion = 0;
     for (let i = 1; i < numeros.length; i++) {
         if (numeros[i] < numeros[posicion]) {
             posicion = i;
         }
     }
     return posicion;
 }

 const ventas = leerVentas(dias);
 const posicionMayor = buscarPosicionMayor(ventas);
 const posicionMenor = buscarPosicionMenor(ventas);
 console.log("Mejor día: " + dias[posicionMayor] + " ($" + ventas[posicionMayor] + ")");
 console.log("Peor día: " + dias[posicionMenor] + " ($" + ventas[posicionMenor] + ")");
 console.log("Diferencia: $" + (ventas[posicionMayor] , [posicionMenor]));
