var idade = prompt("Digite sua idade")

if (idade >= 18){
    console.log('É maior de idade.')
}else if (idade < 18 && idade > 0){
    console.log ('É menor de idade.')
}else{
    console.log('Erro digite uma idade válida.')
}