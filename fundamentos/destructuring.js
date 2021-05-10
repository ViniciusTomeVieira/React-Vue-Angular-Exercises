//novo recurso ES2015
const pessoa = {
    nome: 'Jailson',
    idade: 24,
    endereco: {
        logradouro: 'rua delicia',
        numero: 0
    }
}
const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const{urso,piludo = true} = pessoa
console.log(urso,piludo)

const{endereco: {logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)