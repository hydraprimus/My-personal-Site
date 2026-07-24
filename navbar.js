const hobbiesButton = document.querySelector('#hobbies')
const contactButton = document.querySelector('#contact')
const homeButton = document.querySelector('#home')

hobbiesButton.addEventListener('click', () => {
    window.location.href = 'hobbies.html'
})

homeButton.addEventListener('click', () => {
    window.location.href = 'index.html'
})

contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html'
})