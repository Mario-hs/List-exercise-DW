// 5. Faça um programa que pergunte em que turno você estuda. Peça para digitar M (matutino), V (vespertino) ou
// N (noturno). Imprima a mensagem “Bom dia!”, “Boa tarde”, “Boa Noite” ou “Valor inválido”, conforme o caso.

const prompt = require('readline-sync')

console.log('Em que turno você estuda? ')
console.log('M - para matutino')
console.log('V - para vespertino')
console.log('N - para noturno')

let turno = prompt.question(' ');

switch (turno.toUpperCase()) {
    case 'M':
        console.log('Bom dia!')
        break;
    case 'V':
        console.log('Boa tarde!')
        break;
    case 'N':
        console.log('Boa noite!')
        break;
    default:
        console.log('Valor Inválido! Desculpe, você me informou algo errado!')
        break;
}

