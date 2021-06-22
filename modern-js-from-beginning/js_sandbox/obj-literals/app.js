const person = {
    firstName: 'steve',
    lastName: 'smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music','sports'],
    address: {
        city: 'miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 1987;
    },
    getBirthYear2: function() {
        return 2017 - this.age;
    }

};

let val;
val = person;

//get specific value
val = person.firstName;
val = person['firstName'];
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();
val = person.getBirthYear2();


console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}