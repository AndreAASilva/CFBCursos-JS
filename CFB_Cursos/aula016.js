/* Loops FOR IN e FOR OF em Javascript */

/*Variações do FOR*/

/*
let num = [10,20,30,40,50]

//Aqui ele vai me informar as posições dos elementos
for(let i = 0; i < num.length; i++){
    console.log(i)
}

//Aqui ele vai informar os valores do elementos
for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

//Com o FOR IN desta forma ele vai me informar as posições dos elementos
for(n in num){
    console.log(n)
}

//Com o FOR IN desta forma ele vai me informar os valores dos elementos
for(n in num){
    console.log(num[n])
}

//Com o FOR OF desta forma ele vai me informar os valores dos elementos
for(n of num){
    console.log(n)
}
*/

/*
const objs = document.getElementsByTagName('div')

for(o of objs){
    console.log(o.innerHTML='Aula de FOR IN e FOR OF')
}

for(o in objs){
    console.log(objs[o].innerHTML)
}

for(o in objs){
    console.log(o)
}
*/
const nome = ['André', 'Anderson', 'Alves', 'Silva', 'Carlos', 'Andreza']


/*
for(i in nome){
    console.log(nome[i])
}

for(i of nome){
    console.log(i)
}
*/


for(i of nome){
    if(i == 'André'){
        console.log('Nome: ' + i +' localizado')
    }
}

