/* Parando a propagação do evento com o método stopPropagation */


const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]


//Criando evento de click na caixa principal
caixa1.addEventListener('click', (evento01)=>{
  console.log(evento01)
})


cursos.map((el)=>{ //Mapeando os elementos com a classe .curso que são os botões com os nomes dos cursos
    el.addEventListener('click',(evento02)=>{ //Adicionando evento de click nos botões
        evento02.stopPropagation() //Parando evento de clique nos botões
    })
})


//É inserido o evento de clique inicialmente e depois cliado outra regra para os botões e poder remover o evento deles já que estão dentro c caixa princiapl