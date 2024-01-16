const producto = {
  nombre: "Tarjeta SD 8gb",
  precio: 5,
  disponible: true,
};

const { nombre, precio, disponible } = producto;

console.log(disponible);

// Destructuring con Arreglos

const numeros = [10, 20, 30, 40, 50];

const [, , , , cinco] = numeros;

console.log(cinco);

const numeros2 = [10, 20, 30, 40, 50];

const [, , ...tres] = numeros2;

console.log(tres);
