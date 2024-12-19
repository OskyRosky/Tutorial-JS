/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

// Declaración de variables
let a = 10;
let b = 3;

// Operaciones aritméticas
let suma = a + b;            // Suma
let resta = a - b;           // Resta
let multiplicacion = a * b;  // Multiplicación
let division = a / b;        // División
let modulo = a % b;          // Módulo (resto de la división)
let exponente = a ** b;      // Exponente (a elevado a la b)

// Incremento y decremento
let incremento = a;          // Incremento
incremento++;                // Sumar 1 al valor de "a"

let decremento = b;          // Decremento
decremento--;                // Restar 1 al valor de "b"

// Mostrar resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Exponente:", exponente);
console.log("Incremento:", incremento);
console.log("Decremento:", decremento);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// Variables base
let a = 10;
let b = 3;

// Operaciones de asignación
let asignacion = a;         // Asignación simple
console.log("Asignación:", asignacion);

let sumaAsignacion = a;     
sumaAsignacion += b;        // Suma con asignación
console.log("Suma con asignación:", sumaAsignacion);

let restaAsignacion = a;    
restaAsignacion -= b;       // Resta con asignación
console.log("Resta con asignación:", restaAsignacion);

let multiplicacionAsignacion = a;
multiplicacionAsignacion *= b; // Multiplicación con asignación
console.log("Multiplicación con asignación:", multiplicacionAsignacion);

let divisionAsignacion = a;
divisionAsignacion /= b;    // División con asignación
console.log("División con asignación:", divisionAsignacion);

let moduloAsignacion = a;
moduloAsignacion %= b;      // Módulo con asignación
console.log("Módulo con asignación:", moduloAsignacion);

let exponenteAsignacion = a;
exponenteAsignacion **= b;  // Exponente con asignación
console.log("Exponente con asignación:", exponenteAsignacion);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 10;
let b = 5;
let c = "10";

// Comparación 1: Mayor que (>)
console.log("Comparación 1:", a > b); // true

// Comparación 2: Menor o igual que (<=)
console.log("Comparación 2:", b <= a); // true

// Comparación 3: Igualdad de valor (==)
console.log("Comparación 3:", a == c); // true (compara solo valor)

// Comparación 4: Desigualdad estricta (!==)
console.log("Comparación 4:", a !== c); // true (valor igual, tipo diferente)

// Comparación 5: Igualdad estricta (===)
console.log("Comparación 5:", b + b === a);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let a = 10;
let b = 5;
let c = "10";

// Comparación 1: Menor que (<)
console.log("Comparación 1:", a < b); // false (10 no es menor que 5)

// Comparación 2: Mayor o igual que (>=)
console.log("Comparación 2:", b >= a); // false (5 no es mayor o igual que 10)

// Comparación 3: Igualdad estricta (===)
console.log("Comparación 3:", a === c); // false (valor igual, pero tipo diferente)

// Comparación 4: Desigualdad por valor (!=)
console.log("Comparación 4:", a != 10); // false (10 es igual a 10)

// Comparación 5: Igualdad de valor (==)
console.log("Comparación 5:", a + b == c); // false (5 + 5 es 10, pero "10" no es estrictamente evaluado aquí como falsedad)


// 5. Utiliza el operador lógico and

let a = 10;
let b = 5;
let c = 15;

// Ejemplo 1: Ambas condiciones son verdaderas
console.log("Ejemplo 1:", a > b and c > a); // true && true → true

// Ejemplo 2: Una condición es falsa
console.log("Ejemplo 2:", a > b && c < a); // true && false → false

// Ejemplo 3: Ambas condiciones son falsas
console.log("Ejemplo 3:", a < b && c < a); // false && false → false

// Ejemplo 4: Comparación combinada
console.log("Ejemplo 4:", a > 0 && b > 0 && c > 10); // true && true && true → true

// Ejemplo 5: Uso con variables booleanas
let isLoggedIn = true;
let hasAccess = false;

console.log("Ejemplo 5:", isLoggedIn && hasAccess); // true && false → false



let edad = 25;
let tieneLicencia = true;

// Usamos el operador &&
if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
}

// 6. Utiliza el operador lógico or

let a = 10;
let b = 5;
let c = 0;

// Ejemplo 1: Al menos una condición verdadera
console.log("Ejemplo 1:", a > b || c > b); // true || false → true

// Ejemplo 2: Todas las condiciones son falsas
console.log("Ejemplo 2:", a < b || c > b); // false || false → false

