let navbar = document.querySelector("#navbar");
let hamburgerMenu = document.querySelector("#hamburgerMenu");
let hamburgerMenuBtn = document.querySelector("#hamburgerMenuBtn");
let header = document.querySelector("header");
let hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");

function check_size(){
    if (window.innerWidth <= 762){
        navbar.classList.add("hidden");
        hamburgerMenuBtn.classList.remove("hidden");
    } else {
        navbar.classList.remove("hidden");
        hamburgerMenuBtn.classList.add("hidden");
        hamburgerMenu.classList.add("folded");
        hamburgerMenu.classList.remove("unfolded");
    }
}
window.addEventListener("resize", check_size);

let counter = 0;
hamburgerMenuBtn.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("folded");
    hamburgerMenu.classList.toggle("unfolded");

    if (counter % 2 == 0){
        hamburgerMenuIcon.setAttribute("src", "/static/images/x-symbol.svg");
        hamburgerMenuIcon.setAttribute("width", "30");
    } else {
        hamburgerMenuIcon.setAttribute("src", "/static/images/burger-menu.svg");
        hamburgerMenuIcon.setAttribute("width", "40");
    }
    counter++;
})

check_size();