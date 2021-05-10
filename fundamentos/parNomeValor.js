// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Chama no reskein'
    return saudacao
}

//Objetos são grupos aninhados de de nome/valor
const cliente = {
    nome: 'Vinicius',
    idade: 20,
    peso: 68,
    endereco: {
        logradouro: 'relens',
        numero: 1337
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)