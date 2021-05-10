console.log(Math.ceil(665.1))

const obj1 = {}
obj1.nome = 'Jailson Mendes'
//obj1['nome'] = Paulo Guina
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Kauan Desu')
const obj3 = new Obj('Demacol')
console.log(obj2.nome)
console.log(obj3.nome)