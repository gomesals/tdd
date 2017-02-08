'use strict';

function Calc(){
    return {
        sum: sum,
        sub: sub,
        div: div,
        mult: mult,
        square: square
    };
    function sum(a, b){
        return a + b;
    }
    function sub(a, b){
        return a - b;
    }
    function div(a, b){
        return (b === 0) ? false : a / b;
    }
    function mult(a, b){
        return a * b;
    }
    function square(a){
        return Math.sqrt(a);
    }
}

module.exports = Calc();
