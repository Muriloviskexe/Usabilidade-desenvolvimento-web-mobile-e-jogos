const Pessoa = (nome, sobrenome, idade) => {
    const obj = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    
        fazNiver: function()    {
            obj.idade ++
        },
    
        imprime: () => {
            console.log(`${obj.nome} ${obj.sobrenome} tem ${obj.idade}`)
        }
    }
    return obj
}

export default Pessoa