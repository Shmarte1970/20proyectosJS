const fs = require("fs");

function generarSeriesAleatoriaA() {
  let letra = "A";
  for (let a = 0; a < 8; a++) {
    letra += Math.floor(Math.random() * 10);
  }
  return letra;
}

function generarSeriesAleatoriaB() {
  let letra = "B";
  for (let a = 0; a < 8; a++) {
    letra += Math.floor(Math.random() * 10);
  }
  return letra;
}

let seriesAleatoriasAB = [];
for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    seriesAleatoriasAB.push(generarSeriesAleatoriaA());
  } else {
    seriesAleatoriasAB.push(generarSeriesAleatoriaB());
  }
  const sqlStatement =
    "update empresas set cifEmpresa = " +
    "(" +
    "'" +
    seriesAleatoriasAB[i - 1] +
    "'" +
    ")" +
    " where id=" +
    i +
    ";";

  console.log(sqlStatement);

  fs.appendFileSync("Contanido.txt", sqlStatement + "\n");
}
