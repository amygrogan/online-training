// Object.prototype
// Person.prototype

// person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    // const diff = Date.now() - this.birthday.getTime();
    // const ageDate = new Date(diff);
    // return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get fullname
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary); 
console.log(john.calculateAge()); //30
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));

// returns FALSE
// not a property - this is in the prototype, not part of its own property
console.log(mary.hasOwnProperty('getFullName'));