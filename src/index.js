// Create a function which stores a number. Return an inner 
// function which accepts a number as an argument, adds it to 
// the number in parent scope and returns the new total

function increase() {
  let number = 3;
  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }
  return inner;
}
exports.increase = increase;


// Create a function which stores a number. 
// Return an inner function which doubles the number and returns it

function double() {
  let multiplier = 2;
  function inner(number) {
    return number * multiplier;
  }
  return inner;
}

exports.double = double;

// Create a function which receives and stores total number. 
// Return an inner function which accepts an array of numbers. 
// The inner function should add all the numbers in array, 
// add them to total and return the new

function total(number) {
  let total = number;
  function inner(arr) {
    total = arr.reduce((acc, item) => {
      return acc + item;
    }, total);
    return total;
  }
  return inner;
}
exports.total = total;


// Create a function which stores an empty string. 
// Return an inner function which can accept either a string or an array of strings. 
// If it's a string, add it to existing string separated by a space ' '. 
// If it's an array of strings join them using a space, append to existing string 
// separated by a space and add a fullstop . at the end. 
// The inner function should return the new resulting string.

function gibberish() {
  let str = "";
  function inner(item) {
    if (typeof (item) === "string") {
      return str = str + ' ' + item;
    } else if (Array.isArray(item)) {
      return str += item.join(" ") + ".";
    } else {
      return "Wrong type of parameter";
    }
  }

  return inner;
}

exports.gibberish = gibberish;
