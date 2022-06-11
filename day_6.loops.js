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


