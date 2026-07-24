const hobbiesButton = document.querySelector('#hobbies')
const interestsButton = document.querySelector('#interests')
const contactButton = document.querySelector('#contact')
const homeButton = document.querySelector('#home')

hobbiesButton.addEventListener('click', () => {
    window.location.href = 'hobbies.html'
})

homeButton.addEventListener('click', () => {
    window.location.href = 'index.html'
})

interestsButton.addEventListener('click', () => {
    window.location.href = 'interests.html'
})

contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html'
})