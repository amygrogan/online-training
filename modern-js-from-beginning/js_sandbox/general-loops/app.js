// FOR LOOP
// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i === 5){
//         console.log('stop the loop');
//         break;
//     }
//     console.log('number ' + i);
// }


// WHILE LOOP
// let i = 0;
// while(i < 10){
//     console.log('number ' + i);
//     i++;
// }

// DO WHILE
// let i =10;
// do {
//     console.log('number ' + i);
//     i++;
// }

// while(i <10);

//LOOP THROUGH ARRAY
const cars = ['ford', 'chevy', 'honda', 'toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car){
//     console.log(car);
// });
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});


//MAP
// const users = [
//     {id:1, name: 'john'},
//     {id:2, name: 'sara'},
//     {id:3, name: 'karen'},
//     {id:4, name: 'steve'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

const user = {
    firstName: 'john',
    lastName: 'doe',
    age: 40
}

// FOR IN LOOP
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}