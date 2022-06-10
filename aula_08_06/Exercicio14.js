// 14. Faça um programa que leia continuamente notas entre 0 e 100, até que o usuário informe o valor -1 para a
// nota. Ao fim, o programa deve mostrar a média das notas digitadas pelo usuário.

const prompt = require('readline-sync')

let nota = prompt.questionFloat('Informe a nota que deseja somar: ')
let i = 0
let sum = 0
let media
let valorDeParada = -1

while (true) {
    nota = prompt.questionFloat('Informe a nota que deseja somar: ')
    if (nota === valorDeParada)
        break
    sum = sum + nota
    i++
}

console.log(`A média das notas é: ${media = sum / i}`)

