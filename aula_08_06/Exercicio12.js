// 12. Faça um programa que permita ao usuário entrar com um número entre 1 e 10 e, ao fim, mostre a tabuada
// desse número.

const prompt = require('readline-sync')

let num = prompt.questionInt('Informe um número entre 0 e 10: ');

if ((num > 10) || (num < 0)) {
    console.log('Número fora do range permitido!')
} else {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
}