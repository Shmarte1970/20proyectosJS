const carrito = [];

// Definir porducto

const producto = {
  nombre: "Tarjeta SD 8gb",
  precio: 5,
};

const producto2 = {
  nombre: "Lector de Tarjeta",
  precio: 10,
};

const producto3 = {
  nombre: "Impresora 3-D",
  precio: 300,
};

let resultado = [...carrito, producto];

resultado = [...resultado, producto2];

// Eliminar elemento de un array

carrito.push(producto);

carrito.push(producto2);

carrito.unshift(producto3);

/*
console.table(carrito);

carrito.pop();

console.table(carrito);

carrito.shift(carrito);

console.table(carrito);
*/

console.table(carrito);

carrito.splice(1, 1);

console.table(carrito);
