// 1. Captura una excepción utilizando try-catch

try {
    let myObject;
    console.log(myObject.email);
} catch (error) {
    console.log("Se ha producido un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    let myObject;
    console.log(myObject.email);
} catch (error) {
    console.log("Se ha producido un error:", error.message);
} finally {
    console.log("Este código se ejecuta siempre");
}


// 3. Lanza una excepción genérica

throw new Error("Se ha producido un error genérico");

// 4. Crea una excepción personalizada

class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

throw new CustomError("Este es un error personalizado", 404);


// 5. Lanza una excepción personalizada

class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

throw new CustomError("Este es un error personalizado", 500);


// 6. Lanza varias excepciones según una lógica definida

function checkValue(value) {
    if (typeof value !== "number") {
        throw new TypeError("El valor debe ser un número");
    }
    if (value < 0) {
        throw new RangeError("El valor no puede ser negativo");
    }
    if (value === 0) {
        throw new Error("El valor no puede ser cero");
    }
    return "Valor válido";
}

try {
    console.log(checkValue("abc"));  // Lanza TypeError
} catch (error) {
    console.log(error.message);
}

try {
    console.log(checkValue(-5));  // Lanza RangeError
} catch (error) {
    console.log(error.message);
}

try {
    console.log(checkValue(0));  // Lanza Error
} catch (error) {
    console.log(error.message);
}

try {
    console.log(checkValue(10));  // "Valor válido"
} catch (error) {
    console.log(error.message);
}


// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10