//Método Toggle para gerenciar Classes CSS em Javascript

const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = document.querySelectorAll('.curso')
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0


const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso

    //Trabalhando com o método toggle 

    novoElemento.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('.selecionado')
    })
    
    return novoElemento
}


cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

//Removendo os elementos

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })

    return radioSelecionado[0]
}


//Selecionando os elementos e com try e catch(gerar exceção)
btnCursoSelecionado.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert('Curso selecionado: '+ cursoSelecionado)
    }catch(ex){
        alert('Selecione um curso')
    }
    
    
})

//Utilizando o remove() para remover os elementos selecionados
btnRemoverCurso.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }else{
        alert('Selecione um curso')
    }
    
})

//Criados eventos para o botões onde serão adicionados novos cursos e utilizando funções acima criadas nas aulas anteriores junto com constantes tanto novas como já criadas em aulas anteriores também.

btnAdicionarNovoCursoAntes.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado) //Método insertBefore cirado para inserir o curso antes do clicado no programa, dentro dos parâmetros primeiro inserimos a constante com o nome do curso novo e depois a constante selecionada para ele identificar onde o curso novo será posicionado 
        }else{
            alert('Digite o nome do curso')
        }
    }catch(ex){
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling) //Como não há o método para inserir um curso depois, apenas antes com o insertBefore(), utilizamos a lógica de chamar um irmão da classe nesse caso, a frente de onde será clicado para ao inserir, o código posicione o curso novo antes do irmão.
        }else{
            alert('Digite o nome do curso')
        }
    }catch(ex){
        alert('Selecione um curso')
    }
})

//parentNode
//childNodes[nodenumber]
//firstChild
//lastChild
//nextSibling
//previousSibling