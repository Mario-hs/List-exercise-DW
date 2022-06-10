// 2. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo. 

const prompt = require('readline-sync')

let num_1 = prompt.question('Informe um número ');

let result = num_1 > 0 ? console.log(`${num_1} é positivo `) : console.log(`${num_1} é negativo `)
