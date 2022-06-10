// 15. Faça um programa que leia um valor monetário a ser investido, a taxa de juros mensal sobre o investimento
// e a quantidade de meses que o valor ficará investido. O programa deve calcular e mostrar quanto foi o
// rendimento do valor investido.

const prompt = require('readline-sync')

let investimento = prompt.questionFloat('Informe o valor a ser investido: ')
let taxaDeJuros = prompt.questionFloat('Informe a taxa de juros (mensal): ')
let meses = prompt.questionInt('Informe quantos meses ficará investido o dinheiro: ')

let valorFinal = investimento

for (let i = 1; i <= meses; i++) {
    valorFinal = valorFinal + (valorFinal * taxaDeJuros)
}
console.log(`Valor no final do investimento: ${valorFinal}`)