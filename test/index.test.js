const functions = require('../src/index');

test('Double', function() {
	const result = functions.doubleMaker(2)();
	expect(result).toBe(4);
});

test('Increase', function() {
	const result = functions.increaseMaker(5)(3);
	expect(result).toBe(8);
});

// Largest number in array at start: 10
test('Merge sort', function() {
	const resultSmaller = functions.mergeSortMaker([ 2, 5, 10, 3, 0, 7 ])(8);
	expect(resultSmaller).toBe(10);

	const resultLarger = functions.mergeSortMaker([ 2, 5, 10, 3, 0, 7 ])(15);
	expect(resultLarger).toBe(15);
});

test('Total', function() {
	const result1 = functions.totalMaker(20)([1, 3, 2, 4, 5]);
	expect(result1).toBe(35);
})

test('Gibberish', function() {
	let gibberish = functions.gibberishMaker();

	const expected1 = 'meow bang teapot';
	const result1 = gibberish('meow bang teapot');
	expect(result1).toEqual(expected1);

	const expected2 = 'meow bang teapot woof boom cafetiere.';
	const result2 = gibberish(['woof', 'boom', 'cafetiere']);
	expect(result2).toEqual(expected2);
});

test ("Calculator", function(){
	let calculator = functions.calculatorMaker();

	const resultAdd = calculator(3, "+", 2);
	expect(resultAdd).toBe(5);
	// running total after add is 5;

	const resultSubtract = calculator(4, "-", 2);
	expect(resultSubtract).toBe(7);
	// running total after subtract is 7 (5+2)

	const resultMultiply = calculator(2, "*", 6);
	expect(resultMultiply).toBe(19);
	// running total after multiply is 19 (7+12)

	const resultDivide = calculator(20, "/", 10);
	expect(resultDivide).toBe(21);
	//running total after divide is 21 (19+2)

	const resultWrong = calculator (50, "!", 23);
	expect(resultWrong).toBe(21);
	//as resultWrong does nothing to the total, the total is still 21
})

let expectedPeople = [
	{ name : 'Adam', amount : 10 },
	{ name : 'Bella', amount : 15 },
	{ name : 'Charles', amount: 20 },
	{ name : 'Denise', amount: 22 }
];

test('Railway station has certain people', function() {
	let station = functions.stationMaker();
	let stationPeople = station.getPeople();

	expect(stationPeople).toEqual(expectedPeople);
});

test('Person arrives at railway station', function() {
	let station = functions.stationMaker();

	let newPerson = { name : 'Eric', amount: 7 };
	station.arrive(newPerson);
	expectedPeople.push(newPerson);
	stationPeople = station.getPeople();

	expect(stationPeople).toEqual(expectedPeople);
});

test('Give money to a person', function() {
	let station = functions.stationMaker();
	stationPeople = station.getPeople();

	let [randomIndex, randomAmount] = station.randoms();

	let randomPerson = stationPeople[randomIndex];
	let personComparison = JSON.parse(JSON.stringify(randomPerson));
	personComparison.amount += randomAmount;

	let expectedDonor = station.giveMoney();

	expect(personComparison).toEqual(expectedDonor);
});

test('Passengers leave on a train', function() {
	let station = functions.stationMaker();
	let expectedRemainingPeople = JSON.parse(JSON.stringify(station.getPeople()));

	expectedRemainingPeople = expectedRemainingPeople.filter(
		person => person.money < 20
	);

	station.trainArrives();
	expect(station.getPeople()).toEqual(expectedRemainingPeople);
});

test('Dog kennel placement', function(){
	let starterDogGroup = {
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

	let incomingDogA = {
		name: "Pluto",
		breed: "Alsatian",
		colour: "white",
		location: "room2"
	};

	let incomingDogB = {
		name: "Tramp",
		breed: "mutt",
		colour: "brown and black",
		location: "room3"
	};

	let finishDogGroup = {
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
			},
			{
				name: "Pluto",
				breed: "Alsatian",
				colour: "white",
				location: "room2"
			}
		],
		room3: [
			{
				name: "Tramp",
				breed: "mutt",
				colour: "brown and black",
				location: "room3"
			}
		]
	};

	let kennel = functions.dogHomeMaker();

	kennel.houseDog(incomingDogA);
	kennel.houseDog(incomingDogB);

	let room3dogs = kennel.getDogsByLocation("room3");

	expect(room3dogs).toEqual([incomingDogB]);

	let room4dogs = kennel.getDogsByLocation("room4");

	expect(room4dogs).toEqual("No such location");

	expect(kennel.getDogsByLocation("room2")).toEqual(finishDogGroup.room2);
});

test('Dogs in location', function() {
	let expectedDogs = [
		{
			name: "Rex",
			breed: "sausage dog",
			colour: "brown",
			location: "room2"
		}
	];

	let kennel = functions.dogHomeMaker();
	expect(kennel.getDogsByLocation('room2')).toEqual(expectedDogs);
});

test.only('Create a shop', function() {
	let expectedShopContents = {
		stock : {
			hat : {
				name : 'hat',
				quantity : 5,
				price : 10
			},
			gloves : {
				name : 'gloves',
				quantity : 10,
				price : 5
			}
		},
		revenue : 100
	}

	let shop = functions.shop(
		expectedShopContents.stock, expectedShopContents.revenue
	);

	let newShopInventory = shop.inventory();

	expect(newShopInventory).toEqual(expectedShopContents);
});

test.only('Add new stock type', function() {
	let expectedShopContents = {
		stock : {
			hat : {
				name : 'hat',
				quantity : 5,
				price : 10
			},
			gloves : {
				name : 'gloves',
				quantity : 10,
				price : 5
			}
		},
		revenue : 100
	};

	let shop = functions.shop(
		expectedShopContents.stock, expectedShopContents.revenue
	);

	let newItems = [
		{
			name : 'shoes',
			quantity : 15,
			price : 12,
		}
	];

	shop.addStock(newItems);

	expectedShopContents.stock.shoes = newItems[0];

	let newShopInventory = shop.inventory();

	expect(newShopInventory).toEqual(expectedShopContents);
});

test.only('Add more of existing stock', function() {
	let expectedShopContents = {
		stock : {
			hat : {
				name : 'hat',
				quantity : 5,
				price : 10
			},
			gloves : {
				name : 'gloves',
				quantity : 10,
				price : 5
			}
		},
		revenue : 100
	};

	let shop = functions.shop(
		expectedShopContents.stock, expectedShopContents.revenue
	);

	let additionalStock = [
		{
			name : 'hat',
			quantity : 10,
			price : 20,
		},
	];

	shop.addStock(additionalStock);

	expectedShopContents.stock.hat = {
		name : 'hat',
		quantity : 15,
		price : 15
	};

	expect(shop.inventory()).toEqual(expectedShopContents);
});