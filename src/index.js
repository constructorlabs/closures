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