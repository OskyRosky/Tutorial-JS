// 1. Crea una clase que reciba dos propiedades

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("Alice", 30);
console.log(person);  // { name: "Alice", age: 30 }

// 2. Añade un método a la clase que utilice las propiedades

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Alice", 30);
person.greet();  // "Hello, my name is Alice and I am 30 years old."

// 3. Muestra los valores de las propiedades e invoca a la función

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Alice", 30);
console.log(person.name);  // "Alice"
console.log(person.age);   // 30
person.greet();            // "Hello, my name is Alice and I am 30 years old."


// 4. Añade un método estático a la primera clase

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    static species() {
        console.log("Humans");
    }
}

let person = new Person("Alice", 30);
person.greet();  // "Hello, my name is Alice and I am 30 years old."
Person.species();  // "Humans"


// 5. Haz uso del método estático

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    static species() {
        console.log("Humans");
    }
}

let person = new Person("Alice", 30);
person.greet();  // "Hello, my name is Alice and I am 30 years old."
Person.species();  // "Humans"

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 