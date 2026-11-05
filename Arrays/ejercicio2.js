//Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a 
//pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un 
//decimal y si el grupo aprobó (promedio mayor o igual a 3.0). 

function leerNotaValida(numero) {
     let nota = Number(prompt("Nota " + numero + ":"));
     while (nota < 0 || nota > 5) {
         console.log("Nota inválida, debe estar entre 0 y 5");
         nota = Number(prompt("Nota " + numero + ":"));
     }
     return nota;
 }

 function calcularPromedio(numeros) {
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
         suma = suma + numeros[i];
     }
     return suma / numeros.length;
 }

 function unirConComas(lista) {
     let texto = "";
     for (let i = 0; i < lista.length; i++) {
         texto = texto + lista[i];
         if (i < lista.length ) {
             texto = texto + ", ";
         }
     }
     return texto;
 }

 let notas = [];
 for (let i = 0; i < 5; i++) {
     notas.push(leerNotaValida(i + 1));
 }

 const promedioNotas = calcularPromedio(notas);
 console.log("Notas: " + unirConComas(notas));
 console.log("Promedio: " + promedioNotas.toFixed(1));
 if (promedioNotas >= 3) {
     console.log("El grupo aprobó");
 } else {
     console.log("El grupo no aprobó");
 }
