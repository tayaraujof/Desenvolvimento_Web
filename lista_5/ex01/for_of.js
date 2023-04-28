const lista = [
    {
      nome: "Tayna",
      idade: 27,
      ehAdmin: true,
      email: "tayna@gatinha.com",
    },
    {
      nome: "Ricardo",
      idade: 21,
      ehAdmin: false,
      email: "ricardo@gatinha.com",
    },
    {
      nome: "Roberta",
      idade: 22,
      ehAdmin: true,
      email: "roberta@gatinha.com",
    },
    {
      nome: "Leandro",
      idade: 26,
      ehAdmin: false,
      email: "leandro@gatinha.com",
    },
    {
      nome: "Miguel",
      idade: 22,
      ehAdmin: false,
      email: "miguel@gatinha.com",
    },
  ];

  for (const pessoa of lista) {
    if (pessoa.ehAdmin) {
        console.log(
          `Olá ${pessoa.nome}! Bem vindo(a) você é admin do sistema, enviamos um email para ${pessoa.email} para você criar uma senha`
        );
      }else {
        console.log(
          `Olá ${pessoa.nome}! Bem vindo(a) você não é admin do sistema, enviamos um email para ${pessoa.email} para você criar uma senha`
        );
      }
  }