import { STATE_LIST, COMMON_VAL } from "../data/values";

const iconMenu = document.querySelector(".header__menu-icon");
const iconClose = document.querySelector(".header__hidden-icon");
const menuBody = document.querySelector(".header__hidden-menu");

if (iconMenu && iconClose && document.documentElement.clientWidth > COMMON_VAL.lgCont) {
    iconMenu.addEventListener("click", function (e) {
        menuBody.classList.add(STATE_LIST.active);
    });
    iconClose.addEventListener("click", function (e) {
        menuBody.classList.remove(STATE_LIST.active);
    });
}

const mobileMenu = document.querySelector(".header__mobile-menu")

if (iconMenu && mobileMenu && document.documentElement.clientWidth <= COMMON_VAL.lgCont) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle(STATE_LIST.lock);
        this.classList.toggle(STATE_LIST.active);
        mobileMenu.classList.toggle(STATE_LIST.active);
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

if (categorySidebar && document.documentElement.clientWidth < COMMON_VAL.smCont) {
    categorySidebarBtn.addEventListener("click", () => {
        categorySidebar.classList.toggle(STATE_LIST.active);
    });
}

// * Фильтры в каталоге

const productFilters = document.querySelector(".product-filters");
const productFiltersBtn = document.querySelector(".product-filters__btn");

if (productFilters && document.documentElement.clientWidth < COMMON_VAL.smCont) {
    productFiltersBtn.addEventListener("click", () => {
        productFilters.classList.toggle(STATE_LIST.active);
    });
}