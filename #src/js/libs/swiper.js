import { CLASS_LIST } from '../data/classlist';
import Swiper, { Navigation, Thumbs } from 'swiper';

const categorySwiper = new Swiper(`.${CLASS_LIST.slider.category}`, {
    modules: [Navigation, Thumbs],
    direction: "horizontal",
    loop: false,

    navigation: {
        nextEl: `.${CLASS_LIST.slider.nextBtn}`,
        prevEl: `.${CLASS_LIST.slider.prevBtn}`,
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

const productThumb = new Swiper(`.${CLASS_LIST.slider.thumb}`, {
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

const productSwiper = new Swiper(`.${CLASS_LIST.slider.product}`, {
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