const btn = document.querySelector('button')

//FUNCTIONS
function soundClick() {
    let audio = new Audio("click-one.mp3")
    audio.play()
}
function soundClickTwo() {
    let audio = new Audio("click-two.mp3")
    audio.play()
}
const darkMode = () => {
    const body = document.querySelector('body')
    const sun = document.querySelector('i')
    const mode = document.querySelector('h1')
    body.classList.toggle('darkMode')

    if(body.classList.contains('darkMode')) {
        sun.className = 'fas fa-moon fa-3x'
        mode.textContent = "Dark Mode"
        sun.classList.add('open')
        soundClick()        
        localStorage.setItem('theme', 'dark')
    } else {
        sun.className = 'fas fa-sun fa-3x'
        mode.textContent = "Light Mode"
        sun.classList.add('close')
        soundClickTwo()
        localStorage.setItem('theme', 'light')
    }
}

//EVENT LISTENER
btn.addEventListener('click', darkMode)

//LOCAL STORAGE
const currentTheme = localStorage.getItem('theme')
if(currentTheme === 'dark') {
    darkMode()
} else {
    localStorage.removeItem('dark')
}
