/* querySelector e querySelectorAll. Manipulando DOM #P4 */

const divTodas = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

//Pegando um único seletor
//const query_divTodas = document.querySelector('div')
//Pegando todas as divs
//const query_divTodas = document.querySelectorAll('div')
//Transformando as divs em array
//const query_divTodas = [...document.querySelectorAll('div, p')] //Pegando mais de um elemento

//Pegando divs que tenham apenas as class / As duas últimas divs do HTML não contém class
//const query_divTodas = [...document.querySelectorAll('.div[class]')]

//Pegando apenas os elementos P dentro da DIV
const query_divTodas = [...document.querySelectorAll('div > p')]

const query_cursosTodos = [...document.querySelectorAll('.curso')]
const query_cursosC1 = [...document.querySelectorAll('.c1')]
const query_cursosC2 = [...document.querySelectorAll('.c2')]
const query_cursoEspecial = document.querySelectorAll('#c1')[0]

console.log(query_divTodas)
console.log(query_cursosTodos)
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(query_cursoEspecial)
/*
console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)
*/