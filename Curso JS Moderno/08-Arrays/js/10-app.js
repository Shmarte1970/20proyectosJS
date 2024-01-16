const carrito = [
  { nombre: "Gorro", precio: 5 },
  { nombre: "Guantes", precio: 15 },
  { nombre: "Abrigo", precio: 150 },
  { nombre: "Bufanda", precio: 10 },
  { nombre: "Orejeras", precio: 5 },
  { nombre: "Braga Cuello", precio: 3 },
];

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

// con maps puedo crear un nuevo array

carrito.map(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

const nuevoArray = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArray);
