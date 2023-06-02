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
mapa.set('canal', 100)

console.log(mapa)

caixa.innerHTML = mapa.get('canal') //Imprimiu o 100 dentro da caixa

