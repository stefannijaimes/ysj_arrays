// Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la 
// cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el 
// primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km 
// y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en 
// cobertura". 


 function leerDistancias(cantidad) {
     let distancias = [];
     for (let i = 0; i < cantidad; i++) {
         distancias.push(Number(prompt("Distancia " + (i + 1) + ":")));
     }
     return distancias;
 }

 function obtenerEnvioGratis(distancias) {
     return distancias.filter((distancia) => distancia <= 3);
 }

 function contarConEnvio(distancias) {
     return distancias.filter((distancia) => distancia > 3 && distancia <= 10).length;
 }

 function buscarPrimeroFuera(distancias) {
     return distancias.find((distancia) => distancia > 10);
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

 const cantidadPedidos = Number(prompt("¿Cuántos pedidos?"));
 const distancias = leerDistancias(cantidadPedidos);
 const gratis = obtenerEnvioGratis(distancias);
 console.log("Envío gratis (" + gratis.length + "): " + unirConComas(gratis));
 console.log("Pagan envío: " + contarConEnvio(distancias));
 const primeroFuera = buscarPrimeroFuera(distancias);
 if (primeroFuera === undefined) {
     console.log("Todos los pedidos están en cobertura");
 } else {
     console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
 }