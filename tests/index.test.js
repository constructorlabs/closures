const { increase, double, total, gibberish, mergeSort } = require('../src/index.js');

test('increase', function () {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);
  const expected = 13;
  expect(result).toBe(expected);
});


test('double', function () {
  const inner = double();
  const result = inner(6);
  const expected = 12;
  expect(result).toBe(expected);
})

test('total', function () {
  const number = 10;
  const array = [1, 2, 3];
  const inner = total(number);
  const result = inner(array);
  const expected = 16;
  expect(result).toBe(expected);
})

test('gibberish', function () {
  const inner = gibberish();
  const expected1 = "Buna amic.";
  const expected2 = "Buna amic. Hola";
  expect(inner(["Buna", "amic"])).toBe(expected1);
  expect(inner("Hola")).toBe(expected2);
})
