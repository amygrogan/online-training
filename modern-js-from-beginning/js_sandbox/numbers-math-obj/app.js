const num1 = 100;
const num2 = 50;
let val;


// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math obj
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.random() * 20; //random decimal between 0-19
val = Math.random() * 20 + 1; //full 20
val = Math.floor(Math.random() * 20 + 1); //rounds value to whole number

console.log(val);