const mult = require('../src/mult')

it('should be return correct mult', () => {
    const result = mult(2,2)
    expect(result).toBe(4)
})