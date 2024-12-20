// 1. Crea un función que utilice error correctamente

function checkAge(age) {
    if (age < 18) {
        throw new Error("La edad debe ser 18 o mayor.");
    } else {
        console.log("Edad válida.");
    }
}

try {
    checkAge(16);  // Lanza error
} catch (error) {
    console.error(error.message);  // "La edad debe ser 18 o mayor."
}


// 2. Crea una función que utilice warn correctamente

function checkPassword(password) {
    if (password.length < 8) {
        console.warn("La contraseña es demasiado corta. Se recomienda una longitud de al menos 8 caracteres.");
    } else {
        console.log("Contraseña válida.");
    }
}

checkPassword("short");  // Muestra advertencia
checkPassword("longenough123");  // Muestra mensaje válido

// 3. Crea una función que utilice info correctamente

function displayUserInfo(user) {
    console.info("Información del usuario:");
    console.info(`Nombre: ${user.name}`);
    console.info(`Edad: ${user.age}`);
    console.info(`Correo: ${user.email}`);
}

let user = { name: "Alice", age: 30, email: "alice@example.com" };
displayUserInfo(user);


// 4. Utiliza table

function displayUserTable(users) {
    console.table(users);
}

let users = [
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 25, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

displayUserTable(users);


// 5. Utiliza group

function displayUserDetails(user) {
    console.group("Detalles del usuario:");
    console.log(`Nombre: ${user.name}`);
    console.log(`Edad: ${user.age}`);
    console.log(`Correo: ${user.email}`);
    console.groupEnd();
}

let user = { name: "Alice", age: 30, email: "alice@example.com" };
displayUserDetails(user);

// 6. Utiliza time

function measureExecutionTime() {
    console.time("Tiempo de ejecución");

    // Simulamos un proceso que tarda 2 segundos
    for (let i = 0; i < 1000000; i++) {}

    console.timeEnd("Tiempo de ejecución");
}

measureExecutionTime();


// 7. Valida con assert si un número es positivo

function checkPositiveNumber(number) {
    console.assert(number > 0, "El número debe ser positivo.");
}

checkPositiveNumber(5);  // No muestra nada, ya que el número es positivo
checkPositiveNumber(-3); // Muestra: "El número debe ser positivo."


// 8. Utiliza count

function clickCounter() {
    console.count("Click");
    console.count("Click");
    console.count("Click");
}

clickCounter();  // Muestra: "Click: 1", "Click: 2", "Click: 3"
console.countReset("Click");  // Resetea el contador
console.count("Click");  // Muestra: "Click: 1"


// 9. Utiliza trace

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    console.trace("Seguimiento de la ejecución");
}

firstFunction();  // Muestra el seguimiento de la ejecución en la consola


// 10. Utiliza clear

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    console.trace("Seguimiento de la ejecución");
}

firstFunction();  // Muestra el seguimiento de la ejecución en la consola