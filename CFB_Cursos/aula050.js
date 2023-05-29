//Aprendendo o método REDUCE em Javascript

//O reduce é um método que permite fazer uma redução do array de um código especificado pelo programador

const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5,6]
//const elementos_array = ['André', 'Anderson', 'Alves', 'Silva']
let ant=[]
let atu=[]
let dobro=[]
let divisor=[]
p_array.innerHTML='['+elementos_array+']'

btnReduzir.addEventListener('click', (evt)=>{
    /*
    resultado.innerHTML = elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        divisor.push(atual/2)
        return atual+anterior
    })
    
    resultado.innerHTML+='<br/> Valor Anterior: '+ant+'<br/> Valor Atual: '+atu+'<br/> Dobro: '+dobro+'<br/> Divisor: '+divisor
    */

    resultado.innerHTML = elementos_array.reduce((anterior,atual)=>{
        
        res = atual - anterior
        return res
    })
    
    if(res % 2 === 0){
        resultado.innerHTML+='<br/>O valor do retorno é PAR<br/>'
    }else{
        resultado.innerHTML+='<br/>O valor é ÍMPAR'
    }
    
})