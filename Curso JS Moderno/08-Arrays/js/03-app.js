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
  "Diciembre",
];

console.table(meses);

// Cuanto mide el array

console.log("El array tiene " + meses.length + " elementos");

// Recorrer el array

for (let i = 0; i < meses.length; i++) {
  console.log("La posicion del Array " + i + " y corresponde a " + meses[i]);
}
