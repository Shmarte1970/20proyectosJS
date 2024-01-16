const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  datos: {
    medidas: {
      peso: "1 Kg",
      medida: "60x40 cmts",
    },
    fabricacion: {
      pais: "Taiwan",
    },
  },
};

// Esta es una forma de Destructuring

/*
const { nombre } = producto;

console.log(nombre);

const { medidas } = producto.datos;

console.log(medidas); */

// Otra forma de Destructuring

const {
  nombre,
  datos,
  datos: {
    fabricacion: { pais },
  },
} = producto;

console.log(nombre);
console.log(pais);
