const { double,
    increase } = require('./src/index.js');

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
    }
    )
})


