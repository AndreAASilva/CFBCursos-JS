/*Operadores Bitwise em Javascript  */

/*Onde há equivalência ele vai retornar o valor conforme tabela verdade. 
Ex.:

Binário
00001010 = 10
00001011 = 11
-------------
00001010 = 10 - Resultado
Se o valor de cima for igual ao de baixo ele será repetido, caso não ele retorna o zero.


*/

/*Exemplo utilizando o AND */

let n1 = 10
let n2 = 11

res = n1 & n2

console.log(res)

/*Exemplo utilizando o OR */

let n3 = 10
let n4 = 11

res2 = n3 | n4

console.log(res2)

/* (XOR) */
let n5 = 10
let n6 = 11

res3 = n5 ^ n6
console.log(res3)

/* >> << deslocando valores para a direita ou esquerda */

let n7 = 10

/*Deslocando para a esquerda uma casa dos bits de 10 que são 00001010 e vão ficar 00010100 = 20 */
res4 = n7 << 1

console.log(res4)