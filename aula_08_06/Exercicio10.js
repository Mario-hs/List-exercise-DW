// 10. Faça um programa que mostre todos os números pares entre 0 e um valor inteiro digitado pelo usuário.

const prompt = require('readline-sync')

let num = prompt.questionInt('Informe um número ');

console.log(`Números pares de ${num}`)

for (let i = 2; i <= num; i += 2) {
    console.log(i)
}