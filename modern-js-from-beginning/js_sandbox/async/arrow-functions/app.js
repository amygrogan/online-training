// Standar Function Format
// const sayHello = function() {
//     console.log('Hello');
// }

// Same as above but converted to a "fat arrow function"
// const sayHello = () => {
//     console.log('Hello');
// }

// sayHello();

// same as above but compacted to one line
// one line function does not need braces
// const sayHello = () => console.log('Hello');

// one line returns
// const sayHello = () => 'Hello';

// format above is simpler than the long way shown below
// const sayHello = function() {
//     return 'Hello';
// }

// using the arrow function will fall into issue 
// its looking at it as a function body instead of an object literal
//const sayHellow = () => { msg: 'Hello' }  // output is undefined

//wrap in parenthasis and it will work
//const sayHello = () => ({ msg: 'Hello' }); // will return obj

//console.log(sayHello());



// Single param does not need ()
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Amy');

// Mult params need ()
// const sayHello = (fname, lname) => console.log(`Hello ${fname} ${lname}`);
// sayHello('Amy', 'Grogan');

const users = ['nathan', 'john', 'william'];
// name array
// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// shorter name arry
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// shortest name array
const nameLengths = users.map(name => name.length);

console.log(nameLengths);