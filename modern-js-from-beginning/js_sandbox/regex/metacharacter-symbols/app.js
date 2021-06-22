let re;
// literal characters
re = /hello/;
re = /hello/i;     // case insensative

// metacharacter symbols
re = /^h/i;            // must start with
re = /d$/i;           // must ends with
re = /^hello$/i;     // must begin and end with
re = /h.llo/i;    // matches any ONE character
re = /h*llo/i;     // matches any char 0 or more times
re = /gre?a?y/i;    // optional character
re = /gre?a?y\?/i;    // escape character

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