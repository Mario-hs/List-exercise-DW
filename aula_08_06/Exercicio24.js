// 24. Considere duas listas com os seguintes valores:
// a. Lista1: { "E", "es", "progr", "usa", "lis" }
// b. Lista2: { "u", "tou", "amando", "ndo", "tas" }
// Faça um programa com duas listas inicializadas conforme acima e que una os elementos de mesmo índice
// dessas duas listas em uma terceira lista, mostrando os itens da terceira lista separados pelo caractere de
// espaço (' ').

const prompt = require('readline-sync')

const Lista1 = ["E", "es", "progr", "usa", "lis"]
const Lista2 = ["u", "tou", "amando", "ndo", "tas"]
let listaFinal = []

for (let i = 0; i < Lista1.length; i++) {
    listaFinal[i] = Lista1[i] + Lista2[i]
}

console.log(listaFinal.join(' '))