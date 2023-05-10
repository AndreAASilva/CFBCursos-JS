/* Comando condicional IF e IF ELSE em Javascript */

let num = 51

if(num > 10){
    console.log('Numeral maior que 10')
        if(num > 50){
            console.log('Numeral maior que 50')
        }
}else if(num > 5){
    console.log('Numeral está entre 6 e 10')
}else{
    console.log('Numeral menor ou igual 5')
}

console.log('FIM DO PROGRAMA')

let energia = 71
let clima = 'sol'

if(energia > 70 && clima == 'sol'){
    console.log('Eu vou a praia')
}else{
    console.log('Eu vou ao cinema')
}