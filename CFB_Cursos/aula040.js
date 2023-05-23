//Removendo elementos do DOM em Javascript com removeChild

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((el, chave)=>{ 
    const indice = chave+1 
    const novoElemento=document.createElement('div') 
    novoElemento.setAttribute('id','c'+indice) 
    novoElemento.setAttribute('class','curso c1') 
    novoElemento.innerHTML=el

    //Foi criando um novo elemento para melhorar o visual do botão
    const btn_lixeira=document.createElement('img')
    btn_lixeira.setAttribute('src', '/imgs/lixeira.png')
    btn_lixeira.setAttribute('class', 'btn_lixeira')
    btn_lixeira.addEventListener('click', (evt)=>{ //Criado o evento após a criação da classe e inclusão da imagem e na função foi feita a opção de remover o filho de caixa1
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira) //Anexado o filho em novoElemento que contam as classes que serão removidas ao clicar nelas

   
    caixa1.appendChild(novoElemento)
})

