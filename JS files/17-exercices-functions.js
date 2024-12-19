/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // Devuelve 15


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function findMax(numbers) {
    return Math.max(...numbers);
}

console.log(findMax([3, 7, 2, 9, 5])); // Devuelve 9


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene


function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript")); // Devuelve 3


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function toUpperCaseArray(strings) {
    return strings.map((str) => str.toUpperCase());
}

console.log(toUpperCaseArray(["hola", "mundo", "javascript"])); 
// Devuelve ["HOLA", "MUNDO", "JAVASCRIPT"]


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}

console.log(isPrime(7));  // Devuelve true
console.log(isPrime(10)); // Devuelve false


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function findCommonElements(array1, array2) {
    return array1.filter((element) => array2.includes(element));
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); 
// Devuelve [3, 4]


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumEvenNumbers(numbers) {
    return numbers
        .filter((num) => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 
// Devuelve 12 (2 + 4 + 6)


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squareNumbers(numbers) {
    return numbers.map((num) => num ** 2);
}

console.log(squareNumbers([1, 2, 3, 4, 5])); 
// Devuelve [1, 4, 9, 16, 25]


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hola cómo estás")); 
// Devuelve "estás cómo Hola"


// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  // Devuelve 120
