// Iterators - advanced loops that can be paused
// Generators - functions that can be paused and can return (yield) multiple values


// Iterator Example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false } :
//             { done: true }
//         }
//     }
// }


// // create an array of names
// const namesArray = ['jack', 'jill', 'john'];
// // init iterator and pass in the names array
// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());


// Generator Example
// function* sayNames() {      //asterick tell JS that it is a generator
//     yield 'jack';
//     yield 'jill'; 
//     yield 'john';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());


// Generator - ID Creator
function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// it will never end when you call it as shown above