// Ejemplo 3: Todas las condiciones son verdaderas
console.log("Ejemplo 3:", a > b || c < b); // true || true → true

// Ejemplo 4: Uso con variables booleanas
let tieneTrabajo = false;
let tieneAhorros = true;

console.log("Ejemplo 4:", tieneTrabajo || tieneAhorros); // false || true → true

// Ejemplo 5: Comparación combinada
console.log("Ejemplo 5:", a > b || (b + c) === 5 || c < a); // true || true || true → true


// 7. Combina ambos operadores lógicos

let a = 10;
let b = 5;
let c = 20;

// Ejemplo 1: Sin paréntesis
console.log("Ejemplo 1:", a > b && b > c || c > a); 
// true && false || true → (false || true) → true

// Ejemplo 2: Con paréntesis para cambiar la prioridad
console.log("Ejemplo 2:", (a > b || b > c) && c > a); 
// (true || false) && true → true && true → true

// Ejemplo 3: Evaluación con variables booleanas
let isAdult = true;
let hasID = false;
let isWithParent = true;

console.log("Ejemplo 3:", isAdult && hasID || isWithParent); 
// true && false || true → (false || true) → true

// Ejemplo 4: Todas las condiciones deben cumplirse
console.log("Ejemplo 4:", (isAdult && hasID) || (isAdult && isWithParent)); 
// (true && false) || (true && true) → false || true → true

// Ejemplo 5: Caso complejo con varias condiciones
console.log("Ejemplo 5:", (a > b && b < c) || (c === 20 && a < b)); 
// (true && true) || (true && false) → true || false → true


// 8. Añade alguna negación

// Ejemplo 1: Negación de valores booleanos
console.log("Ejemplo 1:", !true);  // false
console.log("Ejemplo 1:", !false); // true

// Ejemplo 2: Negación con valores no booleanos
console.log("Ejemplo 2:", !0);     // true (0 es un valor "falsy")
console.log("Ejemplo 2:", !1);     // false (1 es un valor "truthy")
console.log("Ejemplo 2:", !"");    // true (cadena vacía es "falsy")
console.log("Ejemplo 2:", !"Hola"); // false (cadena no vacía es "truthy")

// Ejemplo 3: Doble negación (convertir a booleano explícito)
console.log("Ejemplo 3:", !!0);     // false (0 convertido a booleano)
console.log("Ejemplo 3:", !!1);     // true (1 convertido a booleano)
console.log("Ejemplo 3:", !!"");    // false (cadena vacía)
console.log("Ejemplo 3:", !!"Hola"); // true (cadena no vacía)

// Ejemplo 4: Uso en condiciones
let isOnline = false;
console.log("Ejemplo 4:", !isOnline ? "El usuario está desconectado" : "El usuario está en línea");

let isOnline = true;
console.log("Ejemplo 4.2:", !isOnline ? "El usuario está desconectado" : "El usuario está en línea");

// Resultado: "El usuario está desconectado"

// Ejemplo 5: Negación combinada con otros operadores
let edad = 17;
console.log("Ejemplo 5:", !(edad >= 18)); // true (porque 17 no es mayor o igual a 18)


// 9. Utiliza el operador ternario

// Ejemplo 1: Verificar si un número es par o impar

let numero = 13;
let resultado = numero % 2 === 0 ? "Es par" : "Es impar";
console.log("Ejemplo 1:", resultado);

// Ejemplo 2: Verificar si una persona es mayor de edad

let edad = 17;
let esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log("Ejemplo 2:", esMayorDeEdad);

// Ejemplo 3: Mensaje basado en el estado de un usuario

let isOnline = true;
let estadoUsuario = isOnline ? "El usuario está en línea" : "El usuario está desconectado";
console.log("Ejemplo 3:", estadoUsuario);

//  Ejemplo 4: Usar ternario anidado

let calificacion = 55;
let resultadoCalificacion = calificacion >= 90
  ? "Excelente"
  : calificacion >= 70
    ? "Aprobado"
    : "Reprobado";
console.log("Ejemplo 4:", resultadoCalificacion);
// Resultado: Aprobado


// Ejemplo 5: Usar ternario con una operación matemática

let a = 10;
let b = 20;
let mayor = a > b ? a : b;
console.log("Ejemplo 5: El número mayor es", mayor);
// Resultado: El número mayor es 20


// 10. Combina operadores aritméticos, de comparáción y lógicas