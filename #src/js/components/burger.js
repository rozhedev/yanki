"use strict";

// * Меню бургер

const iconMenu = document.querySelector(".header__menu-icon");
const iconClose = document.querySelector(".header__hidden-icon");
const menuBody = document.querySelector(".header__hidden-menu");

const lgContainer = 980;
const smContainer = 720;

if (iconMenu && document.documentElement.clientWidth > lgContainer) {
    iconMenu.addEventListener("click", function (e) {
        menuBody.classList.add("_active");
    });
    iconClose.addEventListener("click", function (e) {
        menuBody.classList.remove("_active");
    });
}

const mobileMenu = document.querySelector(".header__mobile-menu")

if (iconMenu && document.documentElement.clientWidth <= lgContainer) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        mobileMenu.classList.toggle("_active");
    });
}


// * Меняем шапку на других страницах

const homeSect = document.getElementById("home");

if (homeSect) {
    const header = document.querySelector("#home .header__inner");
    const logoImg = document.querySelector(".header__body .logo img");

    header.classList.add("header__inner--light");
    logoImg.setAttribute("src", "img/logo/home-logo.svg");
}

// * Sidebar в каталоге

const categorySidebar = document.querySelector(".category-sidebar");
const categorySidebarBtn = document.querySelector(".category-sidebar__btn");

if (categorySidebar && document.documentElement.clientWidth < smContainer) {
    categorySidebarBtn.addEventListener("click", () => {
        categorySidebar.classList.toggle('_active');
    });
}

// * Фильтры в каталоге

const productFilters = document.querySelector(".product-filters");
const productFiltersBtn = document.querySelector(".product-filters__btn");

if (productFilters && document.documentElement.clientWidth < smContainer) {
    productFiltersBtn.addEventListener("click", () => {
        productFilters.classList.toggle('_active');
    });
}