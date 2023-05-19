//Pegando os elementos do HTML
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
//Criando uma constante para todas as classes curso e transformando em array para aumentar o leque de funções para uso
const todosCursos = [...document.querySelectorAll('.curso')]

//Add evento de clique na constante 
todosCursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const curso = evt.target //Criada constante nova onde vai marcar o evt com o target(alvo)
        curso.classList.toggle('selecionado') //toggle verifica se há o elemento, se não, ele adiciona, se sim ele remove
    })
})

//Criando o evento de clique no botão
btn.addEventListener('click',()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')] //Criada nova constante que vao receber todos os botões selecionados
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]

    //Criando o evento que vai enviar tudo que estiver selecionado para a caixa2
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el) //caixa2 vai chamar - anexar o filho a caixa 2 - o filho é o el (cursosSelecionado)
        
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

