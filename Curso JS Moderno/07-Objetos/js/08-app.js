"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen.png";

console.log(producto);

console.log(`El Objeto esta bloqueado:? ${Object.isFrozen(producto)}`);
