const person1 = {}
console.log(person1)

const person = {
    firstName: 'Fuad',
    lastName: 'Hassan',
    age: 19,
    university: 'Temple University',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person)
// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
// retun full name using the function from the object 
console.log(person.getFullName())

// adding new kwy to an object 

person.nationality = 'Bangledesh'
person.country = 'USA'
person.title = 'Student'
console.log(person)
person.skills.push('Flask')
console.log(person)

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills2 = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe learn ${skills2}.`
    return statement
}
console.log();
console.log('-----------');
console.log(person)
// console.log(person.getPersonInfo());
const copyPerson = Object.assign({}, person)
console.log(copyPerson);
const keys = Object.keys(copyPerson)
console.log(keys)
const skills = Object.values(person.skills)
console.log(skills)
console.log('-----------');
const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('name'))

console.log('-------------------------------');
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

console.log(users);

const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
]);
console.log(result);

const r = Object.entries(users)
console.log(r[0][1]['points']);

for (let i = 0; i < r.length; i++) {
    // console.log(typeof(r[i][1]['points']))
    if((r[i][1]['points']) >= 50){
        console.log(r[i][1]['points'])
        console.log(r[i])
    }
}

const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
    // _id: 'ghderc',
    //     username: 'Thomas',
    //     email: 'thomas@thomas.com',
    //     password: '123333',
    //     createdAt:'08/01/2020 10:00 AM',
    //     isLoggedIn: false
console.log(users2[0].username)

function signUP(users2,adding_user){
    for (let i = 0; i < users2.length; i++) {
        if((users2[i].username) != 'Fuad'){
            console.log(users2[i])
        }
    }
}
console.log(users2);