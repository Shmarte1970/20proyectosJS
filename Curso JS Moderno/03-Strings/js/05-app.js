const producto = "Monitor 20 Pulgadas";

// replace para reemplazar
console.log(producto);
console.log(producto.replace("Pulgadas", '"'));
console.log(producto.replace(`Monitor`, `Monitores Curvos`));

// .slice para cortar

console.log(producto.slice(0, 8));
console.log(producto.slice(8));

console.log(producto.substring(2, 1));
