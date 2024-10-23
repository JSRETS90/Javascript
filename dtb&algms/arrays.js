/*Practice making arrays, adding items, find the index, etc etc ...... */

let numeros =[1, 2, 3, 4]

console.log(numeros);

numeros.push(5);
numeros.push(6, 7, 8);

console.log(numeros);

console.log(numeros.length);/* using ".length" we can see the number of items in the array */

console.log(numeros[6]);

let primerNumero = numeros.shift();

console.log(numeros);

console.log(primerNumero);

numeros.unshift(primerNumero);

console.log(numeros);

numeros.push(9);

console.log(numeros);

let cars = ['Camry', 'Civic']; /**strings can also be used in arrays */

console.log(cars);