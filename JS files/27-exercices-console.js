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

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear