// 20. Faça um programa que crie uma lista inicializada com 5 números inteiros desordenados e mostre-os em ordem
// decrescente.

const prompt = require('readline-sync')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let listaInicializada = []

for (let i = 0; i < 5; i++) {
    listaInicializada[i] = random(1, 50)
    console.log(listaInicializada)
    // for (let j = 0; j < listaInicializada.length; j++) {
    //     if (listaInicializada[i] > listaInicializada[j]) {
    //         let aux = listaInicializada[j]
    //         listaInicializada[j] = listaInicializada[i]
    //         listaInicializada[i] = aux
    //     }
    // }
}
// console.log('Lista Ordenada (for):', listaInicializada)

console.log('Lista Ordenada (sort): ', listaInicializada.sort((a, b) => { return b - a }))