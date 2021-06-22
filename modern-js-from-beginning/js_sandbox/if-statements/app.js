// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO / TESTING VALUE
// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO 
// if(id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // test if undefined
// if(typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log(`NO ID`);
// }

// greater or less than
// if(id >= 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// IF ELSE
const color = 'yellow';

// if(color === 'red') {
//     console.log('color is red');
// } else if(color === 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is NOT red or blue');
// }

// LOGICAL OPERATORS
const name = 'steve';
const age = 25;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else 
    console.log('INCORRECT');