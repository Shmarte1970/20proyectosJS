const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

// const product = producto.nombre;

// Destructuring

const { nombre } = producto;

console.log(nombre.length);

let product2;

product2 = nombre.slice(0, 8) + "23 pulgadas";

delete producto.nombre;

producto.nombre = product2;

console.log(producto);
