/* 
 ****
 OBSERVER PATTERN
 - Allows to subscribe and unsubscribe to certain events/functionality.
 - Notify the DOM of certain elements that need to be updated. Angular JS rely on this pattern through event management through scope.  
 **** 
*/

class EventObserver {
    constructor () {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscibed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are not unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});


document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});




document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});


// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}