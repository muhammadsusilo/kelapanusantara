const menu = document.getElementsByClassName("menu")[0];
const hamburgerMenu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", function(e) {
    menu.classList.toggle("active")
    e.preventDefault()
})