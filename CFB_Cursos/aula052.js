//Aprendendo sobre ARRAY em Javascript #P1

//Array é um coleção de dados, ou variáveis. 

/*
const caixa = document.querySelector('#caixa')

let cores = ['Azul','Verde','Vermelho',['claro','escuro','médio']] //Detro do Array podemos adicionar outro array

let cursos = ['HTML','CSS','Javascript',cores] //Array cores adicionado ao cursos / Para tratar, devemos informar a posição dete array e a posição do elemento que desejamos trabalhar

cursos[0] = 'C++' //Alterando um valor no array indormando a posição
cursos[1] = 'Python' //Alterando um valor no array indormando a posição
cursos.push('HTML','C#') //Adicionando elementos no final array
cursos.pop() //Remove o último elemento do array / Para remover outros elementos, devemos repetir o comando pop()
cursos.unshift('.Net') //Adicionando elementos no início do array
cursos.shift() //Retira elementos do início do array


console.log(cursos)
console.log(cursos[3][1])

//Imprimindo o valor médio que está dentro de dois arrays
console.log(cursos[3][3][2]) //Informado a posição do array cores, depois a posição array dentro de cores e por último a posição do elementos que desejamos realmente utilizar para a impressão nesse caso


cursos.map((el, i)=>{
    let p = document.createElement('p')
    caixa.appendChild(p)
    p.innerHTML=' - Posição: '+ i + ' Elemento: ' +el
    
})

*/

//Populando ARRAYS com funções em Javascript #P2

//Continuação da aula anterior sobre o uso de arrays, bloco superior comentado para melhor entendimento da aula atual

let valores = [1,2,3,4,5,6]
let op = [
    (val)=>{
        let res = 0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res = 1
        for(v of val){
            res*=v
        }
        return res
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

//console.log(op[0](valores))
op[2](valores)