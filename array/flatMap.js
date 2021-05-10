const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Jailson',
        nota: 8.1
    }, {
        nome: 'Jessica',
        nota: 9.3
    }]
},{
    nome: 'Turma 2',
    alunos: [{
        nome: 'Gabriela',
        nota: 8.9
    },{
        nome: 'Paulo Guina',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)