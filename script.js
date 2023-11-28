const settingsBtn = document.getElementById("settingsButton")
const settingsMenu = document.getElementById("settingsMenu")
const header = document.getElementById("header")

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

darkMode.addEventListener("click", function() {
    body.classList.toggle("darkModeToggle")
    header.classList.toggle("darkModeToggle")
})