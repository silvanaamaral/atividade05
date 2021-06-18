console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const produtos = require('./database')

const read  = require('readline-sync')
const carrinho = []

produtos.sort( (a,b) => a.preco - b.preco)

console.table(produtos);

console.log('--------------------------------------')

const verProdutos = read.question('Voce deseja adicionar algum produto por categoria ? (S/N)') 

    if (verProdutos.toUpperCase() === 'S'){ 

        console.log('---------------------------------');
        console.log('Essas sao as categorias :');
        console.log('Alimento , bebida , casa , higiene , informatica');
        console.log('------------------------------------');

 const secetCategoria = read.question('Voce esta procurando produtos de que categoria ?')
 const categorias = produtos.filter(item => item.categoria === secetCategoria)
 console.table(categorias);
}else{
    (verProdutos.toUpperCase() !== 'S')
    console.log('Esses sao os disponiveis :');
    console.table(produtos)
} 
const array = new Array()

class Pedido {
        constructor(array){
        this.productor = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0


    }
}
const compras = () => {
    productId = parseInt(read.question('digite o ID do produto :' ))

    for (i=0 ; i < 1000 ; i++){
        findId = produtos.find(item => item.id == productId)
        if (findId){
            break;
        }else{
            productId = parseInt(read.question('Tente novamente '))
        }
    }


quantidadeItem = parseInt(read.question('Digite a quantidade desejada :'))
for (i=0 ; i < 1000 ; i++){
    if(quantidadeItem > 0 ){
        break;
    }else{
        quantidadeItem = parseInt(read.question('Digite uma quantidade valida :'))
    }
}
    const produtosCarrinho = { ...findId, quantidade: quantidadeItem } 
    carrinho.push(produtosCarrinho)

    const continueComprando = read.question('Deseja inserir mais algum produto ? (S/N)')
    const continueComprandoFormato = continueComprando.toLowerCase()
    if (continueComprandoFormato === 'n'){
     cupom = parseInt(read.question('Digite o valor do desconto  :'))
    }else {
        compras()
    }
    for (i=0 ; i < 1000 ; i++){
        if(cupom > 15 || cupom < 0){
        cupom = parseInt(read.question('lamento cupom invalido tente novamente :'))
        } else{
            break;
        }
    }
}
compras()
class Order {
    constructor(carrinho){
    this.newProducts = carrinho
    this.subTotal = 0
    }
    calcSubtotal(){
        this.subTotal = this.newProducts.reduce((acumulador,item) => acumulador +(item.preco * item.quantidade), 0) 
    }
}
const order = new Order(carrinho)
console.table(order.newProducts);
order.calcSubtotal()
console.log(`valor do pedido $ ${order.subTotal.toFixed(2)}.`);
const desconto = order.subTotal * (cupom/100)
console.log(`valor do pedido $ ${desconto.toFixed(2)}.`);
const total = order.subTotal - desconto
console.log(`valor do pedido $ ${total.toFixed(2)}.`)

console.log('obrigado por comprar conosco');


    






    