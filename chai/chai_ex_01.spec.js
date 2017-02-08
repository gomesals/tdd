'use strict';

const expect = require('chai').expect,
    Calc = require('./chai_ex_01');

describe('Calc', () => {

    describe('sum of two numbers', () => {
        it('the function sum returns the sum of two numbers', () => {
            const sum = Calc.sum(5, 5);
            expect(sum).to.be.a('number');
            expect(sum).to.equal(10);
            expect(Calc).to.have.property('sum');
        });
    });

    describe('sub of two numbers', () => {
        it('the function sub returns the sub of two numbers', () => {
            const sub = Calc.sub(5, 5);
            expect(sub).to.be.a('number');
            expect(sub).to.equal(0);
            expect(Calc).to.have.property('sub');
        });
    });

    describe('div of two numbers', () => {
        it('the function div returns the div of two numbers', () => {
            const div = Calc.div(5, 5);
            expect(div).to.be.a('number');
            expect(div).to.equal(1);
            expect(Calc).to.have.property('div');

            expect(Calc.div(5,0)).to.be.a('boolean');
            expect(Calc.div(5,0)).to.equal(false);
        });
    });

    describe('mult of two numbers', () => {
        it('the function mult returns the mult of two numbers', () => {
            const mult = Calc.mult(5, 5);
            expect(mult).to.be.a('number');
            expect(mult).to.equal(25);
            expect(Calc).to.have.property('mult');
        });
    });

    describe('square of two numbers', () => {
        it('the function square returns the square of two numbers', () => {
            const square = Calc.square(4);
            expect(square).to.be.a('number');
            expect(square).to.equal(2);
            expect(Calc).to.have.property('square');
        });
    });
});
