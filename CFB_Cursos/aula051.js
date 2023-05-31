//Aprendendo ITERADORES e elementos iteráveis em Javascript

//A iteração é o processo de repetir uma série de instruções ou ações várias vezes para alcançar um objetivo específico, seja na programação, matemática ou em outros campos relacionados.

//Quando inserimos o iterator na variável abrimos a possibilidade de imprimir trechos do array conforme a impressão abaixo. Pelo que vi na utilização, a formas melhores que substituem a utilização do iterator como por exemplo o uso do MAP onde podemos pegar os valores que desejamos do array e sua posição junto com o length que percorre todos os elementos.

const valores = [10,8,9,2]
const it_valores = valores[Symbol.iterator]()

let texto = 'Youtube'
let it_texto = texto[Symbol.iterator]()

console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

