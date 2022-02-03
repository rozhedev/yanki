// * COMMON CONST

const validation = require("./modules/validation.js");
const select = require("./components/select.js");
const burger = require("./components/burger.js");
const spoilers = require("./components/spoilers.js");
const productCard = require("./components/product-card.js");

const categorySwiper = new Swiper(".categories-swiper", {
    direction: "horizontal",
    loop: false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320.98: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        767.98: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1023.98: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        1139.98: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

const productThumb = new Swiper(".product-thumb", {
    watchSlidesProgress: true,
    slidesPerView: 5,

    breakpoints: {
        320.98: {
            direction: "horizontal",
            spaceBetween: 5,
        },
        767.98: {
            direction: "horizontal",
            spaceBetween: 5,
        },
        1023.98: {
            direction: "vertical",
            spaceBetween: 10,
        },
        1139.98: {
            direction: "vertical",
            spaceBetween: 10,
        },
    },
});

const productSwiper = new Swiper(".product-swiper", {
    watchSlidesProgress: true,
    slidesPerView: 1,

    thumbs: {
        swiper: productThumb,
    },
    breakpoints: {
        320.98: {
            direction: "horizontal",
            spaceBetween: 5,
        },
        767.98: {
            direction: "horizontal",
            spaceBetween: 5,
        },
        1023.98: {
            direction: "vertical",
            spaceBetween: 10,

        },
        1139.98: {
            direction: "vertical",
            spaceBetween: 10,
        },
    },
});