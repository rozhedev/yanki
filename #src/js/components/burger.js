"use strict";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

// * Меню бургер

const iconMenu = document.querySelector(".header__menu-icon");
const iconClose = document.querySelector(".header__hidden-icon");
const menuBody = document.querySelector(".header__hidden-menu");

const lgContainer = 980;

if (iconMenu && document.documentElement.clientWidth > lgContainer) {
    iconMenu.addEventListener("click", function (e) {
        console.log(document.documentElement.clientWidth);
        menuBody.classList.add("_active");
    });
    iconClose.addEventListener("click", function (e) {
        menuBody.classList.remove("_active");
    });
}

const mobileMenu = document.querySelector(".header__mobile-menu")

if (iconMenu && document.documentElement.clientWidth < lgContainer) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        mobileMenu.classList.toggle("_active");
    });
}
