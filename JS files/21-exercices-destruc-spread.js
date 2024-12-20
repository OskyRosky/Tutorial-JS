// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4];
let [first, second] = myArray;

console.log(first);  // 1
console.log(second); // 2


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let myArray = [1];
let [first, second = 2] = myArray;

console.log(first);   // 1
console.log(second);  // 2


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = { name: "Alice", age: 30 };
let { name, age } = person;

console.log(name);  // "Alice"
console.log(age);   // 30


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let person = { name: "Alice", age: 30 };
let { name: fullName, age: yearsOld } = person;

console.log(fullName);  // "Alice"
console.log(yearsOld);  // 30

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person = {
    name: "Alice",
    job: { title: "Developer", years: 5 }
};

let { name, job: { title, years } } = person;

console.log(name);  // "Alice"
console.log(title); // "Developer"
console.log(years); // 5

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2];

console.log(combinedArray);  // [1, 2, 3, 4, 5, 6]


// 7. Usa propagación para crear una copia de un array
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

console.log(copiedArray);  // [1, 2, 3]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person = { name: "Alice", age: 30 };
let contact = { email: "alice@example.com", phone: "123-456-7890" };

let combinedObject = { ...person, ...contact };

console.log(combinedObject);
// { name: "Alice", age: 30, email: "alice@example.com", phone: "123-456-7890" }


// 9. Usa propagación para crear una copia de un objeto

let person = { name: "Alice", age: 30 };

let copiedPerson = { ...person };

console.log(copiedPerson);  // { name: "Alice", age: 30 }


// 10. Combina desestructuración y propagación

let person = { name: "Alice", age: 30, city: "New York" };
let job = { title: "Developer", years: 5 };

let { name, age, ...rest } = person;
let combinedObject = { ...job, name, age, ...rest };

console.log(combinedObject);
// { title: "Developer", years: 5, name: "Alice", age: 30, city: "New York" }
