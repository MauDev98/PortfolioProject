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
        top: offsetTop - 100,
        behavior: "smooth",
    });
}

//DIV APPEAR ON SCROLL

//FRAMEWORKS ACTION
const cssFrameworkButton = document.getElementById("css-framework-button")
const cssFrameworkText = document.getElementById("css-framework-div")
const technologiesDiv = document.getElementById("technologies-sec");

function hasClass(ele, className) {
    if (ele.classList.contains(className)) {
        return true
    } else {
        return false
    }
}

function showPopUp(button, popUp, event) {
    button.addEventListener(event, function(e) {
        const makeVisible = "is-visible"
        console.log("making visible");
        popUp.classList.add(makeVisible)
        e.stopPropagation();
    })
}

function hidePopUp(toHide, event) {
    window.addEventListener(event,function(e){
        const makeVisible = "is-visible"
        if (hasClass(toHide, makeVisible) == true){
            e.preventDefault();
            toHide.classList.remove(makeVisible)
        }
    })
}

showPopUp(cssFrameworkButton, cssFrameworkText, "click")
hidePopUp(cssFrameworkText,"click")



//Fix this by removing not visible class to the p tag, idiot
