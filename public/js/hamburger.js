// const nav = document.getElementById('nav')
const hamburger = document.getElementById('hamburger')
const hamburgerImg = document.getElementById('hamburger-img')
const navBg = document.getElementById('nav-bg')
const navMenu = document.getElementById('nav-menu')

window.addEventListener('load', function () {
  const w = this.document.documentElement.clientWidth
  if (w <= 375) {
    navBg.className = 'nav__mobile__bg nav__mobile__bg--closed'
    navMenu.className = 'nav__mobile__menu nav__mobile__menu--closed'
  }
})

window.addEventListener('resize', function () {
  const w = this.document.documentElement.clientWidth
  if (w >= 375) {
    hamburger.className = 'btn btn--hamburger open'
    hamburgerImg.src = './assets/images/icon-menu.svg'
    navBg.className = 'nav__mobile__bg nav__mobile__bg--closed'
    navMenu.className = 'nav__mobile__menu nav__mobile__menu--closed'
  }
})

hamburger.addEventListener('click', (e) => {
  if (hamburger.className === 'btn btn--hamburger closed') {
    hamburger.className = 'btn btn--hamburger open'
    hamburgerImg.src = './assets/images/icon-menu-close.svg'
    navBg.className = 'nav__mobile__bg nav__mobile__bg--open'
    setTimeout(() => {
      navMenu.className = 'nav__mobile__menu nav__mobile__menu--open'
    }, 200)
  } else {
    hamburger.className = 'btn btn--hamburger closed'
    hamburgerImg.src = './assets/images/icon-menu.svg'
    setTimeout(() => {
      navBg.className = 'nav__mobile__bg nav__mobile__bg--closed'
    }, 200)
    navMenu.className = 'nav__mobile__menu nav__mobile__menu--closed'
  }
})
