const settingsBtn = document.getElementById("settingsButton")
const settingsMenu = document.getElementById("settingsMenu")
const bigger = document.getElementById("biggerButton")
const smaller = document.getElementById("smallerButton")

const darkMode = document.getElementById("darkMode")
const body = document.body

let menuClosed = true

settingsBtn.addEventListener("click", function () {
    if (menuClosed) {
        settingsMenu.style.display = "block"
        menuClosed = false
    }
    else    {
        settingsMenu.style.display = "none"
        menuClosed = true
    }
})

//body.addEventListener("click", function () {
    if (!menuClosed)    {
        settingsMenu.style.display = "none"
        menuClosed = true
    }
//})

darkMode.addEventListener("click", function() {
    body.classList.toggle("darkModeToggle")
    if (body.classList.contains("darkModeToggle")) {
        body.style.transition = "500ms"
    }
})