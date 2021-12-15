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
function hasClass(ele, className) {
    if (ele.classList.contains(className)) {
        return true
    } else {
        return false
    }
}

// This function will take a button, a hidden element to be shown and the section where those elements are 
// hidden element with the not-visible class is needed, it's counterpart is-visible must be defines as well
function togglePopUp(button, popUp, section) {
    const buttonEle = document.getElementById(button);
    const popUpEle = document.getElementById(popUp);
    const makeVisible = "is-visible"
    const currentSection = document.getElementById(section);
    const notVisibleElements = currentSection.querySelectorAll(".not-visible")
    buttonEle.addEventListener("click", function(e) {
        //here is where the magic happens:
        //if another hidden element is shown in the section, making this element visible will hide it
        for (i = 0; i < notVisibleElements.length; i++) {
            if (hasClass(notVisibleElements[i], makeVisible) && notVisibleElements[i] != popUpEle){
                notVisibleElements[i].classList.remove(makeVisible)
            }
        }
        //if the button is pressed again while the popUp is visible, the click will toggle it
        if (hasClass(popUpEle, makeVisible) == true) {
            popUpEle.classList.remove(makeVisible)
            e.stopPropagation();
        //if the button is pressed the hidden element is shown 
        } else {
            popUpEle.classList.add(makeVisible)
            e.stopPropagation();
        }
    })
    window.addEventListener("click", function(e) {
        //additionally, if any hidden element is visible, clicking any other part in the page will hide it 
        const makeVisible = "is-visible"
        const eleAndChildren = popUpEle.children;
        for (i in eleAndChildren) {
            let currentTarget = e.target
            if (popUpEle.contains(currentTarget)) {
                break
                //but clicking inside the popUp will not hide it
            } else {
                if (hasClass(popUpEle, makeVisible)) {
                    popUpEle.classList.remove(makeVisible)
                }
            }
        }
    })
}

//adding toggling to all technologies section buttons
togglePopUp("css-framework-button", "css-framework-div", "technologies-sec")
togglePopUp("js-framework-button", "js-framework-div", "technologies-sec")
togglePopUp("learn-more-linux", "linux-bubble", "technologies-sec")
togglePopUp("learn-more-php", "php-bubble", "technologies-sec")
togglePopUp("workflow-button", "workflow-bubble", "technologies-sec")
