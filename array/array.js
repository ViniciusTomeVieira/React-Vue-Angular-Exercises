console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Jailsu','Mendes','Ana')
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Demacol')
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Jailson','Mendes','Kauan']
aprovados.splice(1,2,'Demacol','Paulo Guina')
console.log(aprovados)