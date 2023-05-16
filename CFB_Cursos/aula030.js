/* Aprendendo o Método getElementById. Manipulando DOM #P1 */

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

//Utilizando o FOR para percorrer arrays e alterar os valores
/*
for(d of arrayElementos)
    d.innerHTML = 'André Anderson'
*/

//Alterando os elementos com o MAP
arrayElementos.map((e)=>{
    console.log(e)
    e.innerHTML = 'André'
})