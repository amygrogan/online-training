/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const headphones = {
    color: 'black',
    brand: 'beats',
    wireless: true,
    bluetooth: true,
    type: 'over-ear'
}

const mug = {
    name: 'apple',
    color: 'black',
    material: 'plasic',
    itemPencil: {
        quantity: 7
    },
    itemPen: {
        quantity: 4
    }
}

const pocketBook = {
    name: 'every day bag',
    brand: 'ck',
    pocketNum: 1,
    color: 'brown',
    strapLength: 4
}
console.log("The PocketBook:", pocketBook);
console.log("The PocketBook:", pocketBook.color);
console.log("The PocketBook:", pocketBook["color"]);