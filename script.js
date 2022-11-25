// skills===============================================
let list_wrapper = document.getElementsByClassName('skills-list-wrapper')
let lvl_skills = document.getElementsByClassName('lvl-skills')
let skills_icons = document.getElementsByClassName('skills-icons')

for (let i = 0; i < lvl_skills.length; i++) {
    lvl_skills[i].addEventListener('click', function () {
        list_wrapper[i].classList.toggle('active')
      skills_icons[i].classList.toggle('active')
    })
}

// porfolio=============================================

let portfolioModals = document.getElementsByClassName('portfolio-model')
let portfolioModals_body = document.getElementsByClassName('portfolio-model-body')
let imgCards = document.getElementsByClassName('img-card')
let portfolioCloseBtns = document.getElementsByClassName('portfolio-close-btn')

for (let i = 0; i < imgCards.length; i++) {
    imgCards[i].addEventListener('click', function () {
        portfolioModals[i].classList.toggle('active')
    })
}

for (let i = 0; i < portfolioCloseBtns.length; i++) {
    portfolioCloseBtns[i].addEventListener('click', function () {
        portfolioModals[i].classList.remove('active')
    });

    portfolioModals[i].addEventListener("click", function (e) {
        if (e.composedPath()[0] === this) {
            portfolioModals[i].classList.remove('active')
        }
    })
}

//SCOLL===================================================//

const rewind = document.getElementsByClassName("rewind")[0]

rewind.addEventListener('click', function(e){
    window.scrollTo(0,0);
})

//===================================================//

const links = document.getElementsByClassName('link')

const link = ['main-head', 'aboutMe', 'offers', 'skills', 'portfolio', 'contact']

for(let i=0;i<links.length;i++){
    links[i].addEventListener('click', function(e){
        let el = document.getElementById(link[i])
        let x = el.offsetTop
        let y = x - 100
        window.scrollTo(0,y);
    })
}

//phone navbar=====================================//

let close_navbar = document.getElementsByClassName('cencel')[0]
let open_navbar = document.getElementsByClassName('navbar_open')[0]
let menu = document.getElementsByClassName('menu')[0]
let menu_toggle = document.getElementsByClassName('menu-close')


open_navbar.addEventListener('click', function () {
    menu.classList.toggle('active')
})


close_navbar.addEventListener('click', function () {
    menu.classList.remove('active')
})


