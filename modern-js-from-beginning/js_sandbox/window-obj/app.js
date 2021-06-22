// WINDOW METHODS / OBJECTS / PROPERTIES

//window.console.log(123);

//  alert / prompt / confirm
//window.alert('hello world');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('are you sure')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect
// window.location.href = 'http://google.com';
// windows.location.reload();

// history object
// window.history.go();
// window.history.length;

// navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);