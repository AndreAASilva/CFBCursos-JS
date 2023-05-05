/* Parâmetros REST em funções Javascript */

/*Neste modelos ele vai retornar a quantidade de valores passados abaixo no console.log()*/
function soma1(...total){
    let tam1 = total.length
    return tam1
}

console.log(soma1(4,4,4,4,4,4,4,4))

/*Criar uma função sem número determinado de valores */
/* A indicação do spread (...) antes de valores indica que serão utilizados parâmetros rest, podendo informa a quantidade de valores que quiser na chamada*/
function soma(...valores){
    /*Primeiro é necessário saber quantos valores foram passados, utilizando o length que mostra a quantidade dos valores. (valores está sendo considerado um array) */
    let tam = valores.length
    /*Criada variável resultado com o valor zero, pois nela será informado a soma dos valores informadps*/
    let res = 0
    /*Utilizando o FOR será acrescentado valores e somados no res*/
    for(let i = 0; i < tam; i++){
        res+=valores[i]

    }
    return res
}
console.log(soma(10,5,2,2,2,2))


/*
function soma(...valores){
    let res = 0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(5,5,5,5,5,5))
*/

