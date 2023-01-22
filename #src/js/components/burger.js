import { CLASS_LIST } from "../data/classlist";
import { STATE_LIST, COMMON_VAL } from "../data/values";

const menuIcon = document.querySelector(`.${CLASS_LIST.burger.menuIcon}`);
const hiddenCloseIcon = document.querySelector(`.${CLASS_LIST.burger.hiddenMenuIcon}`);
const hiddenMenuBody = document.querySelector(`.${CLASS_LIST.burger.hiddenMenuBody}`);
const mobileMenu = document.querySelector(`.${CLASS_LIST.burger.mobileMenu}`);

const homeSect = document.getElementById("home");
const logoPath = "img/logo/home-logo.svg";

const categorySidebar = document.querySelector(`.${CLASS_LIST.sidebar.category}`);
const categorySidebarBtn = document.querySelector(`.${CLASS_LIST.sidebar.categoryBtn}`);
const productFilters = document.querySelector(`.${CLASS_LIST.filters.product}`);
const productFiltersBtn = document.querySelector(`.${CLASS_LIST.filters.productBtn}`);

// * HIDDEN MENU

if (
    menuIcon &&
    hiddenCloseIcon &&
    document.documentElement.clientWidth > COMMON_VAL.lgCont
) {
    menuIcon.addEventListener("click", function (e) {
        hiddenMenuBody.classList.add(STATE_LIST.active);
    });
    hiddenCloseIcon.addEventListener("click", function (e) {
        hiddenMenuBody.classList.remove(STATE_LIST.active);
    });
}

// * MOBILE MENU

if (menuIcon &&
    mobileMenu &&
    document.documentElement.clientWidth <= COMMON_VAL.lgCont
) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle(STATE_LIST.lock);
        this.classList.toggle(STATE_LIST.active);
        mobileMenu.classList.toggle(STATE_LIST.active);
    });
}

// * Change header on other pages

if (homeSect) {
    const header = document.querySelector(`#home .${CLASS_LIST.burger.headerInner}`);
    const logoImg = document.querySelector(`.${CLASS_LIST.burger.logoImg}`);

    header.classList.add(`${CLASS_LIST.burger.headerInnerLight}`);
    logoImg.setAttribute("src", logoPath);
}

// * SIDEBAR

if (categorySidebar && document.documentElement.clientWidth < COMMON_VAL.smCont) {
    categorySidebarBtn.addEventListener("click", () => {
        categorySidebar.classList.toggle(STATE_LIST.active);
    });
}

// * FILTERS

if (productFilters && document.documentElement.clientWidth < COMMON_VAL.smCont) {
    productFiltersBtn.addEventListener("click", () => {
        productFilters.classList.toggle(STATE_LIST.active);
    });
}