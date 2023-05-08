/*Aprendendo sobre operador ternário */

/* % = Resto da divisão */

// 0 = False
// 1 = True

//Ternário = ?
//teste lógico ? se verdadeiro : se falso

//Dica de uso para a impressão do operador ternário dada pelo instrutor é de que no lugar de imprimir um True ou False, podemos inserir o texto que quiser para validar a verificação quando for utilizado no DOM

let num1 = 10
let num2 = 15
let res= (num1 > num2 ? 'Verdadeiro' : 'Falso')
console.log(res)

let st = 'A'
let res2 = (st == 'A' ? 'Ativo' : 'Inativo')
console.log(res2)

let num3 = 2
let res3 = (!(num3%2) ? 'Par' : 'Impar')
console.log(res3)

let valor = 9.99
let total = (valor <= 10 ? 'Valor na média' : 'Valor acima da média')
console.log(total)


