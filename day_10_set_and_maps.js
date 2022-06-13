// const companies = new Set()
// console.log(companies);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOflanguages = new Set(languages)
console.log(setOflanguages);

//languages.forEach((language) => console.log(language))

for (let language = 0; language < setOflanguages.size; language++) {
    console.log(language)
}

for (const language of setOflanguages) {
    console.log(language)
}

const companies = new Set() // creating an empty set
console.log(companies.size) // 0
companies.add('google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
console.log(companies)
console.log(companies.size)
console.log(companies.keys())
console.log(companies.values())
console.log(companies.has('google'))

companies.delete('Oracle')

console.log(companies)
console.log(companies.size)
console.log(companies.keys())
console.log(companies.values())

companies.clear()
console.log(companies)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C)



countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
console.table(map)


const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'))
console.log(countriesMap.get('Sweden'))

console.log(countriesMap.has('Finland'))
console.log(countriesMap.has('Helsinki'))
console.log(countriesMap.keys())
console.log(countriesMap.values())


for (const [country, city] of countriesMap) {
    console.log(country, city)
}

console.log()
console.log()

console.log('Exercises:Level 1')
const a1 = [4, 5, 8, 9]
const b1 = [3, 4, 5, 7]
const countries2 = ['Finland', 'Sweden', 'Norway']

set_0_10 = new Set()
console.log(set_0_10)

for(let i=0;i<=10;i++){
    set_0_10.add(i)
}
console.log(set_0_10)
set_0_10.clear()
console.log(set_0_10)

let A1 = new Set(a)
let B1 = new Set(b)
let c1 = a1.filter((num)=> !B1.has(num))
console.log(c1)
let c2 = a1.find((num)=> B1.has(num))
console.log(c2)
let c3 = a1.filter((num)=> B1.has(num))
console.log(c2)

const CL =   [
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]
  console.log(CL)
  console.log(typeof(CL))
  setofCL = new Set(CL)
  console.log(setofCL)
  


