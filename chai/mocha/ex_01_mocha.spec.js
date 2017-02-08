'use strict';

const Calc = require('./ex_01_mocha'),
    assert = require('assert');

describe('Calc', () => {
    describe('Calc sum of two numbers', () => {
        it('the function sum return sum of two numbers', () => {
            const sum = Calc.sum(5,5);
            assert.equal(10, sum);
            assert.deepEqual(10,sum);
            assert.deepStrictEqual(10, sum);
        });
    });

    describe('Calc sub of two numbers', () => {
        it('the function sub return sub of two numbers', () => {
            const sub = Calc.sub(5,5);
            assert.equal(0, sub);
            assert.deepEqual(0,sub);
            assert.deepStrictEqual(0, sub);
        });
    });
});
