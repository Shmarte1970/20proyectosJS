const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1 mts",
};

console.log(producto);
console.log(medidas);

const respuesta = Object.assign(producto, medidas);

//Spread

const respuesta2 = { ...producto, ...medidas };

console.log(respuesta);
console.log(respuesta2);
