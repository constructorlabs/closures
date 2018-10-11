const { trainstation, shop } = require('../src/index.js');

// * `trainstation` - Create a function which stores an array of people. Each person should have a `name` and an `amount` of money, a random integer between 0 and 20. Return an object which has 4 methods
//   * `arrive` should accept a person, who has a random amount of money \[0-20\] and add it to array of people
//   * `getPeople` should return the array of people
//   * `giveMoney` should allocate an random amount of money to a random person. You may want to generate the random amount and index of random person first to make function testable
//   * `trainArrives` everyone who now has £20 or more can buy a ticket and get on a train. You should remove people with 20 or more from array and return then in a new array.



describe('trainstation', () => {


  test('arrive', function(){
    const {arrive, getPeople, giveMoney, trainArrives} = trainstation();

    arrive({
      name: 'Tom',
      amount: 1
    });

    arrive({
      name: 'Yel',
      amount: 20
    });

    const people = getPeople();

    expect(people).toEqual([{
      name: 'Tom',
      amount: 1
    },{
      name: 'Yel',
      amount: 20
    }]);
  });

  test('giveMoney', function(){
    const {arrive, getPeople, giveMoney, trainArrives} = trainstation();

    arrive({
      name: 'Tom',
      amount: 1
    });

    arrive({
      name: 'Yel',
      amount: 20
    });

    giveMoney(1, 2);

    const people = getPeople();

    expect(people).toEqual([{
      name: 'Tom',
      amount: 1
    },{
      name: 'Yel',
      amount: 22
    }]);
  });

  test('trainArrives', function(){
    const {arrive, getPeople, giveMoney, trainArrives} = trainstation();

    arrive({
      name: 'Tom',
      amount: 16
    });

    arrive({
      name: 'Yel',
      amount: 18
    });

    giveMoney(0, 5);

    const removedPeople = trainArrives();

    const people = getPeople();

    expect(removedPeople).toEqual([{
      name: 'Tom',
      amount: 21
    }])

    expect(people).toEqual([{
      name: 'Yel',
      amount: 18
    }]);
  });
});

// * `shop` - Create a function which stores a `storage` object and a number `revenue`. Return an object with 3 methods
//   * `addStock` - It will receive an array of items. Each item will have a `name`, `quantity` and `price`. If `storage` already has an item that is being added, update the quantity to reflect the new stock levels. If the price of new stock is different, calculate a new average price for old and new stock and set new price to be the average.
//   * `sellStock` - Will receive an `order` array. Each item in `order` will have a `name` and a `quantity`. You cannot sell more items than you have in stock. Reduce the quantity of items in stock by amount sold. Add the revenue from each order to the total total revenue. Return an array which contains items sold. Each item should have a `name`, `quantity` and `price`.
//   * `getRevenue` - should return revenue generated from sales so far.

describe('shop', () => {
  test('addStock', () => {
    const {addStock, getStock} = shop();

    addStock([{
      name:'cheese',
      quantity: 100,
      price: 3
    },{
      name: 'pickles',
      quantity: 50,
      price: 2
    }]);

    const stock = getStock();
    expect(stock).toEqual([{
      name:'cheese',
      quantity: 100,
      price: 3
    },{
      name: 'pickles',
      quantity: 50,
      price: 2
    }]);
  });

  test('addStock - averages', () => {
    const {addStock, getStock} = shop();

    addStock([{
      name:'cheese',
      quantity: 100,
      price: 3
    },{
      name: 'pickles',
      quantity: 50,
      price: 2
    }]);

    addStock([{
      name:'cheese',
      quantity: 100,
      price: 6
    },{
      name: 'pickles',
      quantity: 50,
      price: 1
    }]);

    const stock = getStock();
    expect(stock).toEqual([{
      name:'cheese',
      quantity: 200,
      price: 4.5
    },{
      name: 'pickles',
      quantity: 100,
      price: 1.5
    }]);
  });
});






//
