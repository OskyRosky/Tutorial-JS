/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

// Declaración de cadenas
let cadena1 = "Hola,";
let cadena2 = " ¿cómo estás?";

// Concatenación con el operador +
let resultado1 = cadena1 + cadena2;
console.log("Concatenación con +:", resultado1); // Hola, ¿cómo estás?

// Concatenación usando template literals
let resultado2 = `${cadena1}${cadena2}`;
console.log("Concatenación con template literals:", resultado2); // Hola, ¿cómo estás?


// 2. Muestra la longitud de una cadena de texto

// Declaración de una cadena
let mensaje = "Hola, ¿cómo estás?";

// Obtener la longitud
let longitud = mensaje.length;

// Mostrar el resultado
console.log("La longitud de la cadena es:", longitud);


// 3. Muestra el primer y último carácter de un string

// Declaración de una cadena
let mensaje = "Hola, ¿cómo estás?";

// Obtener el primer carácter
let primerCaracter = mensaje[0];

// Obtener el último carácter
let ultimoCaracter = mensaje[mensaje.length - 1];

// Mostrar los resultados
console.log("Primer carácter:", primerCaracter); // H
console.log("Último carácter:", ultimoCaracter); // ?

// 4. Convierte a mayúsculas y minúsculas un string

// Declaración de una cadena
let mensaje = "Hola, ¿cómo estás?";

// Convertir a mayúsculas
let enMayusculas = mensaje.toUpperCase();

// Convertir a minúsculas
let enMinusculas = mensaje.toLowerCase();

// Mostrar los resultados
console.log("Original:", mensaje);         // Hola, ¿cómo estás?
console.log("En mayúsculas:", enMayusculas); // HOLA, ¿CÓMO ESTÁS?
console.log("En minúsculas:", enMinusculas); // hola, ¿cómo estás?

// 5. Crea una cadena de texto en varias líneas

// Declaración de una cadena multilínea
let mensaje = `Hola,
este es un ejemplo
de una cadena
en varias líneas.`;

// Mostrar el resultado
console.log(mensaje);


// 6. Interpola el valor de una variable en un string

// Declaración de variables
let nombre = "Óscar";
let edad = 30;

// Interpolación de valores en un string
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// Mostrar el resultado
console.log(mensaje);


// 7. Reemplaza todos los espacios en blanco de un string por guiones

// Declaración de un string
let mensaje = "Hola, ¿cómo estás? Espero que todo esté bien.";

// Reemplazar espacios por guiones
let mensajeSinEspacios = mensaje.replace(/ /g, "-");

// Mostrar el resultado
console.log("Original:", mensaje);
console.log("Modificado:", mensajeSinEspacios);


// 8. Comprueba si una cadena de texto contiene una palabra concreta

// Declaración de un string
let mensaje = "Hola, ¿cómo estás? Espero que todo esté bien.";

// Palabra a buscar
let palabra = "Espero";

// Comprobar si la palabra está en el string
let contienePalabra = mensaje.includes(palabra);

// Mostrar el resultado
console.log(`¿El mensaje contiene la palabra "${palabra}"?`, contienePalabra);

// -----------

// Declaración de un string
let mensaje = "Hola, ¿cómo estás? Espero que todo esté bien.";

// Palabra a buscar
let palabra = "Espero";

// Comprobar si la palabra está en el string y mostrar un mensaje personalizado
if (mensaje.includes(palabra)) {
  console.log(`El mensaje sí contiene la palabra "${palabra}".`);
} else {
  console.log(`El mensaje no contiene la palabra "${palabra}".`);
}


// 9. Comprueba si dos strings son iguales

// Declaración de dos cadenas
let string1 = "Hola, ¿cómo estás?";
let string2 = "Hola, ¿cómo estás?";

// Comprobación de igualdad
if (string1 === string2) {
  console.log("Los strings son iguales.");
} else {
  console.log("Los strings no son iguales.");
}

// --------

let string1 = "Hola, ¿Cómo Estás?";
let string2 = "hola, ¿cómo estás?";

if (string1.toLowerCase() === string2.toLowerCase()) {
  console.log("Los strings son iguales (sin importar mayúsculas).");
} else {
  console.log("Los strings no son iguales.");
}


// 10. Comprueba si dos strings tienen la misma longitud

// Declaración de dos cadenas
let string1 = "Este es un ejemplo de la longitud";
let string2 = "Full metal alchemist u OP ?!";

// Comprobación de longitud
if (string1.length === string2.length) {
  console.log("Los strings tienen la misma longitud.");
} else {
  console.log("Los strings no tienen la misma longitud.");
}
