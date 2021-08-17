var menuButton = document.getElementById("mobile-menu");
var closeButton = document.getElementById("closeButton");
var normalHeader = document.getElementById("first-section");
var mobileNav = document.getElementById("mobile-nav");
var closeButton = document.getElementById("closeButton");


menuButton.addEventListener("click", function menu(){
    normalHeader.style.display = "none";
    mobileNav.style.display = "block";
})
closeButton.addEventListener("click", function menu(){
    normalHeader.style.display = "block";
    mobileNav.style.display = "none";
})


