//Aulas 48 e 49

//Every vai verificar se todos os elementos do array estão de acordo com a pesquisa feita, se sim, ele retorna true, caso não, ele retorna false

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

//const elementos_array = [21,20,19,17,21,19,19]
const elementos_array = [18,18,18,17,21,18,18]

p_array.innerHTML = '['+elementos_array+']'
/*
btnVerificar.addEventListener('click',(evt)=>{
    
    elementos_array.every((e,i,a)=>{
        if(e>=18){
            resultado.innerHTML='OK'
        }else{
            resultado.innerHTML='Array não conforme na posição '+i
        }
        return e>=18
    })
})
*/
/*
btnVerificar.addEventListener('click',(evt)=>{
    elementos_array.every((e,i)=>{
        if(e==0){
            resultado.innerHTML='Elemento encontrado na posição '+i
        }else{
            resultado.innerHTML='Elemento não localizado'
        }

        return e!=0
    })
})
*/


//Complemento da aula anterior, o método every() verifica se todos os elementos do array estão no padrão solicitado, porém o método some dá um OK quando pelo menos um dos valores do array coincidir com o solicitação. 


btnVerificar.addEventListener('click',(evt)=>{
    elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML='Array menor que 18 localizado na posição '+i
        }else{
            
            resultado.innerHTML='Array maior que 18 localizado na posição '+i
        }
        return e!=18

    })
})