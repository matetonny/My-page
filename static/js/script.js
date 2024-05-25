let navbar = document.querySelector("#navbar");
let hamburgerMenu = document.querySelector("#hamburgerMenu");
let hamburgerMenuBtn = document.querySelector("#hamburgerMenuBtn");

function check_size(){
    if (window.innerWidth <= 650){
        navbar.classList.add("hidden");
        hamburgerMenuBtn.classList.remove("hidden");
    } else {
        navbar.classList.remove("hidden");
        hamburgerMenuBtn.classList.add("hidden");
        hamburgerMenu.classList.add("hidden");
    }
}
check_size();
window.addEventListener("resize", check_size);

hamburgerMenuBtn.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("hidden");
})