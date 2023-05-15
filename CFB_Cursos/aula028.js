/* Aprendendo sobre o método MAP em Javascript */

//Função que percorre Arrays / Necessária para trabalhar quando precisa percorrer os elelmentos de uma coleção

// 1o - Elemento da coleção
// 2o - Índice do elemento / A posição do elemento

/*
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

cursos.map((el,i) => {
    console.log('Curso: ' + el + ' - Posição do curso: ' + i)
})
*/

/*
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c = cursos.map((el, i) => {
    //return el + ' - Posição - ' + i
    return el
})

console.log(c)
*/

/*Manipulando elementos do DOM

let el = document.getElementsByTagName('div')
el=[...el]
el.map((e,i) => {
    e.innerHTML = "André Anderson"

})
*/

/*Convertendo o Array String para Inteiro

const converterInt = (e) => parseInt(e)
let num = ['1','2','3','4','5'].map(converterInt)
console.log(num)
*/

//Dobrando os valores com o map
const dobrar = (e) => e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)




