// NAVIGATION BAR SCRIPTS START
// BUTTONS FUNCTIONS

const navigationBar = document.getElementById("navigationBar");
const navBtnClose = document.getElementById("navBtnClose");
const responsiveBtn = document.getElementById("responsive-button");

function navbarToggle() {
    navigationBar.classList.add("is-visible");
    navBtnClose.classList.remove("not-visible");
    responsiveBtn.classList.add("not-visible");
}


function navbarClose() {
    navigationBar.classList.remove("is-visible");
    navBtnClose.classList.add("not-visible");
    responsiveBtn.classList.remove("not-visible");
}


//STICKY NAVBAR CODE

const wholeNavbar = document.getElementById("complete-navbar");
let navbarPosition = wholeNavbar.offsetTop;

function navbarOnScroll() {
    if (window.scrollY > navbarPosition + 100) {
        wholeNavbar.classList.add("navigation-bar-scroll");
    } else {
        wholeNavbar.classList.remove("navigation-bar-scroll");
    }
}

window.addEventListener("scroll", navbarOnScroll);

//SMOOTH SCROLL EFFECT
const links = document.querySelectorAll(".nav-link");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}
