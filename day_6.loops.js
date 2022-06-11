for (let i = 0; i <= 5; i++) {
    console.log(i)
}
for (let i = 5; i >= 0; i--) {
    console.log(i)
}
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// ------------------------------------------> while loop and do while loop <-------------------------------------------------


let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

i = 0
do {
    console.log(i)
    i++
} while (i <= 5)


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

for (let i = 0; i <= 7; i++) {
    console.log('#'.repeat(i))
}
console.log('${i}\t${i ** 2}\t${i ** 3}')
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}

const alp = ['a','b','c','d','e','f']
let pass = []
for(let i=0;i<6;i++){
    let randomNUM= Math.floor(Math.random()*alp.length)
    pass.push(alp[randomNUM])
}
console.log(pass.toString().replace(/,/gi,''));