/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Oscar",
    age: 38,
    email: "oskyman@example.com"
};

console.log(person);

// 2. Accede y muestra su valor

let person = {
    name: "Oscar",
    age: 38,
    email: "oskyman@example.com"
};

console.log(person.name);
console.log(person.age);
console.log(person.email);


// 3. Agrega una nueva propiedad

let person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

person.city = "New York";
console.log(person);


// 4. Elimina una de las 3 primeras propiedades

let person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

delete person.age;
console.log(person);

// 5. Agrega una función e invócala

let person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();

// 6. Itera las propiedades del objeto

let person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 7. Crea un objeto anidado

let person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

console.log(person.address.city);


// 8. Accede y muestra el valor de las propiedades anidadas

let person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// 9. Comprueba si los dos objetos creados son iguales

let person1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

let person2 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

console.log(JSON.stringify(person1) === JSON.stringify(person2));  // Devuelve true


// 10. Comprueba si dos propiedades diferentes son iguales

let person1 = {
    name: "Alice",
    age: 30
};

let person2 = {
    name: "Alice",
    age: 25
};

console.log(person1.name === person2.name);  // Devuelve true
console.log(person1.age === person2.age);    // Devuelve false
