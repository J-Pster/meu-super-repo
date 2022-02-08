let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
};

console.log('O livro favorito de %s %s se chama %s',leitor.nome,leitor.sobrenome,leitor.livrosFavoritos[0].titulo)
console.log('Julia tem %s livros favoritos.',leitor.livrosFavoritos.length)