// 3. Faça um programa que verifique se uma letra digitada é vogal ou consoante.

const prompt = require('readline-sync')

let letra = prompt.question('Informe um letra ');

if ((letra.toUpperCase() === 'A') || (letra.toUpperCase() === 'E') || (letra.toUpperCase() === 'I') || (letra.toUpperCase() === 'O') || (letra.toUpperCase() === 'U')) {
    console.log(`${letra} é vogal`)
} else {
    console.log(`${letra} é consoante`)
}

// switch (letra.toUpperCase()) {
//     case 'A':
//         console.log(`${letra} é vogal`)
//         break;
//     case 'E':
//         console.log(`${letra} é vogal`)
//         break;
//     case 'I':
//         console.log(`${letra} é vogal`)
//         break;
//     case 'O':
//         console.log(`${letra} é vogal`)
//         break;
//     case 'U':
//         console.log(`${letra} é vogal`)
//         break;
//     default:
//         console.log(`${letra} é consoante`)
//         break;
// }

