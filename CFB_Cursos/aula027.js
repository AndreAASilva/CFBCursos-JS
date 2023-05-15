/* Funções Geradoras em Javascript. Você precisa aprender! */

// Quando uma função normal é chamada quem fica no controle dela é a própria função a função geradora 

// O * indic que é uma função geradora

/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

/*
function* perguntas(){
    const nome = yield 'Qual seu nome? '
    const esporte = yield 'Qual seu esporte favorito? '
    return 'O seu nome é ' + nome + ' ,seu esporte favorito é ' + esporte
}

const itc = perguntas()
console.log(itc.next().value)
console.log(itc.next('André').value)
console.log(itc.next('futebol').value)
*/

/*
function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itc = contador()

for(let i = 0; i < 10; i++){
    console.log(itc.next().value)
}

*/

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const itc = contador()

for(let c of itc){
    console.log(c)
}