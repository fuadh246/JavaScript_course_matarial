class Person {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)


class Person2 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const person10 = new Person2('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person20 = new Person2('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person10.getScore) // We do not need parenthesis to call a getter method
console.log(person20.getScore)

console.log(person10.getSkills)
console.log(person20.getSkills)

person10.setScore = 1
person10.setSkill = 'HTML'
person10.setSkill = 'CSS'
person10.setSkill = 'JavaScript'

person20.setScore = 1
person20.setSkill = 'Planning'
person20.setSkill = 'Managing'
person20.setSkill = 'Organizing'

console.log(person10.score)
console.log(person20.score)

console.log(person10.skills)
console.log(person20.skills)