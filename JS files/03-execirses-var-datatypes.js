/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un comentario en una línea kadkasdaskdasdasdas

// 2. Escribe un comentario en varias líneas

/*
Este es un comentario
en varias líneas
en JavaScript
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos


// Tipo String (Cadenas de texto)
let myString = "Esto es una cadena de texto";

// Tipo Number (Números)
let myNumber = 42; // Número entero
let myDecimal = 3.14; // Número decimal

// Tipo Boolean (Booleanos)
let myBooleanTrue = true;
let myBooleanFalse = false;

// Tipo Undefined (Sin valor asignado)
let myUndefined;

// Tipo Null (Ausencia intencionada de valor)
let myNull = null;

// Tipo Symbol (Identificador único)
let mySymbol = Symbol("identificador");

// Tipo BigInt (Números enteros muy grandes)
let myBigInt = 12345678901234567890n;


// 4. Imprime por consola el valor de todas las variables y Mostramos los valores y tipos en la consola
console.log("String:", myString, typeof myString);
console.log("Number (entero):", myNumber, typeof myNumber);
console.log("Number (decimal):", myDecimal, typeof myDecimal);
console.log("Boolean (true):", myBooleanTrue, typeof myBooleanTrue);
console.log("Boolean (false):", myBooleanFalse, typeof myBooleanFalse);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Null:", myNull, typeof myNull); // typeof devuelve "object" (error histórico)
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("BigInt:", myBigInt, typeof myBigInt);


// 5. Mostramos los valores y tipos en la consola
console.log("String:", myString, typeof myString);
console.log("Number (entero):", myNumber, typeof myNumber);
console.log("Number (decimal):", myDecimal, typeof myDecimal);
console.log("Boolean (true):", myBooleanTrue, typeof myBooleanTrue);
console.log("Boolean (false):", myBooleanFalse, typeof myBooleanFalse);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Null:", myNull, typeof myNull); // typeof devuelve "object" (error histórico)
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("BigInt:", myBigInt, typeof myBigInt);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// Tipo String (Cadenas de texto)
let myString = "Esto es una cadena de texto";
myString = "Este es un nuevo texto a partir del primero";

console.log("Nuevo String:", myString, typeof myString);

// Tipo Number (Números)
let myNumber = 42; // Número entero
let myDecimal = 3.14; // Número decimal

myNumber = 100;
myDecimal = 2.71;

console.log("Nuevo Number (entero):", myNumber, typeof myNumber);
console.log("Nuevo Number (decimal):", myDecimal, typeof myDecimal);

// Tipo Boolean (Booleanos)
let myBooleanTrue = true;
let myBooleanFalse = false;

myBooleanTrue = false;
myBooleanFalse = true;

console.log("Nuevo Boolean (true):", myBooleanTrue, typeof myBooleanTrue);
console.log("Nuevo Boolean (false):", myBooleanFalse, typeof myBooleanFalse);

// Tipo Undefined
let myUndefined;
myUndefined = undefined; // Sigue siendo undefined

console.log("Nuevo Undefined:", myUndefined, typeof myUndefined);

// Tipo Null
let myNull = null;
myNull = null; // El valor sigue siendo null

console.log("Nuevo Null:", myNull, typeof myNull);

// Tipo Symbol (Identificador único)
let mySymbol = Symbol("identificador");
mySymbol = Symbol("nuevoIdentificador");

console.log("Nuevo Symbol:", mySymbol, typeof mySymbol);

// Tipo BigInt (Números enteros muy grandes)
let myBigInt = 12345678901234567890n;
myBigInt = 98765432109876543210n;

console.log("Nuevo BigInt:", myBigInt, typeof myBigInt);


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// Tipo String → Number
let myString = "Esto es una cadena de texto";
myString = 12345;

console.log("Nuevo valor (Number):", myString, typeof myString);

// Tipo Number → Boolean
let myNumber = 42;
myNumber = false;

console.log("Nuevo valor (Boolean):", myNumber, typeof myNumber);

// Tipo Boolean → String
let myBooleanTrue = true;
myBooleanTrue = "Ahora soy un texto";

console.log("Nuevo valor (String):", myBooleanTrue, typeof myBooleanTrue);

// Tipo Undefined → Null
let myUndefined;
myUndefined = null;

console.log("Nuevo valor (Null):", myUndefined, typeof myUndefined);

// Tipo Null → Symbol
let myNull = null;
myNull = Symbol("nuevoSymbol");

console.log("Nuevo valor (Symbol):", myNull, typeof myNull);

// Tipo Symbol → BigInt
let mySymbol = Symbol("identificador");
mySymbol = 9876543210123456789n;

console.log("Nuevo valor (BigInt):", mySymbol, typeof mySymbol);

// Tipo BigInt → String
let myBigInt = 12345678901234567890n;
myBigInt = "Ahora soy un texto";

console.log("Nuevo valor (String):", myBigInt, typeof myBigInt);


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// Tipo String (Cadenas de texto)
const myString = "Esto es una cadena de texto";
console.log("String:", myString, typeof myString);

// Tipo Number (Números)
const myNumber = 42; // Entero
const myDecimal = 3.14; // Decimal
console.log("Number (entero):", myNumber, typeof myNumber);
console.log("Number (decimal):", myDecimal, typeof myDecimal);

// Tipo Boolean (Booleanos)
const myBooleanTrue = true;
const myBooleanFalse = false;
console.log("Boolean (true):", myBooleanTrue, typeof myBooleanTrue);
console.log("Boolean (false):", myBooleanFalse, typeof myBooleanFalse);

// Tipo Undefined (Valor inicial "undefined" no es permitido en const)
// const myUndefined; ❌ Error: const debe ser inicializada

// Tipo Null (Ausencia intencionada de valor)
const myNull = null;
console.log("Null:", myNull, typeof myNull); // ⚠️ typeof devuelve "object" (error histórico)

// Tipo Symbol (Identificador único)
const mySymbol = Symbol("identificador");
console.log("Symbol:", mySymbol, typeof mySymbol);

// Tipo BigInt (Números enteros muy grandes)
const myBigInt = 12345678901234567890n;
console.log("BigInt:", myBigInt, typeof myBigInt);


// 9. A continuación, modifica los valores de las constantes

// Declaración de constantes
const myString = "Esto es una cadena de texto";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
const mySymbol = Symbol("identificador");
const myBigInt = 12345678901234567890n;

// Intento de reasignación
myString = "Nuevo texto"; // ❌ Error: Assignment to constant variable
myNumber = 100;           // ❌ Error
myBoolean = false;        // ❌ Error
myNull = "No soy null";   // ❌ Error
mySymbol = Symbol("nuevo"); // ❌ Error
myBigInt = 987654321n;    // ❌ Error


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Declaración de constantes
const myString = "Esto es una cadena de texto";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
const mySymbol = Symbol("identificador");
const myBigInt = 12345678901234567890n;

// Intento de reasignación (Producen errores y las comentamos)
// myString = "Nuevo texto"; // ❌ Error: Assignment to constant variable
// myNumber = 100;           // ❌ Error
// myBoolean = false;        // ❌ Error
// myNull = "No soy null";   // ❌ Error
// mySymbol = Symbol("nuevo"); // ❌ Error
// myBigInt = 987654321n;    // ❌ Error

// Mostrar los valores actuales en la consola
console.log("String:", myString, typeof myString);
console.log("Number:", myNumber, typeof myNumber);
console.log("Boolean:", myBoolean, typeof myBoolean);
console.log("Null:", myNull, typeof myNull); // "object" por error histórico
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("BigInt:", myBigInt, typeof myBigInt);
