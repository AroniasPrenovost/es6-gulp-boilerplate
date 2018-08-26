import {sayHello} from './modules/greeting';
import {sum, product, dividend, difference, modulus, sqrroot} from './modules/math-functions';

const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');
const resultDividend = document.getElementById('resultDividend');
const resultDifference = document.getElementById('resultDifference');
const resultModulus = document.getElementById('resultModulus');
const resultSqrroot = document.getElementById('resultSqrroot');

const a = 100;
const b = 40;

resultGreeting.textContent = sayHello('Welcome to the boilerplate.');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}.`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}.`;
resultDividend.textContent = `The dividend of ${a} and ${b} is ${dividend(a, b)}.`;
resultDifference.textContent = `The difference of ${a} and ${b} is ${difference(a, b)}.`;
resultModulus.textContent = `The modulus of ${a} and ${b} is ${modulus(a, b)}.`;
resultSqrroot.textContent = `The square root of ${a} is ${sqrroot(a)}.`;