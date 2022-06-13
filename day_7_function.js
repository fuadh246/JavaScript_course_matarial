function addNUM(num1, num2) {
    return num1 + num2
}
console.log(addNUM(1, 3))

function printFulname() {
    firstname = 'Fuad'
    lastname = 'Hassan'
    fullname = firstname + ' ' + lastname
    console.log(fullname)
}
printFulname()

let squaredNum = (function (n) {
    return n * n
})(10)

console.log(squaredNum)

const square = n =>{
    return n*n
}
console.log(square(5))


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))

function showDateTime(){
    const now = new Date()
    console.log(now.toISOString())
}
showDateTime()