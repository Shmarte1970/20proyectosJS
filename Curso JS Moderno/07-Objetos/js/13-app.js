const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.log(Object.keys(producto));

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Disco Duro de 1T", 50);

console.log(Object.keys(producto2));

console.log(Object.values(producto2));

console.log(Object.entries(producto2));
