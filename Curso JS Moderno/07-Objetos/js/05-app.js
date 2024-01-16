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

console.log(producto);

console.log(`El peso es de ${producto.datos.medidas.peso}`);
console.log(`Produccion ${producto.datos.fabricacion.pais}`);
