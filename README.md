# Closures

* Work in pairs
* Fork and clone this repo
* Don't forget to run `npm install` after cloning to install dependencies
* Take turns in implementing one exercise each
* Write tests for each exercise in `tests` folder
* Commit after each exercise and push
* Create a pull request

## Exercises

* `increase` - Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

* `double` - Create a function which stores a number. Return an inner function which doubles the number and returns it

* `total` - Create a function which receives and stores `total` number. Return an inner function which accepts an array of numbers. The inner function should add all the numbers in array, add them to `total` and return the new `total`.

* `gibberish` - Create a function which stores an empty string. Return an inner function which can accept either a string or an array of strings. If it's a string, add it to existing string separated by a space `' '`. If it's an array of strings join them using a space, append to existing string separated by a fullstop `.` and a space `' '` at the end. The inner function should return the new resulting string.

* `mergeSort` - Create a function which stores an empty array. Return an inner function which accepts a number as an argument. The inner function should insert the number into the array in descending order and return the highest number from array.

* `calculator` - Create a function which stores a `total` number. It should return an inner function which should accept 3 parameters: 2 numbers and a string representing an operator `+`, `-`, `*` or `/`. It should perform the operation indicated by the operator add the result to `total`. Return the new `total`.

* `dogHome` - Create a function which stores an object. This object will have keys representing locations and an array as values. Return an object with 2 methods
  * `houseDog` - It will receive a dog object as an argument. The dogs object should have a `name`, `breed`, `colour` and `location`. Store the dog in the object of parent scope by location
  * `getDogsByLocation` - It will  accept a `location` as an argument and return all dogs for that location

## Stretch goals

* `trainstation` - Create a function which stores an array of people. Each person should have a `name` and an `amount` of money, a random integer between 0 and 20. Return an object which has 4 methods
  * `arrive` should accept a person, who has a random amount of money \[0-20\] and add it to array of people
  * `getPeople` should return the array of people
  * `giveMoney` should allocate an random amount of money to a random person. You may want to generate the random amount and index of random person first to make function testable
  * `trainArrives` everyone who now has £20 or more can buy a ticket and get on a train. You should remove people with 20 or more from array and return then in a new array.

* `shop` - Create a function which stores a `storage` object and a number `revenue`. Return an object with 3 methods
  * `addStock` - It will receive an array of items. Each item will have a `name`, `quantity` and `price`. If `storage` already has an item that is being added, update the quantity to reflect the new stock levels. If the price of new stock is different, calculate a new average price for old and new stock and set new price to be the average.
  * `sellStock` - Will receive an `order` array. Each item in `order` will have a `name` and a `quantity`. You cannot sell more items than you have in stock. Reduce the quantity of items in stock by amount sold. Add the revenue from each order to the total total revenue. Return an array which contains items sold. Each item should have a `name`, `quantity` and `price`.
  * `getRevenue` - should return revenue generated from sales so far.
