 /*Função parametrizada*/

 function soma(n1, n2){
    console.log(n1 + n2)
}

soma(10,20)
soma(2023)
soma(5.1)

function soma2(n3=1, n4=5){
    console.log(n3+n4)
}

soma2()

function soma3(n5=7, n6=8){
    return n5+n6
}

console.log(soma3())

function soma4(n7=5, n8=15){
    let res = n7+n8
    return res
}

let resultado = soma4()
console.log(resultado)


let valor_padrao = 2

function soma5(n9=valor_padrao, n10=valor_padrao){
    let res = n9 + n10
    return res
}

let novoResultado = soma5()
console.log(novoResultado)



//Aqui ele vai sobrepondo o valor da variável e imprimindo conforme se pede
function soma6(v){
    return novoValor+v
}

let novoValor = 0
console.log(novoValor)

novoValor = soma6(10)
console.log(novoValor)

novoValor = soma6(5)
console.log(novoValor)


//Aqui ele vai sobrepondo o valor da variável e imprimindo conforme se pede com a remoção do return e com isso não é necessário chamar o console.log para imprimir
function soma7(z){
    novoValor01+=z
}

let novoValor01 = 0
console.log(novoValor01)

soma7(10)
console.log(novoValor01)

soma7(5)
console.log(novoValor01)
