
// ------------------------ connected to getting_element.html file ---------------------

const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)
for (let tittle in allTitles) {
  console.log(allTitles[tittle])
}
const first_title = document.getElementById('first-title')
console.log(first_title)
// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title
const allTitle = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTitle.length) // 4
for (let i = 0; i < allTitle.length; i++) {
  console.log(allTitle[i])
}
allTitle.forEach((tittle) => console.log(tittle))

const titles = document.querySelectorAll('h1')
titles.forEach((tittle) => console.log(tittle))
titles[3].className = 'title'
titles[3].id = 'fourth-tittle'
// titles[3].innerText = 'Fourth title'

titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
titles[3].classList.add('title', 'header-title')
titles[3].classList.remove('header-title')

titles[3].textContent = 'Fourth Title'
