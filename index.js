const toggleBtn = document.querySelector('.toggle-nav')
const hiddenNav = document.querySelector('.hidden-nav')

toggleBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('shownav')
} )