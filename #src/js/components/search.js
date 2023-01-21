import {STATE_LIST} from '../data/values';

const searchBtn = document.querySelector(".search-btn");
const searchBody = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.add(STATE_LIST.active);
});

searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.remove(STATE_LIST.active);

});