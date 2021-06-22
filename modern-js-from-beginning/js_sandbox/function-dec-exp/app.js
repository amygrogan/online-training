// FUNCTION DECLARATIONS

function greet(firstName = 'john', lastName = 'doe'){
    // if(typeof firstName === 'undefined'){firstName = 'john'}
    // if(typeof lastName === 'undefined'){lastName = 'doe'}
    //console.log('hello');
    return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet('steve', 'smith'));

// FUNCTION EXPRESSIONS
const square = function(x = 3) {
    return x*x;
};

// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// function decalred and run at the same time

// (function() {
//     console.log('IFFE Ran...');
// })();

// (function(name) {
//     console.log('Hello ' + name);
// })('Amy');

// PROPERTY METHODS
// function put inside of a method

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();



