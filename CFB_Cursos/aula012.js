/* Operador Spread, aprendendo sobre o espalhador em Javascript */

/* Operador spread - Quebra um array - Quebra um conjunto de elementos e devolve elemento a elemento */
/* spread (...) */
let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
//let n3 = [n1, n2]
//Mesmo resultado com o spread e sem
let n3 = [...n1,...n2]
console.log('n1: '+ n1)
console.log('n2: '+ n2)
console.log('n3: '+ n3)

/*
const jogador1 = {nome: 'Bruno', energia:100, vidas: 3}
const jogador2 = {nome: 'Bruce', energia:100, vidas: 5}
const jogador3 = {nome: 'André', energia: 99, vidas: 4}
const jogador4 = {...jogador1,...jogador2,...jogador3}

console.log(jogador4)

Como no exemplo acima os itens são iguais, ele vai imprimir os ultimos valores

*/
const jogador1 = {nome: 'Bruno', energia:100, vidas: 3, magia: 150}
const jogador2 = {nome: 'Bruce', energia:100, vidas: 5, velocidade: 80}
const jogador3 = {nome: 'André', energia: 99, vidas: 4}
const jogador4 = {...jogador1,...jogador2,...jogador3}

console.log(jogador4)

//Com o uso do spread no exemplo acima, ele vai imprimir os valores iguais fo último jogador e incluir os itens extras inseridos no primeiro e segundo

function soma(v1,v2,v3){
    return v1+v2+v3
}

let valores = [1,4,5]
console.log(soma(...valores))

//No exemplo da função, sem o spread ele roda uma mensagem (1,4,5undefinedundefined) e com o spread ele vai realizar a operação de forma correta



//Pegando os elementos da TAG DIV
//const objs1=document.getElementsByTagName('div')

//Com o uso do spread eu consigo transformar o meu HTML colection num array e trabalhar valores com ele
const objs2=[...document.getElementsByTagName('div')]


objs2.forEach(element => {
    element.innerHTML = "Curso"
});

//console.log(objs1)
console.log(objs2)
