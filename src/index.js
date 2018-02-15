
function double(num) {
    function doubleNum() {
        return num * 2;
    }
    return doubleNum;
}

function increase(num) {
    function addToNum(addition) {
        num += addition;
        return num;
    }
    return addToNum;
}

function mergeSort() {

    let numArr = [];

    function mergeSorting(num) {
        numArr.push(num);
        numArr.sort(function (a, b) {
            return b - a;
        }
        )
        return numArr[0];
    }
    return mergeSorting;
}

function total() {
    let total = 0;

    function addToTotal(arr) {
        arr.forEach(num => total += num);
        return total
    }
    return addToTotal;
}

function gibberish() {
    let gibb = '';
    function addToStr(str) {
        if (typeof str == 'string') {
            gibb += ' ' + str;
        } else {
            gibb += " " + str.join(" ") + '.';
        }
        return gibb;
    }
    return addToStr;

}

function calculator() {
    let total = 0;
    function calculator(num1, num2, operation) {
        switch (operation) {
            case "+":
                total += num1 + num2
                break;
            case "-":
                total += num1 - num2
                break;
            case "*":
                total += num1 * num2
                break;
            case "/":
                total += num1 / num2
                break;
        }
        return total
    }
    return calculator;
}

function trainstation() {
    let people = [];

    function arrive(person) {
        people.push(person);

    }
    function getPeople() {
        return people;
    }
    function giveMoney(randomPersonId, amountOfMoney) {
        if (people[randomPersonId]) {
            people[randomPersonId].amount += amountOfMoney;
        }

    }
    function trainArrives() {
        people = people.filter(function (person) {
            return person.amount < 20;
        })

        return people;

    }
    return { arrive, getPeople, giveMoney, trainArrives };
}

function dogHouse() {
    const dogs = {}
    function houseDog(dog) {
        if (dogs.hasOwnProperty(dog.location)) {
            dogs[dog.location].push(dog)
        } else {
            dogs[dog.location] = [dog];
        }
    }
    function getDogsByLocation(location) {
        if (dogs[location]) return dogs[location];
    }
    return { houseDog, getDogsByLocation }
}

function shop() {

    const storage = {};
    let revenue = 0;

    //we create a fake object to see what would this function receive
    // let arr= [{name:"jjj",quantity:10, price:100},{name:"jjj",quantity:"10", price:"100"}];
    function addStock(arr) {
        arr.forEach(function (stock) {
            if (storage.hasOwnProperty(stock.name)) {
                let oldQuantity = storage[stock.name].quantity;
                let oldPrice = storage[stock.name].price;

                storage[stock.name].quantity += stock.quantity;

                if (storage[stock.name].price != stock.price) {
                    let totalValue = oldQuantity * oldPrice + stock.price * stock.quantity
                    let totalQuantity = oldQuantity + stock.quantity;
                    let average = totalValue / totalQuantity;
                    storage[stock.name].price = average;
                }
            }else {
                storage[stock.name] = { quantity: stock.quantity, price: stock.price };
            }
        })



    }
    function sellStock(arr) {
        //define an array with stock items to fill
        const arrayOfSoldStock = [];

        arr.forEach(function (stock) {
            // if we have this stock
            if (storage.hasOwnProperty(stock.name)){
                //check how many you can sell
                let howManyYouCanSell = Math.min(stock.quantity, storage[stock.name].quantity);
                //reduce the quantity of items in storage by amount we are going to sell
                storage[stock.name].quantity -= howManyYouCanSell;
                //add the revenue from each order to the total total revenue
                let revenueFromSell = (stock.price - storage[stock.name].price) * howManyYouCanSell;
                revenue += revenueFromSell 
                //if we sell the item fill the empty array with  a new obj
                arrayOfSoldStock.push({name:stock.name,quantity:howManyYouCanSell, price: stock.price})
            }
        })
        //return an array with obj sold
        return arrayOfSoldStock;
    }
    function getRevenue() {
        return revenue;
    }

    return { addStock, sellStock, getRevenue };
}

module.exports = {
    double,
    increase,
    mergeSort,
    total,
    gibberish,
    calculator,
    trainstation,
    dogHouse,
    shop
};



