// Aprenda o Método getElementsByTagName. Manipulando DOM #P2

//ID retorna apenas um elemento HTML

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

//Desta forma a const colecaoHTML não está sendo considerada como um Array, diminuindo muito o que podemos fazer com esses elementos, porém, podemos converter utilizando o SPREAD
/*

const colecaoHTML = document.getElementsByTagName('div')

console.log(colecaoHTML)
colecaoHTML.map((e)=>{
    console.log(e)
})

//console.log(arrayElementos)
//console.log(colecaoHTML)

*/

const colecaoHTML = [...document.getElementsByTagName('div')]

console.log(colecaoHTML)

colecaoHTML.map((e)=>{
    console.log(e)
})


