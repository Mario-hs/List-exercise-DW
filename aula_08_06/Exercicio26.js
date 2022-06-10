// 26. Considere as informações a seguir relacionadas a um mapa de criptografia:
// Mapa: Epaço=00, A=01, B=02, C=03, D=04, E=05, F=06, G=07, H=08, I=09, J=10, K=11, L=12, M=13, N=14,
// O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26.
// Crie uma função para criptografar e outra para decriptografar um texto usando esse mapa de criptografia.

const prompt = require('readline-sync')

// const Mapa = [{
//     'Epaço': 00,
//     'A': 01, 'B': 02,
//     'C': 03, 'D': 04,
//     'E': 05, 'F': 06,
//     'G': 07, 'H': 08,
//     'I': 09, 'J': 10,
//     'K': 11, 'L': 12,
//     'M': 13, 'N': 14,
//     'O': 15, 'P': 16,
//     'Q': 17, 'R': 18,
//     'S': 19, 'T': 20,
//     'U': 21, 'V': 22,
//     'W': 23, 'X': 24,
//     'Y': 25, 'Z': 26
// }]

const Mapa = [
    {
        'letra': ' ',
        'value': 00,
    },
    {
        'letra': 'A',
        'value': 01,
    },
    {
        'letra': 'B',
        'value': 02,
    },
    {
        'letra': 'C',
        'value': 03,
    },
    {
        'letra': 'D',
        'value': 04,
    },
    {
        'letra': 'E',
        'value': 05,
    },
    {
        'letra': 'F',
        'value': 06,
    },
    {
        'letra': 'G',
        'value': 07,
    },
    {
        'letra': 'H',
        'value': 07,
    },
    {
        'letra': 'I',
        'value': 09,
    },
    {
        'letra': 'J',
        'value': 10,
    },
    {
        'letra': 'K',
        'value': 11,
    },
    {
        'letra': 'L',
        'value': 12,
    },
    {
        'letra': 'M',
        'value': 13,
    },
    {
        'letra': 'N',
        'value': 14,
    },
    {
        'letra': 'O',
        'value': 15,
    },
    {
        'letra': 'P',
        'value': 16,
    }
    ,
    {
        'letra': 'Q',
        'value': 17,
    },
    {
        'letra': 'R',
        'value': 18,
    },
    {
        'letra': 'S',
        'value': 19,
    },
    {
        'letra': 'T',
        'value': 20,
    },
    {
        'letra': 'U',
        'value': 21,
    },
    {
        'letra': 'V',
        'value': 22,
    },
    {
        'letra': 'W',
        'value': 23,
    },
    {
        'letra': 'X',
        'value': 24,
    },
    {
        'letra': 'Y',
        'value': 25,
    },
    {
        'letra': 'Z',
        'value': 26,
    }

]

// let msg = prompt.question('Mensagem a ser encriptografada: ')
let msg = 'vamos laa'
let msgEncriptografia = []
let msgDecriptografada = []
let msgFinalEncriptografia
let msgFinalDecriptografada

const criptografar = () => {
    msgSeparada = msg.toUpperCase().split("")

    for (let i = 0; i < msgSeparada.length; i++) {
        Mapa.forEach(element => {
            if (element.letra === msgSeparada[i]) {
                msgEncriptografia[i] = element.value
            }
        });
    }
    msgFinalEncriptografia = msgEncriptografia.join('')
}

const decriptografar = () => {
    for (let i = 0; i < msgEncriptografia.length; i++) {
        Mapa.forEach(element => {
            if (element.value === msgEncriptografia[i]) {
                msgDecriptografada[i] = element.letra
            }
        });
    }

    msgDecriptografada = msgDecriptografada.join('')
    msgFinalDecriptografada = msgDecriptografada.toLowerCase()
}

criptografar()
decriptografar()

console.log('Mensagem encriptografada: ', msgFinalEncriptografia)
console.log()
console.log('Mensagem desencriptografada: ', msgFinalDecriptografada)
