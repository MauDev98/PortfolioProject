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
const jsFrameworkButton = document.getElementById("js-framework-button");
const jsFrameworkText = document.getElementById("js-framework-div");
const linuxLearnMoreButton = document.getElementById("learn-more-linux") ;
const linuxLearnMoreText = document.getElementById("linux-bubble");
const phpLearnMoreButton = document.getElementById("learn-more-php");
const phpLearnMoreText = document.getElementById("php-bubble");


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
        if (hasClass(popUp, makeVisible) == true){
            popUp.classList.remove(makeVisible)
            e.stopPropagation();
        }else{
            popUp.classList.add(makeVisible)
            e.stopPropagation();
        }
    })
}

function hidePopUp(toHide, event) {
    window.addEventListener(event, function(e) {
        const makeVisible = "is-visible"
        if (hasClass(toHide, makeVisible) == true) {
            e.preventDefault();
            toHide.classList.remove(makeVisible)
        }
    })
}

showPopUp(cssFrameworkButton, cssFrameworkText, "click")
showPopUp(jsFrameworkButton,jsFrameworkText, "click")
showPopUp(linuxLearnMoreButton,linuxLearnMoreText, "click")
showPopUp(phpLearnMoreButton,phpLearnMoreText, "click")
hidePopUp(jsFrameworkText,"click")
hidePopUp(cssFrameworkText, "click")
hidePopUp(linuxLearnMoreText,"click")
hidePopUp(phpLearnMoreText, "click")


//Fix this by removing not visible class to the p tag, idiot
