// NAVIGATION BAR SCRIPTS START
const navigationBar = document.getElementById('navigationBar');
const navBtnClose = document.getElementById('navBtnClose')


function navbarToggle() {
  navigationBar.classList.remove('nav-container');
  navigationBar.classList.add('nav-container-responsive', 'is-visible')
  navBtnClose.classList.remove('not-visible')
}

function navbarClose() {
  navigationBar.classList.remove('is-visible')
  navBtnClose.classList.add('not-visible')
}

