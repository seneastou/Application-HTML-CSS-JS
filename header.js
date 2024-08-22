const menuBurger = document.getElementById("menuBurger");
const menu = document.getElementById("menu");

menuBurger.addEventListener("click", function() {
    menu.classList.toggle("show");
});
