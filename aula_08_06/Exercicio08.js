// 8. Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número
// e armazene na variável y. Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y
// passe a ter o valor de x.Faça um programa que mostre todos os números inteiros entre 0 e 20.

const prompt = require('readline-sync')
let x = prompt.question('Informe o primeiro número ');
let y = prompt.question('Informe o segundo número ');

console.log(`Valor de X é ${x}`)
console.log(`Valor de Y é ${y}`)

console.log(`Valor de X é ${y}`)
console.log(`Valor de Y é ${x}`)

// console.log('')
// console.log('processing....')
// console.log('')

// let aux = x
// x = y
// y = aux

// console.log(`Valor de X é ${x}`)
// console.log(`Valor de Y é ${y}`)