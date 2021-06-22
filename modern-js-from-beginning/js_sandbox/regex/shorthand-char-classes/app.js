let re;
// literal characters
re = /hello/;
re = /hello/i;     // case insensative

// shorthand character classes
re = /\w/;  // word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/;  // non-word character
re = /\d/;  // match any digit
re = /\d+/;  // match any digit 0 or more times
re = /\D/;  // match any non-digit
re = /\s/;  // match whitespace char
re = /\S/;  // match non-whitespace char
re = /Hell/i;  // match word 
re = /Hell\b/i;  // match word boundary

// assertions
re = /x(?=y)/;  // match x only if followed by y
re = /x(?!y)/;  // match x only if NOT followed by y

// string to match
const str = 'adfasdfxyasdfasdfsfd';

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