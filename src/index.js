// * `trainstation` - Create a function which stores an array of people. Each person should have a `name` and an `amount` of money, a random integer between 0 and 20. Return an object which has 4 methods
//   * `arrive` should accept a person, who has a random amount of money \[0-20\] and add it to array of people
//   * `getPeople` should return the array of people
//   * `giveMoney` should allocate an random amount of money to a random person. You may want to generate the random amount and index of random person first to make function testable
//   * `trainArrives` everyone who now has £20 or more can buy a ticket and get on a train. You should remove people with 20 or more from array and return then in a new array.

function trainstation(){
  let people = [];

  return {
    arrive(person){
      people.push(person);
    },

    getPeople(){
      return people;
    },

    giveMoney(index, amount){
      people[index].amount += amount;
    },

    trainArrives(){
      const removedPeople = [];
      const remainingPeople = [];

      people.forEach(person => {
        if(person.amount > 20){
          removedPeople.push( person );
        } else {
          remainingPeople.push( person );
        }
      });

      people = remainingPeople;
      return removedPeople;
    }
  }
}

// * `shop` - Create a function which stores a `storage` object and a number `revenue`. Return an object with 3 methods
//   * `addStock` - It will receive an array of items. Each item will have a `name`, `quantity` and `price`. If `storage` already has an item that is being added, update the quantity to reflect the new stock levels. If the price of new stock is different, calculate a new average price for old and new stock and set new price to be the average.
//   * `sellStock` - Will receive an `order` array. Each item in `order` will have a `name` and a `quantity`. You cannot sell more items than you have in stock. Reduce the quantity of items in stock by amount sold. Add the revenue from each order to the total total revenue. Return an array which contains items sold. Each item should have a `name`, `quantity` and `price`.
//   * `getRevenue` - should return revenue generated from sales so far.

function shop(){
  const storage = {};
  let revenue = 0;

  return {
    addStock(stock){
      stock.forEach( item => {
        if(storage[item.name]){
          const itemInStock = storage[item.name]
          const totalQuantity = item.quantity + itemInStock.quantity;

          const newPrice = (item.quantity * item.price + itemInStock.quantity * itemInStock.price)/totalQuantity;

          itemInStock.price = newPrice;
          itemInStock.quantity = totalQuantity;

          storage[item.name] = {
            name: item.name,
            price: newPrice,
            quantity: totalQuantity
          };
        } else {
          storage[item.name] = item;
        }
      });
    },

    sellStock(){

    },

    getStock(){
      return Object.values(storage);
    },

    getRevenue(){
      return revenue;
    }
  }
}

exports.shop = shop;
exports.trainstation = trainstation;
