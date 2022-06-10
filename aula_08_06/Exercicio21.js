// 21. Faça um programa que crie uma lista inicializada com 10 números inteiros e armazene em uma segunda lista
// os quadrados dos números da primeira lista, mostrando-os ao final separados por vírgula.

const prompt = require('readline-sync')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let listaInicializada = []
let listaQuadratica = []

for (let i = 0; i < 10; i++) {
    listaInicializada[i] = random(1, 50)
    listaQuadratica[i] = Math.pow(listaInicializada[i], 2)
}

console.log('Lista Inicializada: ', listaInicializada)
console.log('Lista Quadratica: ', listaQuadratica)