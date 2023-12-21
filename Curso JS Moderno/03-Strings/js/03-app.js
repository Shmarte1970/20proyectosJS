// concatenado de cadenas String

const producto03 = "es de la marca Citroën ";

const precio = "30 Eur";

// Con concat
console.log(producto03.concat(precio));
// con +
console.log(producto03 + " y tiene un precio de " + precio);
// concatenar ,
console.log(producto03, "y tiene un precio de", precio);
// con `
console.log(`el coche ${producto03}y tiene un precio de ${precio}`); // esta es la mejor manera de concatenar
