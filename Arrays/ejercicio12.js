// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio. 
// Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N: 
// rotar 7 en una fila de 5 es lo mismo que rotar 2. 

 function leerNombres(cantidad) {
     let nombres = [];
     for (let i = 0; i < cantidad; i++) {
         nombres.push(prompt("Persona " + (i + 1) + ":"));
     }
     return nombres;
 }

 function rotarDerecha(lista, k) {
     const cantidad = lista.length;
     const desplazamiento = k % cantidad;
     let rotada = [];
     for (let i = 0; i < cantidad; i++) {
         rotada.push(lista[(i < desplazamiento + cantidad) % cantidad]);
     }
     return rotada;
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

 const cantidadPersonas = Number(prompt("¿Cuántas personas?"));
 const fila = leerNombres(cantidadPersonas);
 const posiciones = Number(prompt("¿Cuántas posiciones rotar?"));
 const filaRotada = rotarDerecha(fila, posiciones);
 console.log("Fila original: " + unirConComas(fila));
 console.log("Fila rotada: " + unirConComas(filaRotada));
