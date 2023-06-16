//Template Strings 

const caixa = document.querySelector('#caixa')

const canal = 'CFB Cursos'
const curso = 'Javascript'
const frase = `Este é o curso de ${curso} do canal ${canal}`

const carros = ['Polo', 'Gol', 'Fiat', 'Saveiro', 'Fusca','Strada','Kombi']

/*
let ul = `<ul>`
carros.map((e)=>{
    ul+=`<li> ${e}</li>`
})
*/
let ul = `<ul>`
carros.map((e)=>{
    ul+=`<li>${e}</li>`
})
caixa.innerHTML=ul