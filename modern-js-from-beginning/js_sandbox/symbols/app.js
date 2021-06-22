// create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(typeof sym2);   // primitive data value

// console.log(Symbol() === Symbol()); // false
// console.log(Symbol('123') === Symbol('123')); // false
// console.log(`Hello ${String(sym1)}`);   // Hello Symbol()
// console.log(`Hello ${sym1.toString()}`);   // Hello Symbol()

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';  // this is a symbol
myObj[KEY2] = 'Prop2';  // this is a symbol
myObj.key3 = 'Prop3';   // this is a property
myObj.key4 = 'Prop4';   // this is a property

// console.log(myObj[KEY1]);   // Prop1
// console.log(myObj[KEY2]);   // Prop2

// symbols are not enumerable in for...in
// for(let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// ABOVE returns the following result
// key3: Prop3
// key4: Prop4

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));     // returns - {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));    // returns empty obj