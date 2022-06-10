// 22. Faça um programa que crie duas listas inicializadas com 10 números inteiros cada e mostre a soma dos
// elementos de mesmo índice (obs.: o resultado serão 10 números inteiros).

const prompt = require('readline-sync')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let listaInicializada_1 = []
let listaInicializada_2 = []
let listaFinal = []

for (let i = 0; i < 10; i++) {
    listaInicializada_1[i] = random(1, 50)
    listaInicializada_2[i] = random(1, 50)
    listaFinal[i] = listaInicializada_1[i] + listaInicializada_2[i]
}

console.log('Lista Inicializada 1º: ', listaInicializada_1)
console.log('Lista Inicializada 2º: ', listaInicializada_2)
console.log('Listas Somadas: ', listaFinal)