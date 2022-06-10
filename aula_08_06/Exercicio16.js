// 16. Faça um programa que sorteie um número inteiro entre 1 e 10 e permita ao usuário tentar adivinhar esse
// número continuamente até conseguir. Ao fim, o programa deve mostrar quantas tentativas foram realizadas
// até o número ser adivinhado pelo usuário. Use a função abaixo para obter um valor sorteado entre 1 e 10.

const prompt = require('readline-sync')


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const HowTry = () => {
    let cont = 1
    let numRaffle = random(0, 10)

    console.log('Tente acerta o número sorteado de 0 a 10')
    let attempts = prompt.questionInt('Informe um número: ')

    do {
        cont++
        console.log('Uma pena, mas você errou! Tente de novo!')
        attempts = prompt.questionInt('Informe outro número: ')
    } while (attempts !== numRaffle)

    console.log('Parabéns! Você acertou!')
    console.log(`O número sorteado era ${numRaffle} e você tentou ${cont}`)
}

HowTry()