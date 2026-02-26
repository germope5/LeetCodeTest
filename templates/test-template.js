const assert = require('assert');
const solution = require('./solution');

describe('[NOMBRE DEL PROBLEMA]', () => {
    it('caso 1', () => {
        assert.deepStrictEqual(solution([1, 2, 3]), [1, 2, 3]);
    });
    
    it('caso borde', () => {
        assert.deepStrictEqual(solution([]), []);
    });
});
