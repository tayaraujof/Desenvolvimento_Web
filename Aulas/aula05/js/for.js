var tarefas = [
    'lavar louças',
    'lavar roupas',
    'fazer comida',
    'lavar banheiro',

]
var numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i] == "lavar banheiro") {
        break
    }
    console.log(tarefas[i])
}

for (var x = 0; x < numero.length; x++) {
    if (numero[x] % 2 == 0) {
        console.log(`${numero[x]} é par`)
    } else {
        console.log(`${numero[x]} é impar`)
    }
}

for (var tarefa of tarefas) {
    console.log(tarefa)
}