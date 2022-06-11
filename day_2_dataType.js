
console.log('math stuff------------------------------')
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


console.log('Strinig--------------------------------')

let space = ' '
let firstName = 'Fuad'
let lastName = 'Hassan'
let country = 'USA'
let city = 'PA'
let language = 'JavaScript'
let job = 'Student'
let age = 19
let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
console.log()
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log()
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log()
// Template Literals (Template Strings)
console.log('Sum of 2 and 3 is 7')
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)
console.log(`Sum of ${a} and ${b} is ${a+b}`)

/*
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. Im learning ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
*/

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}`
console.log(personInfoTwo)
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. Im learning ${language}.`
console.log(personInfoThree)

// let a = 2
// let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)


// let firstName = 'Fuad'
// let lastName = 'Hassan'
// let fullName = firstName + space + lastName
console.log(fullName.length)
console.log(firstName.length)
console.log(lastName.substr(2,3))
console.log(lastName.substring(2,3))

console.log('Hello'.toUpperCase())
console.log('HEllO'.toLowerCase())

console.log('JavaScript'.substr(0,4))
console.log('JavaScript'.substring(0,4))

let string1 = '30 Days Of JavaScript'
console.log(string1.slice(3,7))
console.log(string1.split(''))
console.log(string1.split(' '))
console.log(string1.split('a'))

let string2 = '   30 Days Of JavaScript   '
console.log(string2.trim())

let string3 = '30 Days Of JavaScript'
console.log(string3.includes('Days'))     // true
console.log(string3.includes('days'))     // false - it is case sensitive!
console.log(string3.includes('Script'))   // true
console.log(string3.includes('script'))   // false
console.log(string3.includes('java'))     // false
console.log(string3.includes('Java'))

let string4 = '30 Days Of JavaScript'
console.log(string4.replace('JavaScript', 'Python')) // 30 Days Of Python

let country1 = 'Finland'
console.log(country1.replace('Fin', 'Noman'))

console.log(string4.charAt(5));

let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.search('love'))          // 2
console.log(string5.search(/javascript/gi)) // 7

let string6 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string6.match('love'))
let pattern = /love/gi
console.log(string6.match(/love/gi))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// let firstName = 'Asabeneh'      // string
// let lastName = 'Yetayeh'        // string
// let country = 'Finland'         // string
// let city = 'Helsinki'           // string
// let age = 250                   // number, it is not my real age, do not worry about it
// let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love'

console.log(string.search('love'))          // 2


let string_because = 'You cannot end a sentence with because because because is a conjunction'
console.log(string_because.match(/because/gi));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let newline = sentence.replace(/$/gi,'').replace(/@/gi,'').replace(/#/gi,'').replace(/%/gi,'').replace(/&/gi,'').replace(/;/gi,'')
console.log(newline)

