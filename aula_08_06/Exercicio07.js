// 7. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// a. “Telefonou para a vítima?”
// b. “Esteve no local do crime?”
// c. “Mora perto da vítima?”
// d. “Devia para a vítima?”
// e. “Já trabalhou com a vítima?”
// Ao fim o programa deve emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
// responder positivamente a 2 questões ela deve ser classificada como “Suspeita”, entre 3 e 4 como
// “Cúmplice” e 5 como “Assassino”. Caso contrário, ele será classificado como “Inocente”.

const prompt = require('readline-sync')

handleYesOrNot(prompt.question('Telefonou para a vítima? '))
handleYesOrNot(prompt.question('Esteve no local do crime? '))
handleYesOrNot(prompt.question('Mora perto da vítima? '))
handleYesOrNot(prompt.question('Devia para a vítima? '))
handleYesOrNot(prompt.question('Já trabalhou com a vítima? '))

if (contSim === 2) {
    console.log('Não saia da cidade, você é um suspeito')
} else if (contSim === 5) {
    console.log('A polícia já está na sua porta, você é o assasino')
} else if ((contSim >= 3) || (contSim >= 4) || (contSim < 5)) {
    console.log('Se entregue e entregue o assasino, você é um cumplice')
}


function handleYesOrNot(res) {
    let resTransform = res.toLowerCase()
    switch (res) {
        case 'sim':
            contSim++
            break;
        case 'não':
            contNao++
            break;
        default:
            console.log('Valor Inválido! Desculpe, você me informou algo errado!')
            break;
    }

    return null;
}

