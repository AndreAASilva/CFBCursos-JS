/* Arrow Function em Javascript. Aprenda o que é e como usar! */

/* São um tipo de função anônima */

// É preciso associar uma função anônima a uma variável

const soma = (v1,v2) => {
    return v1+v2
}
console.log(soma(5,10))

//Se a função tiver apenas um parâmetro não é necessário inserir ele dentro das chaves

const nome = n => {return n}
console.log(nome('Bruno'))

//Não precisa do return para ter o resultado

const add = n => n+10
console.log(add(15))

//Se for uma função mais elaborada tem que ter as aspas, e inserir o return

const num = (v3,v4,v5) => {
    let res = v3+v4+v5
    return res
}

console.log(num(10,7,18))