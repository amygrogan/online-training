const personPrototypes = {
    greeting: function() {
        return `hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'mary';
mary.lastName = 'williams';
mary.age = 30;

console.log(mary);

// console.log(mary.greeting()); // returns - hello there may williams

mary.getsMarried('thompson'); 

console.log(mary.greeting()); // returns - hello there mary thompson

const amy = Object.create(personPrototypes, {
    firstName: {value: 'amy'},
    lastName: {value: 'grogan'},
    age: {value: 41}
});

console.log(amy); //returns objet information

console.log(amy.greeting()); //returns - hello there amy grogan