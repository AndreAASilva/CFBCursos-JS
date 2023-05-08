/*Diferença entre Pré Incremento e Pós Incremento */

let n=10

/*n++*/ /*Sempre que o sinal estiver a direita é pós incremento, eu uso o valor e depois incremento */

console.log(++n) /*Sempre que o sinal estiver a esquerda é pré incrementado, ele incrementa e depois usa o valor*/

console.log(n)

console.log(n++)

console.log(n)

/*Utilizao o -- também funciona como decremento */
/*
for(let i = 0; i < 11; i++){
    let num1 = 5
    let res = i*num1
    console.log(num1 + ' x ' + i + ' = ' + res)

}
*/

for(let i = 0; i <= 10; i++){
    let num2 = 4
    let res2 = i*num2
    console.log(num2 + ' x ' + i + ' = ' + res2)

}

