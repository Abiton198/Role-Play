/*making the toggle bar slide ==linked to open-nav class in css */

const navToggle = document.querySelector(".nav-toggle") //toggle bar
const navLinks = document.getElementsByClassName(".nav__link")  //


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

/*when a link is opened the toggle bar disappers on the link-page of every page*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
document.body.classList.remove('nav-open')
    })
})

/*
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})*/