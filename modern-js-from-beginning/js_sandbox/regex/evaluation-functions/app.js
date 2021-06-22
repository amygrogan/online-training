let re;
re = /hello/;
re = /hello/i; // i = flag case insensative
// re = /hello/g; // g = flag global search

// console.log(re); // /hello/
// console.log(re.source); // hello

// exec() - return result in an array or null
// const result = re.exec('hello world');

// console.log(result); // array
// console.log(result[0]); // hello - first value in the array
// console.log(result.index); // 0 - index value
// console.log(result.input); // hello world - search string

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - returns index of first match if not found returns a -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - return a new string with some or all mataches of a pattern
const str = 'hello there';
const newString = str.replace(re, 'hi');
console.log(newString);