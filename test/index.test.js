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