// 6. Faça um programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar (+,
//     -, *, /). O resultado da operação escolhida deve ser acompanhado de uma frase que diga se o número é:
//     a. Par ou ímpar;
//     b. Positivo ou negativo;

const prompt = require('readline-sync')
let num_1 = parseFloat(prompt.question('Informe um número '));
let num_2 = parseFloat(prompt.question('Informe outro número '));

console.log('Informe qual operação você deseja realizar')
console.log('+ : adição')
console.log('- : subtração')
console.log('* : multiplicação')
console.log('/ : divisão')
let operador = prompt.question(' ');

switch (operador) {
    case '+':
        console.log(`Adição dos números ${num_1} + ${num_2} = ${num_1 + num_2}`)
        break;
    case '-':
        console.log(`Subtração dos números ${num_1} - ${num_2} = ${num_1 - num_2}`)
        break;
    case '*':
        console.log(`Multiplicação dos números ${num_1} * ${num_2} = ${num_1 * num_2}`)
        break;
    case '/':
        console.log(`Divisão dos números ${num_1} / ${num_2} = ${num_1 / num_2}`)
        break;
    default:
        console.log('Valor Inválido! Desculpe, você me informou algo errado!')
        break;
}

