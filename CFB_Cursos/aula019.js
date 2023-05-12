/* Entenda as declarações BREAK e CONTINUE em Javascript */

/* Break gera uma interrupção no programa

Continue para apenas aquela interação e pula pra próxima até que encontre outro continue*/

let n = 0
let max = 30
let pares = 0 //Variável para testar o CONTINUE

//Break neste caso parou a execução do programa quando atingiu o valor solicitado no IF
/*
while(n < max){
    console.log(n)
    if(n > 11){
        break
    }
    n++
}
*/

//Uso do CONTINUE

//Operação realizada sem o uso do CONTINUE
/*
for(let i = n; i < max; i++){
    if(i%2==0){
        console.log(i) 
        pares++
    }
    

}
*/

//Mesma operação realizada com o CONTINUE

for(let i = n; i < max; i++){
    console.log(i)
    if(i%2!=0){ //Neste caso ele vai dar os números ímpares
        continue //Aqui ele vai identificar o ímpar e seguir
    }
    pares++ //Removendo o incremento de dentro do IF junto com o CONTINUE ele vai me dar a mesma quantidade de pares que o código acima sem o CONTINUE e imprimir os valores ímpares
}

console.log('A quantidade de pares é: ' + pares)
console.log('Fim do programa')