//Entendendo o método FILTER em Javascript #P1
//Prática com o método FILTER em Javascript #P2

//Vai percorrer um array e permitir uma filtragem retornando somente determinados elementos desse array, apenas os elementos que queremos do array

//Podemos ter uma função que opera os elementos separados

/*
const idade = [15,21,30,17,18,44,12,50]

const maior = idade.filter((val)=>{
    if(val >= 18){
        return val
    }
})

const menor = idade.filter((val)=>{
    if(val < 18){
        return val
    }    
})

console.log(maior)
console.log(menor)
*/

const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = document.querySelectorAll('.curso')
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')

cursos.map((el,chave)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el
    
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener('click', (evt)=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((ele,i,arr)=>{
        
        return ele.checked 
    })

    
    radioSelecionado = radioSelecionado[0] //Pegando o rádio selecionado da posição zero
    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent //Pegando a string da DIV
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert('O Conteúdo selecionado é: '+ cursoSelecionado) // Com a forma que foi extraído a string podemos utilizar para por exemplo fazer a impressão de um alert
    console.log(todosRadios)
    console.log(radioSelecionado)
    console.log(cursoSelecionado)
    
})

parentNode
childNodes[nodenumber]
//firstChild
//lastChild
//nextSibling
//previousSibling