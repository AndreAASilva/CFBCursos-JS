/* Usando o operador THIS dentro de funções em Javascript */

// O uso do THIS quando utilizado na função faz referência a um operador da função

function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    //console.log(nome)
    //console.log(nota)

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)

    }
}

const al1 = new aluno('André', 100)
al1.dados_arrow()


function cores(cor1,cor2,cor3,cor4){
    this.cor1=cor1
    this.cor2=cor2
    this.cor3=cor3
    this.cor4=cor4
    console.log(cor1)
    console.log(cor2)
    console.log(cor3)
    console.log(cor4)
}

cores('Amarelo','Verde','Azul','Preto')

