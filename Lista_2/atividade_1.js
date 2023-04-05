var salarioLarissa = 2000;
var salarioMaria = 5000;
var salarioJonas = 1000;
var salarioFrancisco = 3000;
var salarioJoao = 2500;

var reajuste = 10;

var valorReajusteLarissa = salarioLarissa * (reajuste / 100);
var salarioReajustadoLarissa = salarioLarissa + valorReajusteLarissa;

var valorReajusteMaria = salarioMaria * (reajuste / 100);
var salarioReajustadoMaria = salarioMaria + valorReajusteMaria;

var valorReajusteJonas = salarioJonas * (reajuste / 100);
var salarioReajustadoJonas = salarioJonas + valorReajusteJonas;

var valorReajusteFrancisco = salarioFrancisco * (reajuste / 100);
var salarioReajustadoFrancisco = salarioFrancisco + valorReajusteFrancisco;

var valorReajusteJoao = salarioJoao * (reajuste / 100);
var salarioReajustadoJoao = salarioJoao + valorReajusteJoao;

console.log("Larissa ganha R$" + salarioLarissa + ", com reajuste de 10% passa a ganhar R$" + salarioReajustadoLarissa);
console.log("Maria ganha R$" + salarioMaria + ", com reajuste de 10% passa a ganhar R$" + salarioReajustadoMaria);
console.log("Jonas ganha R$" + salarioJonas + ", com reajuste de 10% passa a ganhar R$" + salarioReajustadoJonas);
console.log("Francisco ganha R$" + salarioFrancisco + ", com reajuste de 10% passa a ganhar R$" + salarioReajustadoFrancisco);
console.log("João ganha R$" + salarioJoao + ", com reajuste de 10% passa a ganhar R$" + salarioReajustadoJoao);

