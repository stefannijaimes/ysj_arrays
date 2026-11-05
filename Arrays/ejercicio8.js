// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días 
// estuvieron por encima del promedio y cuántos fueron. 


 let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

 function leerVentas(dias) {
     let ventas = [];
     for (let i = 0; i < dias.length; i++) {
         ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
     }
     return ventas;
 }

 function calcularPromedio(numeros) {
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
         suma = suma + numeros[i];
     }
     return suma / numeros.length;
 }

 function contarMayoresQue(numeros, limite) {
     let cantidad = 0;
     for (let i = 0; i < numeros.length; i++) {
         if (numeros[i] > limite) {
             cantidad = cantidad + 1;
         }
     }
     return cantidad;
 }

 function mostrarDiasSobre(dias, ventas, limite) {
     for (let i = 0; i < ventas.length; i++) {
         if (ventas[i] > limite) {
             console.log(dias[i] + ": $" + ventas[i]);
         }
     }
 }

 const ventas = leerVentas(dias);
 const promedioDiario = Math.round(calcularPromedio(ventas));
 console.log("Promedio diario: $" + promedioDiario);
 console.log("Días por encima del promedio:");
 mostrarDiasSobre(dias, ventas, promedioDiario);
 console.log("Total: " + contarMayoresQue(ventas, promedioDiario) + " días");
