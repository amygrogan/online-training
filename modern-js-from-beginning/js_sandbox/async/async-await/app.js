// placing async in front of a function makes it return a promise
// async function myFunc() {
//     // return 'hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });

//     const error = false;
//     if(!error) {
//         const res = await promise; // wait until promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// // console.log(myFunc());

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));




// Async & Await with FETCH
async function getUsers() {
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once it is resolved
    const data = await response.json();

    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));