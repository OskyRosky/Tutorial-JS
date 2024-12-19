/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

// Crear un array con corchetes
let animales = ["Perro", "Gato", "Elefante", "Tigre", "Delfín"];

// Mostrar el array
console.log(animales);

// Crear un array con el constructor new Array()
let animales = new Array("Perro", "Gato", "Elefante", "Tigre", "Delfín");

// Mostrar el array
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

// Crear un array con animales
let animales = ["Perro", "Gato", "Elefante", "Tigre", "Delfín"];

// Añadir un animal al principio
animales.unshift("León");

// Añadir un animal al final
animales.push("Ballena");

// Mostrar el resultado
console.log(animales);


// 3. Elimina el que se encuentra en tercera posición

// Crear un array con animales
let animales = ["León", "Perro", "Gato", "Elefante", "Tigre", "Delfín", "Ballena"];

// Eliminar el elemento en la tercera posición (índice 2)
animales.splice(2, 1);

// Mostrar el resultado
console.log(animales);


// 4. Crea un set que almacene cinco libros

// Crear un Set con cinco libros
let libros = new Set([
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "El Principito",
    "1984",
    "Crimen y castigo"
]);

// Mostrar el Set en consola
console.log(libros);


// 5. Añade dos más. Uno de ellos repetido

// Crear un Set con cinco libros
let libros = new Set([
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "El Principito",
    "1984",
    "Crimen y castigo"
]);

// Añadir dos libros: uno nuevo y otro repetido
libros.add("Rayuela"); // Nuevo libro
libros.add("1984");    // Libro repetido

// Mostrar el Set actualizado
console.log(libros);


// 6. Elimina uno concreto a tu elección

// Crear un Set con libros
let libros = new Set([
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "El Principito",
    "1984",
    "Crimen y castigo",
    "Rayuela"
]);

// Eliminar un libro específico
libros.delete("Rayuela");

// Mostrar el Set actualizado
console.log(libros);


// 7. Crea un mapa que asocie el número del mes a su nombre

// Crear un Map que asocia el número del mes con su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// Mostrar el Map en consola
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// Crear un Map que asocia el número del mes con su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// Comprobar si el mes número 5 existe
if (meses.has(5)) {
    console.log(`El mes número 5 es ${meses.get(5)}.`);
} else {
    console.log("El mes número 5 no existe en el Map.");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// Crear un Map que asocia el número del mes con su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// Añadir una nueva clave "verano" con un array de los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);

// Mostrar el Map actualizado
console.log(meses);

// Acceder a los meses de verano
console.log(`Meses de verano: ${meses.get("verano").join(", ")}`);


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

// Crear un Array con algunos valores (incluyendo duplicados)
let numeros = [1, 2, 3, 4, 5, 5, 6, 7, 1, 2];

// Transformar el Array en un Set (elimina duplicados)
let numerosUnicos = new Set(numeros);

// Crear un Map y almacenar el Set como valor
let miMapa = new Map();
miMapa.set("numerosUnicos", numerosUnicos);

// Mostrar el Map en consola
console.log(miMapa);

// Acceder al Set dentro del Map
console.log("Números únicos:", Array.from(miMapa.get("numerosUnicos")));
