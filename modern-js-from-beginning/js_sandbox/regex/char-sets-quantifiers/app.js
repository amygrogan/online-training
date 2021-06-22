let re;
// literal characters
re = /hello/;
re = /hello/i;     // case insensative

// brackets [] - character sets
re = /gr[ae]y/i;    // must be an A or E
re = /[GF]ray/;    // case sensative, must be G or F
re = /[^GF]ray/;    // match anything but G or F
re = /[A-Z]ray/;    // match any uppercase letter
re = /[a-z]ray/;    // match any lowercase letter
re = /[A-Za-z]ray/;    // match any letter
re = /[0-9]ray/;    //match any digit
re = /[0-9][0-9]ray/;    //match any digit


// braces {} - quantifiers
re = /hel{2}o/i;    // must occur exactly {m} amount of times
re = /hel{2,4}o/i;    // must occur exactly {m} range of times
re = /hel{2,}o/i;    // must occur at least {m} times

// parentheses () - grouping
re = /^([0-9]x){3}$/;   //string to match - const str = '3x3x3x';


// string to match
const str = 'Hello';
// const str = 'Gray?';
// const str = '3x3x3x';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);