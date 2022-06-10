// 13. Faça um programa que imprima a tabuada de todos os números de 1 a 10 (dica: use uma estrutura de
//     repetição dentro de outra).

const prompt = require('readline-sync')

console.log('Tabuada de 1 a 10')

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log('-----------------------------')
}