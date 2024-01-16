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

resultado = [producto3, ...resultado];

console.table(resultado);
