// 1. Faça um programa que peça dois números, e mostre o maior deles.

const prompt = require('readline-sync')

let num_1 = prompt.question('Informe o primeiro número');
let num_2 = prompt.question('Informe o segundo número');

if (num_1 > num_2) {
    console.log(`${num_1} é maior `)
} else {
    console.log(`${num_2} é maior `)
}