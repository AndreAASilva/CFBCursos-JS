//Coleção SET
//Não permite entradas duplicadas de elementos, diferente do array que permite

//Necessário instanciar com o operador new como a coleção Map

//A Utilização do SET é a mesma do MAP

const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica1', 'musica boa', 'musica10'])

musicas.add('Música legal')
musicas.add('musica1')
musicas.add('musica boa')
musicas.add('musica nova')
musicas.add('Música de qualidade')

musicas.delete('musica boa')

//Obs.: se chamar o innerHTML apenas com o símbolo de = ele retorna o último elemento, inserindo o + ele retorna a lista commpleta
/*
musicas.forEach((el)=>{
    
    caixa.innerHTML += el + '<br/>'
})
*/


for(let m of musicas){
    console.log(m)
    caixa.innerHTML += m+'<br/>'
}

caixa.innerHTML += 'O tamanho da lista é: '+musicas.size



console.log(musicas)





