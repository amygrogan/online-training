// immediate anon function and can only return 1 instance of an obj at a time.
// cannont have more than one instance with this pattern
// repeated calls to the constructor will just return the same instance
// also maintains private reference so nothing from the outside can access it
// EX USAGE: 1 user obj at a time, prevent 2 users created at once.
// CONS: singleton gives a global point of access rather than embrace encapsulation.


const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Amy'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
// console.log(instanceA);