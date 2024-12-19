/*
Clases 1 a 14 (sin código)
Vídeo: https://youtu.be/1glVfFxj8a4

Clase 15 - Hola mundo
Vídeo: https://youtu.be/1glVfFxj8a4?t=2390
*/

// Esto es un comentario simple

/*
Esto es
un comentario
en varias líneas
*/

console.log("¡Hola, JavaScript!")
console.log('¡Hola, JavaScript!')
console.log(`¡Hola, JavaScript!`)

// console.log("¡Hola, JavaScript!")

/*
console.log("¡Hola, JavaScript!")
console.log('¡Hola, JavaScript!')
console.log(`¡Hola, JavaScript!`)
*/

console.log("5")
console.log(5)
console.log(5 + 2)
console.log(5 - 2)
console.log(5 * 2)
console.log(5 / 2)
console.log(5 % 2)
console.log(5 ** 2)

console.error("¡Esto es un error!")
console.warn("¡Esto es una advertencia!")
console.info("Información útil")
console.table([{ nombre: "Óscar", edad: 25 }, { nombre: "María", edad: 30 }])



import chalk from 'chalk';

console.log(chalk.green('¡Chalk está funcionando correctamente!'));
console.log(chalk.yellow('Esto es una advertencia.'));
console.log(chalk.red('¡Esto es un error!'));
