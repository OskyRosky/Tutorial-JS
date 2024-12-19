/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

console.log(mySymbol)
// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)

let myName = "Brais Moure";   // Comillas dobles
let alias = 'MoureDev';       // Comillas simples
let email = `braismoure@mouredev.com`; // Backticks
console.log(typeof myName); // "string"


let myName = "Brais Moure";  
let mensaje = `Hola, mi nombre es ${myName}`;
console.log(mensaje);

let mensaje = `Hola, mi nombre es ${myName}`;
console.log(mensaje);

let age = 37; // Número entero
let height = 1.77; // Número decimal
console.log(typeof age); // "number"
console.log(typeof height); // "number"

let undefinedValue;
console.log(undefinedValue); // undefined
console.log(typeof undefinedValue); // "undefined"

let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // ⚠️ "object" (es un error histórico de JavaScript)

let mySymbol = Symbol("mysymbol");
console.log(typeof mySymbol); // "symbol"
