// const array = Array()
// console.log(array)

// const arr = []
// console.log(arr)

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries



// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)


// allDATAtypeARRAY = [
// 'Asabeneh',
// 250,
// true,
// { country: 'Finland', city: 'Helsinki' },
// { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(allDATAtypeARRAY)
// console.log(allDATAtypeARRAY[3])

// countries2 = [
// 'Albania',
// 'Bolivia',
// 'Canada',
// 'Denmark',
// 'Ethiopia',
// 'Finland',
// 'Germany',
// 'Hungary',
// 'Ireland',
// 'Japan',
// 'Kenya'
// ] // List of countries

// console.log(countries2)      // -> all countries in array
// console.log(countries2[0])   //  -> Albania
// console.log(countries2[10])  //  -> Kenya

// let lastIndex = countries2.length - 1;
// console.log(countries2[lastIndex]) //  -> Kenya

// const eightEmptyValues = Array(9).fill('X') // it creates eight empty values
// console.log(eightEmptyValues)

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]

// const fruits2 = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits2.indexOf('banana')  // 0

// if(index === -1){
// console.log('This fruit does not exist in the array')  
// } else {
// console.log('This fruit does exist in the array')
// }
// // This fruit does exist in the array

// // we can use also ternary here
// index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// // let us check if an avocado exist in the array
// let indexOfAvocado = fruits2.indexOf('avocado')  // -1, if the element not found index is -1
// if(indexOfAvocado === -1){
// console.log('This fruit does not exist in the array')  
// } else {
// console.log('This fruit does exist in the array')
// }
// indexOfAvocado === -1 ? console.log('This fruit does not exist in the array.') : console.log('This fruit does exist in the array')
// // This fruit does not exist in the array

// const nums1_5 = [1,2,3,4,5]
// console.log(nums1_5.includes(5))
// console.log(nums1_5.includes(45))
// console.log(nums1_5.includes(2))

// const webTechs2 = [
// 'HTML',
// 'CSS',
// 'JavaScript',
// 'React',
// 'Redux',
// 'Node',
// 'MongoDB'
// ] 
// // List of web technologies

// console.log(webTechs2.includes('Node'))  // true
// console.log(webTechs2.includes('C'))     // false

// console.log("how to check if it's an aarry");
// const numbers2 = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers2)) 

// const number = 100
// console.log(Array.isArray(number))

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// //  numbers2 = [1, 2, 3, 4, 5]

// console.log(numbers2)
// numbers2.push(6)// --- add at the end of the array
// console.log(numbers2)
// numbers2.pop() // ---- remove the last element of the array
// console.log(numbers2)
// numbers2.shift() // -- remove one item from the beginning
// console.log(numbers2)
// numbers2.unshift(0)// add at the beginning of the array
// console.log(numbers2)
// numbers2.reverse() // reverse an array
// console.log(numbers2)
// numbers2.sort()
// console.log(numbers2)
// console.log(numbers2)
// console.log(numbers2)

console.log()
console.log()
console.log()
console.log('Exercise: Level 1')
console.log()

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const empty_array = []
const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers.length)
numbers.forEach(element => {
    if (element % 2 != 0){
        console.log(element)
    }
});

const mixedDataTypes = [
    'Fuad',
    'Hassan',
    19,
    true,
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

for (let index = 0; index < mixedDataTypes.length; index++) {
    const element = mixedDataTypes[index];
    console.log(element)
}
mixedDataTypes.forEach(element => {
    console.log(element)
});

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sum = 0
numbers.forEach(element => {
    sum += element
});
console.log(sum)



