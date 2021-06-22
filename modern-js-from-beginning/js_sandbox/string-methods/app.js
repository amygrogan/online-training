const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Amy';
const tags ='web design, web development, programming';
let val;

val = firstName + lastName;

// concatination
val = firstName + ' ' + lastName;

//append
val = 'Amy ';
val += 'Grogan';

val = 'Hello, my name is ' + firstName + ' am I am ' + age;

// escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

//length
val = firstName.length;

// concat method
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt(2);

//get last char 
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Amy', 'Jane');

//includes()
val = str.includes('Hello');
val = str.includes('foo');


console.log(val);