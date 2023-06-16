//Orientação a objetos 
//Contructor é automaticamente chamado quando intanciamos um objeto dessa classe

class Carro{
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.ptipo = 'Esportivo'
            this.velmax = 300
        }else if(ptipo ==2){
            this.ptipo = 'Utilitário'
            this.velmax = 100
        }else if(ptipo ==3){
            this.ptipos = 'Passeio'
            this.velmax = 160
        }else{
            this.ptipo = 'Militar'
            this.velmax = 180
        }
    }

    //Podemos tranformar em propriedades para trabalhar de outras formas
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.ptipo
    }
    getVelMax(){
        return this.velmax
    }
    //Tranformando em um array
    getInfo(){
        return [this.nome,this.ptipo,this.velmax]
    }

    //SET pode ser utilizado para alterar o valor das propriedades
    setNome(nome){
        this.nome=nome
    }


    //No lugar de ter que imprimir os valores de forma separada como está embaixo, podemos utilizar o info:
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.ptipo}`)
        console.log(`Vel. Max.: ${this.velmax}`)
        console.log('-------------------')
    }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super Luxo', 2)
let c3 = new Carro('Bombadão', 4)
let c4 = new Carro('Carrega Tudo', 3)

//Alterando o valor com o uso do SET
c1.setNome('Nome alterado com o setNome')
console.log(c1.nome)


//Utilizando o info podemos chamar todos os itens juntos de cada carro ou todos conforme está abaixo:
/*
c1.info()
c2.info()
c3.info()
c4.info()
*/

/*Forma de chamar os itens de forma separada

console.log(c1.nome)
console.log(c1.ptipo)
console.log(c1.velmax)
console.log(c2.nome)
console.log(c3.nome)
console.log(c4.nome)
*/

//Chamando pelo método GET
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelMax())

//Retornando como array
console.log(c1.getInfo()[1])
console.log(c2.getInfo()[0])
