// 11. Faça um programa que leia um valor inteiro digitado pelo usuário e mostre todos os múltiplos desse valor
// entre 0 e 100.

const prompt = require('readline-sync')

let num = prompt.questionInt('Informe um número ');

console.log(`Números múltiplos de ${num}`)
for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
        console.log(i)
    }
}