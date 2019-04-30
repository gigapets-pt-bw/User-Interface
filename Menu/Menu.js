const toggleMenu = () => {
    menuOptionsSelector.classList.toggle('menuOptions--open')
}

const menuOptionsSelector = document.querySelector('.menu')

const menuButtonSelector = document.querySelector('.menu-button')

menuButtonSelector.addEventListener('click', toggleMenu);