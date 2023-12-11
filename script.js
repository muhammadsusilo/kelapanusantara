const menu = document.getElementsByClassName("menu")[0];
const hamburgerMenu = document.getElementById ("menu");

hamburgerMenu.addEventListener("click", function(){
    menu.classList.toggle("active")
})
