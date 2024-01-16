const carrito = [
  { nombre: "Gorro", precio: 5 },
  { nombre: "Guantes", precio: 15 },
  { nombre: "Abrigo", precio: 150 },
  { nombre: "Bufanda", precio: 10 },
  { nombre: "Orejeras", precio: 5 },
  { nombre: "Braga Cuello", precio: 3 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
