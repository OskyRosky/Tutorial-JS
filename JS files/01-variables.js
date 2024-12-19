/*
Clase 16 - Variables
Vídeo: https://youtu.be/1glVfFxj8a4?t=3049
*/

// var

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)

const usuario = { nombre: "Óscar", edad: 30 };

// Puedo cambiar propiedades
usuario.edad = 31; 
console.log(usuario); // { nombre: "Óscar", edad: 31 }

// Error si intento reasignar toda la variable
// usuario = { nombre: "María" }; // ❌ Error

const vector = [1, 2, 3, 4, 6];
vector; // No hace nada
console.log(vector); // Imprime: [1, 2, 3, 4, 6]

let x = 5;
let y = 10;

let resultado = x + y;
[1, 2, 3].forEach(num => console.log(num));

let x = 5;
let y = 10;

let resultado = x + y;
[1, 2, 3].forEach(num => console.log(num));