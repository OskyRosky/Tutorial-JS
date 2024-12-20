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

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    sound() {
        console.log("Woof!");
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.sound();  // "Woof!"
myDog.run();    // "Buddy is running"


// 7. Crea una clase que haga uso de getters y setters

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }
}

let person = new Person("Alice", 30);
console.log(person.name);  // "Alice"
console.log(person.age);   // 30

person.name = "Bob";
person.age = 35;

console.log(person.name);  // "Bob"
console.log(person.age);   // 35

person.age = -5;  // "Age must be positive."


// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }
}

let person = new Person("Alice", 30);
console.log(person.name);  // "Alice"
console.log(person.age);   // 30

person.name = "Bob";
person.age = 35;

console.log(person.name);  // "Bob"
console.log(person.age);   // 35

person.age = -5;  // "Age must be positive."


// 9. Utiliza los get y set y muestra sus valores

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }
}

let person = new Person("Alice", 30);

console.log(person.name);  // "Alice"
console.log(person.age);   // 30

person.name = "Bob";
person.age = 35;

console.log(person.name);  // "Bob"
console.log(person.age);   // 35

// 10. Sobrescribe un método de una clase que utilice herencia 

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // Sobrescribimos el método sound
    sound() {
        console.log("Woof! Woof!");
    }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.sound();  // "Woof! Woof!"
