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
