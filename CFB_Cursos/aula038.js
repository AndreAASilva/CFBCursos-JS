//Entendendo a relação dos elementos no DOM em Javascript #P1
// Como referenciar como encontrar os elementos dentro do DOM

/*
const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(btn_c[1].getRootNode()) //Verificando a posição dos elementos filhos
console.log(btn_c[0].ownerDocument) 

console.log(caixa1.firstElementChild) //Verificar primeiro filho
console.log(caixa1.lastElementChild) //Verificar último filho
console.log(caixa1.children) //Verificar todos os filhos
*/

//Entendendo a relação dos elementos no DOM em Javascript #P2

/*
const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.hasChildNodes()) //Verificar se o elemento tem filhos (true or false)
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children) //Retorna o elementos da consição


//Teste utilizando uma operação ternária para verificar se possui filhos ou não

console.log(caixa1.children.length > 0 ?'Possui filhos' : 'NÃO possui filhos')

console.log(caixa1.firstElementChild.innerHTML='TESTE') //Alterando o texto do primeiro elemento
console.log(caixa1.children[1].innerHTML='TESTE') //Alterando o texto do segundo elemento
*/

//Aula - 40 - Criando novos elementos e adicionando no DOM em Javascript
//Podemos criar um elemento HTML e naexar na página

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((el, chave)=>{ //Adicionando os cursos dinamicamente percorrendo o array. O método MAP é mais indicado para está fase
    const indice = chave+1 //Como a contagem do array inicia em zero, foi criada uma constante para definir o início em hum (1) e no lugar de colocar a palavra CHAVE na criação do ID abaixo, foi inserido a constante indice
    const novoElemento=document.createElement('div') //Criado na memória, falta informar onde será anexado
    novoElemento.setAttribute('id','c'+indice) //Adicionando o ID e pegando pelo índice do método MAP que percorre o valor do array para cada ID ter o seu valor de 0 à 6 
    novoElemento.setAttribute('class','curso c1') //Adicionando as classes
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})

/* OBS.: DESTA FORMA FOI ADICIONADA UMA ÚNICA DIV, ACIMA UTILIZO O MESMO PROCESSO COM O MAP PARA ADICIONAR TODOS OS ELELMENTOS DE UMA VEZ...
const novoElemento=document.createElement('div') //Criado na memória, falta informar onde será anexado
novoElemento.setAttribute('id','c7') //Adicionando o ID 
novoElemento.setAttribute('class','curso c1') //Adicionando as classes
novoElemento.innerHTML='ReactNative' //Inserindo um valor na DIV
*/

//Adicionando os cursos dinamicamente percorrendo o array
//caixa1.appendChild(novoElemento)