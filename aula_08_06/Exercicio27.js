// 27. Faça um programa que permita ao usuário digitar uma lista de valores inteiros até que o valor 0 seja digitado.
// Ao fim, o programa deve mostrar a soma, a média, o máximo, o mínimo e a quantidade dos valores digitados,
// usando uma função para cada operação.

const prompt = require('readline-sync')

let list = []
let input
let sum = 0
let min = Infinity
let max = 0

while (true) {
    input = prompt.questionInt('Informe um número: ')
    if (input === 0) {
        break
    }
    if (input < min) {
        min = input
    }
    if (input > max) {
        max = input
    }
    sum = sum + input
    list.push(input);
}

console.log(`Lista inserida: ${list}`)
console.log(`Soma dos números inseridos: ${sum}`)
console.log(`Media dos números inseridos: ${sum / list.length}`)
console.log(`Menor número inserido: ${min}`)
console.log(`Máximo número inserido: ${max}`)