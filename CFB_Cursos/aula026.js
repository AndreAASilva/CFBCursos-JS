/* Funções dentro de funções em Javascript. Funções aninhadas */

//

const soma = (...valores) => {
    const somar = val =>{
        let res = 0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)
}

console.log(soma(10,10,10,10,10,10,10))

let tam = 10

for(let i = 0; i < tam; i++){
    console.log(i)

}