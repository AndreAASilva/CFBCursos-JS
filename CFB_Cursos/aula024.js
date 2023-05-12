/* Funções Anônimas em Javascript */

/* São funções que não possuem um nome associado a seu conteúdo. Ela só será criada no meio da execução */

/* Função normal:
function soma(){}
*/

//Função anônima
/*
const f = function(v1,v2){
    return v1+v2
}
console.log(f(5,5))
*/
/*
const f = function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(f(5,10,10,30))
*/
const f = new Function('v1','v2','v3', 'return v1+v2+v3') //Função construtor anônima. Lembrando que os valores devem ter aspas, não é necessário inserir chaves, os valores devem ser inseridos dentro das aspas e o nome Function deve ser iniciado co letra maiúscula

console.log(f(5,6,9))

let nome = new Function('n1', 'n2', 'return n1+n2')
console.log(nome(8,9))