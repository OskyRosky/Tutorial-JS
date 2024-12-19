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

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7