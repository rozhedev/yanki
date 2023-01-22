import { CLASS_LIST } from '../data/classlist';
import { STATE_LIST } from '../data/values';

const searchBody = document.querySelector(`.${CLASS_LIST.search.root}`);
const searchBtn = document.querySelector(`.${CLASS_LIST.search.btn}`);
const searchClose = document.querySelector(`.${CLASS_LIST.search.closeIcon}`);

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.add(STATE_LIST.active);
});

searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.remove(STATE_LIST.active);

});