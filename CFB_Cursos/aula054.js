//Aprendendo sobre a Coleção MAP em Javascript 

// A coleção MAP é diferente do método MAP
// A coleção MAP tem sempre que adicionar uma chave valor

const caixa = document.querySelector('#caixa')

let mapa = new Map()

//Obs.: Valores podem ser iguais, porém as chaves não - Primeiro mostramos a chave e depois o valor

//Inserindo as chaves e os valores 
mapa.set('curso','Javascript')
mapa.set(10,'CFB Cursos')
mapa.set(1,100)
mapa.set('canal', 200)

//Deletando um item da coleção
mapa.delete(1)

let pes = 1 //Criando variável para pesqusia
let res = ''
//Pesquisando pela variável - Verificando se tem o item na chave com o has
if(mapa.has(pes)){
    caixa.innerHTML = 'A chave tem o valor pesquisado: '+mapa.get(pes) //Obtendo o valor do item da chave com o get
}else{
    caixa.innerHTML = 'A chave não tem nenhum valor'
}

//Verificando o tamanho da coleção com o size
res+='<br/> O tamanho da coleção é: '+mapa.size
caixa.innerHTML += res
//console.log(mapa)

//Com o forEach utillizamos uma função para obter dados da coleção
mapa.forEach((e, i)=>{
    console.log(e,i)
})

//caixa.innerHTML = mapa.get('curso') //Imprimiu o 100 dentro da caixa

