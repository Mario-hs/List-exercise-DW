// 17. Faça um programa semelhante ao da questão anterior, porém, para duas pessoas (A e B) tentarem adivinhar
// de forma alternada. Ao fim, o programa deve informar o usuário vencedor (A ou B).

const prompt = require('readline-sync')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const HowTry = () => {
    let numRaffle = random(0, 10)
    let player01 = 0
    let player02 = 0
    let champion
    console.log(numRaffle)

    console.log('Tente acerta o número sorteado de 0 a 10')

    do {
        attempts = prompt.questionInt('Informe um número ${player01}: ')
        player01++
        if (attempts === numRaffle) {
            // player01++
            champion = 1
            break;
        }

        console.log('Uma pena, mas você errou ${player01}!')
        console.log('---------------------------------------------------------------')
        console.log('Tente de você ${player02}')
        attempts = prompt.questionInt('Informe outro número ${player02}: ')
        player02++

        if (attempts === numRaffle) {
            // player02++
            champion = 2
            break;
        }

        console.log('Uma pena, mas você errou ${player02}!')
        console.log('---------------------------------------------------------------')
        console.log('Tente de você ${player01}')
    } while (attempts !== numRaffle)

    console.log(`Parabéns ${champion === 1 ? 'player01' : 'player02'}! Você acertou!`)
    console.log(`O número sorteado era ${numRaffle} e você tentou ${champion === 1 ? player01 : player02}`)
}

HowTry()