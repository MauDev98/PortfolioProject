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

//DIV APPEAR ON SCROLL
<
script type = "text/javascript" >
    $(document).ready(function() {
        //Take your div into one js variable
        var div = $("#divToShowHide");
        //Take the current position (vertical position from top) of your div in the variable
        var pos = div.position();
        //Now when scroll event trigger do following
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
            // I am taking 100px scroll, you can take whatever you need
            if (windowpos >= (pos.top - 100)) {
                div.addClass("AfterScroll");
            }
            //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
            else {
                s.removeClass("AfterScroll");
            }
            //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
        });
    }); <
/script>




