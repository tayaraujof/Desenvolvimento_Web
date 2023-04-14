
var artista1 = {
    nome: "Lady Gaga",
    anoLancamento: 2008,
    melhoresMusicas: ["Bad Romance", "Shallow", "Blood Mary"],
    integrantes: [
      {
        nomeCompleto: "Stefani Germanotta",
        paisOrigem: "Estados Unidos",
        idade: 37
      },
    ],
    estilo: "Pop"
  }
  
 var artista2 = {
    nome: "The Weeknd",
    anoLancamento: 2016,
    melhoresMusicas: ["Starboy", "I Fel It Coming", "Die For You"],
    integrantes: [
      {
        nomeCompleto: "Abel Tesfaye",
        paisOrigem: "Canadá",
        idade: 33
      },
    
    ],
    estilo: "Pop"
  }
  
  var artista3 = {
    nome: "Ariana Grande",
    anoLancamento: 2014,
    melhoresMusicas: ["Love Me Harder", "Problem", "Break Free"],
    integrantes: [
      {
        nomeCompleto: "Ariana Grande",
        paisOrigem: "Estados Unidos",
        idade: 29
      }
    ],
    estilo: "Pop"
  }
  
  var database = []
  
  database.push(artista1)
  database.push(artista2)
  database.push(artista3)
  console.log(database)
  
  
  database.sort()
  console.log(database)
  
  
  database.pop()
  console.log(database)
  