let resultado, roundUp, roundDown, rounDecimals;

// PI
resultado = Math.PI;

// Redondear
let valorPi = Math.PI;
resultado = Math.round(valorPi); // Redondeo sin decimales
roundUp = Math.ceil(valorPi, 2); // Redondear hacia arriba
roundDown = Math.floor(valorPi, 1); // Redondear hacia abajo
rounDecimals = Number(valorPi.toFixed(2)); //)

console.log(`Redondeando sin decimales ${resultado}`);
console.log(`Redondeando con dos decimales ${rounDecimals}`);
console.log(`Redondeando hacia arriba ${roundUp}`);
console.log(`Redondeando hacia abajo ${roundDown}`);
