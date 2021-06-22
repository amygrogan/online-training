// Object Literals - dealing with one instance
// const amy = {
//     name: 'amy',
//     age: 41
// }
// console.log(amy);
// console.log(amy.age);

// Person Constructor
function Person(name, dob) {
    this.name = name; // THIS located here, ref current instance of the object
    //console.log(this);
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

//console.log(this); // THIS will reference the window object b/c its in the global scope
// const amy = new Person('Amy', 36);
// const jane = new Person('Jane', 30);

// console.log(amy);
// console.log(jane);
// console.log(amy.age);

const amy = new Person('Amy', '12-24-1979');
console.log(amy.calculateAge());