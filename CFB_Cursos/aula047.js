//Método FIND para encontrar elementos em Arrays em Javascript 

const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = [/*10,5,8,2,9,15,20*/'André','ana']
p_array.innerHTML = '['+elementos_array+']'

btnPesquisar.addEventListener('click',(evt)=>{
    const ret = elementos_array.find((e,i)=>{
        if(e.toLowerCase()==txt_pesquisar.value.toLowerCase()){
            resultado.innerHTML= 'O resultado pesquisaro é: ' + e + ' na posição: '+ i
            return e
        }else{
            resultado.innerHTML= 'Valor não relacionado'
        }
    })

    
    console.log(ret)
})