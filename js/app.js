let hamburger = document.querySelector(".hamburger")
let HeaderResponsiveMenu = document.querySelector(".header-responsive-menu")
let headerResponsiveMenuTopClose = document.querySelector(".header-responsive-menu-top-close")

hamburger.addEventListener('click', function () {
    HeaderResponsiveMenu.classList.add("show")
})

headerResponsiveMenuTopClose.addEventListener('click', function () {
    HeaderResponsiveMenu.classList.remove("show")
})
new WOW().init();