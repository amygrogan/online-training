/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (newItemName) {
    this.name = newItemName;
  },
  newVolume: function (xNum) {
    this.volume = xNum;
  },
  newColor: function (xColor) {
    this.color = xColor;
  },
  newPocketNum: function (xPnum) {
    this.pocketNum = xPnum;
  }
};

console.log(backpack.newName('helloWorld'));
console.log(backpack.newVolume(50));
console.log(backpack.newColor('blue'));
console.log(backpack.newPocketNum(100));
console.log(backpack.newStrapLength(100,100));