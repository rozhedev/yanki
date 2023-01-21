import Swiper, { Navigation, Thumbs} from 'swiper';

const categorySwiper = new Swiper(".categories-swiper", {
    modules: [Navigation, Thumbs],
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
    modules: [Navigation, Thumbs],
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
    modules: [Navigation, Thumbs],
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