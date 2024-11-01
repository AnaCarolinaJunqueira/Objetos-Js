//---------- Arrays pt. 2 ----------

//let dia = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

//console.log(dia[1])

//.length <--- mostra quantos elementos tem na array
//console.log(dia.length)

//let sobre = ["Vinicius", 24, "Salvador"]

//console.log(sobre[1])

//let filmes = ["Interestelar", "Tropa de Elite", "Contato", "Jogo da Imitação", "o Alto da Compadecida"]

//console.log(filmes)

//filmes.push("Psicopata Americano")
//console.log(filmes)

//filmes.unshift("O Circulo")
//console.log(filmes)

//.pop <--- remove o último item da array
//filmes.pop()
//console.log(filmes)

//.shift <--- remove o primeiro item da array
//filmes.shift()
//console.log(filmes)

//---------- Objetos ----------

//[] <--- Arrays
//{} <--- Objetos

//const filme = {
//    nome: "Corra",
//    lancamento: 2017,
//    tomatometer: 98,
//    genero: "suspense"
//}

//console.log(filme.genero)

//adiciona propriedade
//filme.bilheteria = 300
//console.log(filme)

//deleta propriedade
//delete filme.avaliação
//console.log(filme)

//array de objetos

const alunos = [
    {
        nome: "Luccas",
        idade: 22,
        cor: "Azul"
    },
    {
        nome: "Kairo",
        idade: 24,
        cor: "Verde"
    },
    {
        nome: "Ricardo",
        idade: 47,
        cor: "Vermelho"
    }
]

console.log(alunos[0].nome)

alunos[1].cidade = "Salvador"
console.log(alunos)

alunos.push({nome: "Marina", idade: 25, cor: "Amarelo"})
console.log(alunos)

delete alunos[0]
console.log(alunos)