// Objec Literal

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Object Constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Disco Duro de 1T", 50);
console.log(producto2);

const producto3 = new Producto("CPU i5", 250);
console.log(producto3);
