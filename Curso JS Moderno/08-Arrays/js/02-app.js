const numeros = [10, 20, 30, 40, 50, [100, 200, 300]];

console.log(numeros);
console.table(numeros);

//Aceder a una posicion

console.log(numeros[2]);

// Aceso a una posicion de un array dentro del array
// El primer numero [5] hace referencia a la posicion del segundo array dentro del array
// el segundo numero [2] hace referencia a la posicion del numero que buscamos

console.log(numeros[5][2]);
