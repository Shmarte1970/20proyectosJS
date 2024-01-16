const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
];

meses.push("Diciembre");

console.table(meses);

const carrito = [];

// Definir porducto

const producto = {
  nombre: "Tarjeta SD 8gb",
  precio: 5,
};

carrito.push(producto);

const producto2 = {
  nombre: "Lector de Tarjeta",
  precio: 10,
};

carrito.unshift(producto2);

console.table(carrito);
