var pessoa = {
    nome: "Tayná",
    idade: 27,
    altura: 1.60,
}
var pessoa2 ={
    nome: "Victoria",
    idade: 23,
    altura: 1.62,
}
var pessoa3 ={
    nome: "Ricardo",
    idade: 20,
    altura: 1.80,
}

if(pessoa.altura < pessoa2.altura && pessoa.altura < pessoa3.altura && pessoa.idade > pessoa2.idade && pessoa3.idade > pessoa.idade){
    console.log("essa pessoa é mais velha: ", pessoa.idade, " essa pessoa é a mais alta: ", pessoa.altura)
}else if(pessoa2.altura < pessoa.altura && pessoa2.altura < pessoa3.altura && pessoa2.idade > pessoa.idade && pessoa2.idade > pessoa3.idade){
    console.log("essa pessoa é mais velha: ", pessoa.idade, " essa pessoa é a mais alta: ", pessoa.altura)
}

