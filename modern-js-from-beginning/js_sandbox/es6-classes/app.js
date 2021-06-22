class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        // console.log('diff',diff);
        const ageDate = new Date(diff);
        // console.log('ageDate', ageDate);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x,y) {
        return x + y;
    }
}

const mary = new Person('mary', 'williams', '11-13-1980');

mary.getsMarried('thompson');

console.log(mary); // mary thompson
console.log(mary.greeting()); // returns - hello there mary williams
console.log(mary.calculateAge()); // 40
console.log(Person.addNumbers(1,2));