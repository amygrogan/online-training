// String
 const name1 = 'Jeff';
 const name2 = new String('Jeff'); // NEW calls a constructor, we can also easily add properites to it

//  console.log(name1); // displays primitive value
//  console.log(name2); // displays as an object

//  name2.foo = 'bar';
//  console.log(name2);

console.log(typeof name1); // string
console.log(typeof name2); // object

if(name1 === 'Jeff') { //returns YES
    console.log('YES');
} else {
    console.log('NO');
}

if(name2 === 'Jeff') { // returns NO b/c type is not equal to a STRING
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5; //primitive
const num2 = new Number(5); //obj

console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);
console.log(typeof bool2);

// Functions
const getSum1 = function(x,y){
    return x + y;
}

const getSum2 = new Function('x', 'y','return 1 + 1');
console.log(getSum2(1,1));

// Objects
const john1 = {name: "john"};
const john2 = new Object({name: "john"});
console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re1);
console.log(re2);