function doubleMaker (initialValue) {
	let number = initialValue;

	function double() {
		number *= 2;

		return number;
	}

	return double;
}

module.exports.doubleMaker = doubleMaker;

function increaseMaker (initialValue) {
	let number = initialValue;

	function increase(n){
		number = number + n;
		return number;
	}

	return increase;
}

module.exports.increaseMaker = increaseMaker;

function mergeSortMaker (initialArray) {
	let numbersArray = [...initialArray];

	function mergeSort(mergeIn) {
		numbersArray.push(mergeIn);
		numbersArray.sort(
			(a, b) => { return a - b; }
		);

		return numbersArray.slice(-1)[0];
	}

	return mergeSort;
}

module.exports.mergeSortMaker = mergeSortMaker;


function totalMaker(initialTotal){
	let storedValue = initialTotal;

	function total (arrayOfNumbers){
		const sum = arrayOfNumbers.reduce((a, b) => a+b);
		storedValue = storedValue + sum;
		return storedValue;
	}
	return total;

}

module.exports.totalMaker = totalMaker;

function gibberishMaker () {
	let storedString = '';

	function gibberish (input) {
		if (storedString.length > 0) {
			storedString += ' ';
		}

		let addedString;

		if (typeof input == 'string') {
			addedString = input;
		} else if (typeof input == 'object') {
			addedString = input.join(' ') + '.';
		}

		storedString += addedString;

		return storedString;
	}

	return gibberish;
}

module.exports.gibberishMaker = gibberishMaker;

function calculatorMaker () {
	let total = 0;

	function calculator(nr1, operator, nr2){
		switch (operator) {
			case "+":
				total += (nr1 + nr2);
				break;
			case "-":
				total += (nr1 - nr2);
				break;
			case "*":
				total += (nr1 * nr2);
				break;
			case "/":
				total += (nr1 / nr2);
				break;
			default:
				console.log("unknown operator");
		}

		return total;
	}

	return calculator;
}

module.exports.calculatorMaker = calculatorMaker;

function stationMaker(){
	let crowd = [
		{ name : 'Adam', amount : 10 },
		{ name : 'Bella', amount : 15 },
		{ name : 'Charles', amount: 20 },
		{ name : 'Denise', amount: 22 }
	];

	let randomIndex = Math.floor(Math.random() * crowd.length);
	let randomMoney = Math.floor(Math.random() * 10);

	const methods = {
		arrive(personObject) {
			crowd.push(personObject);
			return crowd;
		},
		getPeople() {
			return crowd;
		},
		randoms() {
			return [randomIndex, randomMoney];
		},
		giveMoney() {
			crowd[randomIndex].amount = crowd[randomIndex].amount + randomMoney;
			return crowd[randomIndex];

			randomIndex = Math.floor(Math.random() * crowd.length);
			randomMoney = Math.floor(Math.random() * 10);
		},
		trainArrives() {
			crowd = crowd.filter(person => person.money < 20);
			return crowd;
		}
	};

	return methods;
}

module.exports.stationMaker = stationMaker;

function dogHomeMaker (){
	let house = {
		room1: [
			{
				name : "Fido",
				breed: "Pomeranian",
				colour: "black",
				location: "room1"
			}
		],
		room2: [
			{
				name: "Rex",
				breed: "sausage dog",
				colour: "brown",
				location: "room2"
			}
		]
	};

	const methods = {
		houseDog: function(dogObject){
			let dogLocation = dogObject.location;
			if (!house.hasOwnProperty(dogLocation)){
				house[dogLocation] = [];
			}

			house[dogLocation].push(dogObject);
		},
		getDogsByLocation: function(location){
			if (house.hasOwnProperty(location)){
				return house[location];
			}
			else {
				return "No such location";
			}
		}
	}

	return methods;

}

module.exports.dogHomeMaker = dogHomeMaker;

function shop (initialStock, revenue) {
	let storage = {
		stock : {}
	};

	Object.keys(initialStock).forEach(item => {
		let stockItem = initialStock[item];
		storage.stock[stockItem.name] = stockItem;
	});

	storage.revenue = revenue ? revenue : 0;

	const methods = {
		inventory () {
			return storage;
		},
		addStock (newStockItems) {
			newStockItems.forEach( newItem => {
				storeItem(newItem);
			});
		}
	}

	function storeItem (item) {
		let name = item.name;
		let incomingQuantity = item.quantity;
		let newPrice = item.price;

		if (storage.stock[name]) {
			let itemStock = storage.stock[name];
			let currentPrice = itemStock.price;
			let newQuantity = itemStock.quantity + incomingQuantity;

			let updatedPrice = (currentPrice + newPrice) / 2;

			itemStock.price = updatedPrice;
			itemStock.quantity = newQuantity;

		} else {
			storage.stock[name] = item;
		}
	}

	return methods;
}

module.exports.shop = shop;
