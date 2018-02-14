const { double,
    increase,
    mergeSort,
    total,
    gibberish,
    calculator,
    trainstation
} = require('./src/index.js');

// describe('name of func',()=>{
//     it('what it does',()=>{
//         const expected = "what you expect here"
//         const result = 'get your result here'
//         expect(result).toBe(exptected)
//     })
// })

describe('double function', () => {
    it('double the number', () => {
        const expected = 8;
        const aFunctionThatDoubles4 = double(4);
        const result = aFunctionThatDoubles4();
        expect(result).toBe(expected)
    })
})

describe('increase function', () => {
    it('double the number', () => {
        const expected = 7
        const addToBase4 = increase(4);
        const result = addToBase4(3);
        expect(result).toBe(expected);
    })
})

describe('mergeSort', () => {
    it('highest num from an array', () => {
        const expected = 11;
        const mergeSorting = mergeSort();
        const result = mergeSorting(11);
        expect(result).toBe(expected);
        const result2 = mergeSorting(2);
        expect(result2).toBe(11);
        const result3 = mergeSorting(14)
        expect(result3).toBe(14);
    })
})

describe('total function', () => {
    it('should a new function that gets number array and add to the total', () => {
        const expected = 6;
        const addToTotal = total();
        const result = addToTotal([1, 4, 1]);
        expect(result).toBe(expected);
        const expected2 = 27
        const result2 = addToTotal([7, 5, 9]);
        expect(result2).toBe(expected2);
    })
})

describe('gibberish function', () => {
    it('adds the string received to a parent string with space', () => {
        const expected = ' str1';
        const addToStr = gibberish();
        const result = addToStr('str1');
        expect(result).toBe(expected);
    })
})
describe('calculator', () => {
    it('should complete the + operation and return the total', () => {
        const expected = 5;
        const calculate = calculator();
        const result = calculate(2, 3, "+");
        expect(result).toBe(expected);
    })
    it('should complete the - operation and return the total', () => {
        const expected = 8;
        const calculate = calculator();
        const result = calculate(11, 3, "-");
        expect(result).toBe(expected);
    })
    it('should complete the * operation and return the total', () => {
        const expected = 6;
        const calculate = calculator();
        const result = calculate(2, 3, "*");
        expect(result).toBe(expected);
    })
    it('should complete the / operation and return the total', () => {
        const expected = 4;
        const calculate = calculator();
        const result = calculate(20, 5, "/");
        expect(result).toBe(expected);
    })
})

describe('trainstation', () => {
    it('return an object with four methods', () => {
        const result = trainstation();
        expect(result).toEqual({ "arrive": expect.any(Function), "getPeople": expect.any(Function), "giveMoney": expect.any(Function), "trainArrives": expect.any(Function) });
    })

    describe('arrive ,get people, giveMoney, trainArrives', () => {
        // defined in upper scope to create persisting connection to same scope
        const { arrive, getPeople, giveMoney, trainArrives } = trainstation();
        describe('arrive and getPeople', () => {
            it('should accept a person, who has a random amount of money \[0-20\] and add it to array of people ', () => {
                arrive({ name: "Josh", amount: 10 });
                arrive({ name: "Debra", amount: 0 });
                const expected = [{ name: "Josh", amount: 10 }, { name: "Debra", amount: 0 }];
                const result = getPeople();
                expect(result).toEqual(expected);
            })
        })

        describe('giveMoney', () => {
            it('giving money to a random person', function () {
                const expected = [{ name: "Josh", amount: 10 }, { name: "Debra", amount: 20 }];
                giveMoney(1, 20);
                const result = getPeople();
                expect(result).toEqual(expected);
            })
        })

        describe('trainArrives', () => {
            it('remove people with 20 pounds and return remaining', function () {
                const expected = [{ name: "Josh", amount: 10 }];
                const result = trainArrives();
                expect(result).toEqual(expected);
            })
        })


    })

})





