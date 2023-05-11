/* WHILE e DO WHILE em Javascript, entenda a diferença */

/*Ambos vão executar enquanto a expressão lógica for verdadeira e serão usados quando não souber a quantidade de vezes que será iterada a quantidade de vezes do bloco*/

/*Do While executa o bloco de comandos e depois ele testa diferente do While*/


//Executa e depois testa
let n = 10

while(n<10){
    console.log('André Anderson')
    n++
}
console.log('Fim do programa')

//Faz o teste e executa
let n1 = 10

do{
    console.log('André Anderson')
    n1++
}while(n1<10)

console.log('Fim do programa')


let n2 = 0

console.log('Utilizando o DO WHILE')

do{
    console.log(n2)
    n2++
}while(n2<10)

let n3 = 0
console.log('Utilizando apenas o WHILE')

while(n3<10){
    console.log(n3)
    n3++
}