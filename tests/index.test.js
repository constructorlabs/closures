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
