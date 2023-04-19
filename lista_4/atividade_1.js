var contaCorrente = {
    saldo: 5000,
    faturaAtual: 2000,
    creditoDisponivel: 1000,
    extrato: {
      entrada: [
        { data: '2023-01-02', valor: 65 },
        { data: '2023-01-08', valor: 100 },
        { data: '2022-01-12', valor: 172 }
      ],
      saida: [
        { data: '2023-01-02', valor: 80, descricao: 'Restaurante' },
        { data: '2023-01-06', valor: 60, descricao: 'Cinema' },
        { data: '2023-01-09', valor: 55, descricao: 'Mercado' }
      ]
    },
    exibirExtrato: true,
  };
  
  if (contaCorrente.saldo >= contaCorrente.faturaAtual) {
    console.log('Você possui saldo para pagar a fatura atual');
  } else {
    console.log('Você não possui saldo suficiente para pagar a fatura, experimente pegar crédito para conseguir pagar, imprima o valor de crédito disponível: ' + contaCorrente.creditoDisponivel);
  }
  
  if (contaCorrente.exibirExtrato){
    console.log(contaCorrente.extrato)
  }
    
    
