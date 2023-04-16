var pessoa = {
    nome: "Tayná",
    idade: 27,
}
var pessoa2 ={
    nome: "Victoria",
    idade: 23,
}
var pessoa3 ={
    nome: "Ricardo",
    idade: 20,
}

if(pessoa.idade > pessoa2.idade && pessoa.idade >pessoa3.idade){
    console.log("a idade maior é : ", pessoa.idade )
}else if(pessoa2.idade > pessoa.idade && pessoa2.idade > pessoa3.idade){
    console.log(" a idade maior é: ", pessoa2.idade)
}else{
    console.log(" a maior idade é:", pessoa3.idade)
}
