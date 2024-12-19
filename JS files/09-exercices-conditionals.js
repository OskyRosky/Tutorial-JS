/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Juan";

if (nombre === "Óscar") {
    console.log("Mi nombre es Óscar");
} else {
    console.log("El nombre no es Óscar, es", nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// Usuario y contraseña establecidos
let usuarioEstablecido = "admin";
let contrasenaEstablecida = "12345";

// Datos ingresados por el usuario
let usuarioIngresado = "admin";
let contrasenaIngresada = "12345";

// Verificación de usuario y contraseña
if (usuarioIngresado === usuarioEstablecido && contrasenaIngresada === contrasenaEstablecida) {
    console.log("Acceso permitido: Usuario y contraseña correctos.");
} else {
    console.log("Acceso denegado: Usuario o contraseña incorrectos.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// Número a verificar
let numero = -5;

// Condicional para verificar el número
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// Edad de la persona
let edad = 16;

// Verificación para votar
if (edad >= 18) {
    console.log("Puedes votar. Tienes", edad, "años.");
} else {
    let anosFaltantes = 18 - edad;
    console.log("No puedes votar. Te faltan", anosFaltantes, "años.");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// Edad de la persona
let edad = 16;

// Uso del operador ternario
let categoria = edad >= 18 ? "adulto" : "menor";

// Mostrar el resultado
console.log(`La persona es un ${categoria}.`);


let edad2 = 38;

// Uso del operador ternario
let categoria2 = edad2 >= 18 ? "adulto" : "menor";

// Mostrar el resultado
console.log(`La persona es un ${categoria2}.`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// Variable mes (1 = Enero, 2 = Febrero, ..., 12 = Diciembre)
let mes = 11;
let estacion;

// Determinar estación según el mes
switch (mes) {
    case 12: // Diciembre
    case 1:  // Enero
    case 2:  // Febrero
        estacion = "Invierno";
        break;
    case 3:  // Marzo
    case 4:  // Abril
    case 5:  // Mayo
        estacion = "Primavera";
        break;
    case 6:  // Junio
    case 7:  // Julio
    case 8:  // Agosto
        estacion = "Verano";
        break;
    case 9:  // Septiembre
    case 10: // Octubre
    case 11: // Noviembre
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes no válido";
        break;
}

// Mostrar la estación del año
console.log(`Estamos en ${estacion}.`);


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch

// Variable mes (1 = Enero, ..., 12 = Diciembre)
let mes = 2; // Cambia este valor para probar con diferentes meses
let dias;

// Determinar el número de días según el mes
switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        dias = 31;
        break;
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
        dias = 30;
        break;
    case 2: // Febrero
        dias = 28; // Asumiendo un año no bisiesto
        break;
    default:
        dias = "Mes no válido";
        break;
}

// Mostrar el resultado
console.log(`El mes ${mes} tiene ${dias} días.`);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// Variable idioma (en, es, fr, de, etc.)
let idioma = "es"; // Cambia este valor para probar diferentes idiomas
let saludo;

// Determinar el saludo según el idioma
switch (idioma) {
    case "en": // Inglés
        saludo = "Hello!";
        break;
    case "es": // Español
        saludo = "¡Hola!";
        break;
    case "fr": // Francés
        saludo = "Bonjour!";
        break;
    case "de": // Alemán
        saludo = "Hallo!";
        break;
    case "it": // Italiano
        saludo = "Ciao!";
        break;
    case "pt": // Portugués
        saludo = "Olá!";
        break;
    default: // Idioma no reconocido
        saludo = "Idioma no reconocido. ¡Hola!";
        break;
}

// Mostrar el saludo
console.log(saludo);


// 9. Usa un switch para hacer de nuevo el ejercicio 6

// Variable mes (1 = Enero, ..., 12 = Diciembre)
let mes = 7;
let estacion;

// Determinar la estación según el mes
switch (mes) {
    case 12: // Diciembre
    case 1:  // Enero
    case 2:  // Febrero
        estacion = "Invierno";
        break;
    case 3:  // Marzo
    case 4:  // Abril
    case 5:  // Mayo
        estacion = "Primavera";
        break;
    case 6:  // Junio
    case 7:  // Julio
    case 8:  // Agosto
        estacion = "Verano";
        break;
    case 9:  // Septiembre
    case 10: // Octubre
    case 11: // Noviembre
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes no válido";
        break;
}

// Mostrar el resultado
console.log(`Estamos en ${estacion}.`);


// 10. Usa un switch para hacer de nuevo el ejercicio 7

// Variables: mes y año
let mes = 2; // Cambia este valor para probar diferentes meses
let anio = 2024; // Cambia este valor para probar diferentes años
let dias;

// Determinar si el año es bisiesto
let esBisiesto = anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0);

// Determinar el número de días según el mes
switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        dias = 31;
        break;
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
        dias = 30;
        break;
    case 2: // Febrero
        dias = esBisiesto ? 29 : 28;
        break;
    default:
        dias = "Mes no válido";
        break;
}

// Mostrar el resultado
if (typeof dias === "number") {
    console.log(`El mes ${mes} del año ${anio} tiene ${dias} días.`);
} else {
    console.log(dias);
}
