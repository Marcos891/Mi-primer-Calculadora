const process = require('process');
const calculadora2 = require('./calculadora2');

let operator = process.argv[2];
let a = +process.argv[3];
let b = +process.argv[4];

let resultado = 0;

let operators = ['sumar','restar','multiplicar','dividir','potenciacion','raizCuadrada','raizCubica'];

if (operators.includes(operator)) {
 if (!isNaN(a) && !isNaN(b)) {
    if (operator === 'sumar') {
        console.log(calculadora2.sumar(a,b));
    }else if (operator === 'restar') {

        console.log(calculadora2.restar(a,b));
    }else if (operator === 'multiplicar') {

        console.log(calculadora2.multiplicar(a,b));
    }else if (operator === 'dividir') {

        console.log(calculadora2.dividir(a,b));
    }else if (operator === 'potenciacion') { 
         console.log(calculadora2.potenciacion(a,b));

    }else if (operator === 'raizCuadrada') {
        console.log(calculadora2.raizCuadrada(a));

    }else if (operator === 'raizCubica') {
        console.log(calculadora2.raizCubica(a));

    }else {
        console.log('ingrese valores numericos');
    }  
 }  
}

console.log(calculadora2.multiplicar(10,2));