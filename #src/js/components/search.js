const searchBtn = document.querySelector('.search-btn');
const searchBody = document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.add('_active');
});

searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.remove('_active');

});