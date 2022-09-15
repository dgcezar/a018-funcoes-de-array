const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (lista) => {
    lista.nome = objeto.nome.toUpperCase()
    lista.profissao = objeto.profissao.toUpperCase()
    lista.username = objeto.username.toUpperCase()
    lista.senha = objeto.senha.toUpperCase()
    return lista
}

console.log(caixaAlta(objeto));

const textoCorrido = (lista) => {
    return `nome: ${lista.nome}, profissao: ${lista.profissao}, username: ${lista.username}, senha: ${lista.senha}`
}

console.log(textoCorrido(objeto));

const callback1 = (objeto, caixaAlta) => {
    
}