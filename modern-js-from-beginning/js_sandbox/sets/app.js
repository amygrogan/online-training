// SETS - store unique values of any type

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('a string');
set1.add({ name: 'john' });
set1.add(true);
set1.add(100);  // will not appear becuase it is not unique - a repeat

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// get count
// console.log(set1.size);

// check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'john' })); //returns false (not primitive type)

// console.log({ name: 'john' } === { name: 'john' }); //false
// pointing to diff location in memory
// console.log('hello' === 'hello');   //true b/c its a primitive

// delete from set
// set1.delete(100);
// console.log(set1);



// iterate through sets

// for...of 
// for(let item of set1) {
//     console.log(item);
// }

// for(let item of set1.values()) {
//     console.log(item);
// }

// for(let item of set1.keys()) {
//     console.log(item);
// }

// for(let item of set1.entries()) {
//     console.log(item);
// }



// forEach Loop
// set1.forEach((value) => {
//     console.log(value);
// });

// convert set to array
// const setArr = Array.from(set1);
// console.log(setArr);
