const btnAdicao = document.querySelector('#adicao')
const btnSubtracao = document.querySelector('#subtracao')
const btnMultiplizacao = document.querySelector('#multiplicacao')
const btnDivisao = document.querySelector('#divisao')


const primeiroValor = document.getElementById('valor01')
const segundoValor = document.getElementById('valor02')
const resultado = document.getElementById('resultado')

btnAdicao.addEventListener('click',()=>{
    const val1 = Number(primeiroValor.value)
    const val2 = Number(segundoValor.value)
    resultado.value = val1 + val2
})

btnSubtracao.addEventListener('click',()=>{
    const val1 = Number(primeiroValor.value)
    const val2 = Number(segundoValor.value)
    resultado.value = val1 - val2
})

btnMultiplizacao.addEventListener('click',()=>{
    const val1 = Number(primeiroValor.value)
    const val2 = Number(segundoValor.value)
    resultado.value = val1 * val2
})

btnDivisao.addEventListener('click',()=>{
    const val1 = Number(primeiroValor.value)
    const val2 = Number(segundoValor.value)
    resultado.value = val1 / val2
})