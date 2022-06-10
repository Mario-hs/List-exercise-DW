// 9. Faça um programa que mostre todos os números pares entre 0 e 100.

const prompt = require('readline-sync')

console.log('Números pares de 0 a 100')
for (let i = 2; i <= 100; i += 2) {
    console.log(i)
}