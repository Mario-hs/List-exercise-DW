// 25. Crie um programa com uma lista inicializada com os valores a seguir:
// { 8, 9, 6, 3, 7, 2, 5, 4, 1, 2, 7, 8, 5, 9, 4, 2, 3 }
// O programa deve remover da lista todos os elementos pares e, ao fim, exibir a lista com os elementos
// separados por vírgula.

const prompt = require('readline-sync')

const lista = [8, 9, 6, 3, 7, 2, 5, 4, 1, 2, 7, 8, 5, 9, 4, 2, 3]
let listaFinal = []
let i = 0
let j = 0

// do {
//     if (lista[i] % 2 !== 0) {
//         listaFinal[j] = lista[i]
//         j++
//     }
//     i++
// } while (i < lista.length)

lista.forEach(element => {
    if (element % 2 !== 0) {
        listaFinal[i] = element
        i++
    }
});

console.log(listaFinal.join(','))