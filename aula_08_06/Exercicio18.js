// 18. Usando o código a função de números aleatórios mostrado na questão anterior, faça um programa que sorteie
// os 6 números da Mega-Sena, lembrando que os números variam de 1 a 50 e são diferentes entre eles (dica:
// use vetores).

const prompt = require('readline-sync')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const megaSena = () => {
    let numSorteados = []
    let num = random(0, 50)

    do {
        num = random(0, 50)
        if (numSorteados.length === 0) {
            numSorteados.push(num)

        } else {
            for (const e of numSorteados) {

                if (e === num) {
                    numSorteados.splice(numSorteados.indexOf(num), 1)

                }
            }
            numSorteados.push(num)
        }
        if (numSorteados.length === 6) {
            break
        }
    } while ((numSorteados.length) <= 6)

    for (let i = 0; i < numSorteados.length; i++) {
        console.log(numSorteados[i])
    }
}

megaSena()