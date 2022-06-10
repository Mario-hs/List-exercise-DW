// 4. Faça um programa que leia duas notas parciais de um aluno e mostre:
// a. A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
// b. A mensagem “Aprovado com Louvor”, se a média for igual a dez;
// c. A mensagem “Reprovado” se a média for menor do que sete;

const prompt = require('readline-sync')

let nota_1 = parseFloat(prompt.question('Informe a primeira nota do aluno '));
let nota_2 = parseFloat(prompt.question('Informe o segunda nota do aluno '));

const notaFinal = ((nota_1 + nota_2) / 2) / 10;

if ((notaFinal >= 7) && (notaFinal < 10)) {
    console.log(`Aluno aprovado com ${notaFinal}`)
} else if (notaFinal < 7) {
    console.log(`Aluno reprovado com ${notaFinal}`)
} else {
    console.log(`Aluno aprovado com louvor, ficou com ${notaFinal}`)
}

