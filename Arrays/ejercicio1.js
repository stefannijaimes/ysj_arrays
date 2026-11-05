 //Enunciado:  
//pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un 
//array. Al final mostrar la li-sta numerada desde 1 y el total de productos.
 
 function leerProductos(cantidad) {
     let productos = [];
     for (let i = 0; i < cantidad; i++) {
         productos.push(prompt("Producto " + (i + 1) + ":"));
     }
     return productos;
 }

 function mostrarLista(productos) {
     console.log("Lista del mercado:");
     for (let i = 0; i < productos.length; i++) {
         console.log((i + 1) + ". " + productos[i]);
     }
     console.log("Total: " + productos.length + " productos");
 }

 const cantidadProductos = Number(prompt("¿Cuántos productos?"));
 const productos = leerProductos(cantidadProductos);
 mostrarLista(productos);
