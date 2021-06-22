// Destructuring
// easy way to assign vars and extract vars from arrays and obj
// used in a lot of modularized scripts and frameworks

let a, b;
[a, b] = [100, 200];

console.log(a);     // 100
console.log(b);     // 200

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);  // 0:300 1:400 2:500
console.log(c);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest);


// Array Destructuring
// const people = ['john', 'beth', 'mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// EX 2 - parse array returned from function
// function getPeople() {
//     return ['john', 'beth', 'mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);



// Object Destructuring
const person = {
    name: 'john doe',
    age: 32,
    city: 'miami',
    gender: 'male',
    sayHello: function(){
        console.log('hello');
    }
}

// old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// new ES6
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();