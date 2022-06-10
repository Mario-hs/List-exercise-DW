// 28. Faça um programa com uma função para solicitar ao usuário digitar os nomes e os preços de produtos até que
// seja digitado "sair" no nome de um produto. Crie também uma função que receba ambos os vetores como
// parâmetros e exiba os produtos (nome e preço) cujo preço esteja acima da média.

const prompt = require('readline-sync')

let products = []

const Crud = () => {

    let item = {
        'name': '',
        'price': '',
    }

    let exit

    do {
        console.log('------------------------------------------------')
        item.name = prompt.question('Informe o nome do produto: ')
        if ((item.name.toUpperCase() !== 'SAIR') && (item.name.toUpperCase() !== 'S')) {
            item.price = prompt.questionFloat('Informe o preço do produto: ')
            products.push({ name: item.name, price: item.price })
        } else {
            break
        }
        exit = prompt.question('Deseja sair? ').toUpperCase()
    } while ((exit !== 'SIM') && (exit !== 'S'))
    console.log()
    console.log()
}

const ToRead = () => {
    let i = 1
    console.log('-------------------------')
    products.forEach(element => {
        console.log(`${i}º produto`)
        console.log(`Nome do produto: ${element.name}`)
        console.log(`Preço do produto: ${element.price}`)
        console.log('-------------------------')
        i++
    })


}

const Media = () => {
    let media = 0

    products.forEach(element => {
        media = element.price + media
    });

    media = media / products.length

    console.log(`Média do preços dos produtos: ${media}`)
}

Crud()
ToRead()
Media()



