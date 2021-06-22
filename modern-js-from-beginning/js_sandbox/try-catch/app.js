const user = {email: 'jdoe@gmail.com'};

try {
    // produce a ReferenceError
    // myFunction();

    // produce a TypeError
    // null.myFunction();

    // will produce SyntaxError
    // eval('Hello World');

    // will produce a URIError
    // decodeURIComponent('%');

    if(!user.name) {
        // throw 'user has no name';
        throw new SyntaxError('user has no name'); // creates custom err
    }

} catch(e) {
    
    console.log(`User Error: ${e.message}`);

    console.log(e);
    
    // console.log(e.message); //outputs error message
    // console.log(e.name); // shows nameType of error
    // console.log(`${e.name}`);
    // console.log(e instanceof ReferenceError); //boolean answer
    // console.log(e instanceof TypeError); //boolean answer
} finally { 
    console.log('finally runs regardless of result');
}

console.log("program continues...")