

function sayHello() {
    console.log('Hello')
}
// setInterval(sayHello, 1000)

function sayHello() {
    console.log('Hello')
}
// setTimeout(sayHello, 1000)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'India']
countries.forEach((element) => console.log(element.toUpperCase()))

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// Filter: Filter out items which full fill filtering conditions and return a new array.


const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
console.log(scores[0].name)
const scoresGreaterEighty = scores.filter((scores) => scores['score'] > 80)
// or ->  scoresGreaterEighty = scores.filter((scores) => scores.score >80)
console.log(scoresGreaterEighty);


// find
const score = scores.find((user) => user.score > 80)
console.log(score)

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users)

