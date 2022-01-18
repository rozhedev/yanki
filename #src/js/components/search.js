const searchBtn = document.querySelector('.search-btn');
const searchBody = document.querySelector('.search');

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.toggle('_active');

});

document.addEventListener("click", (e) => {
    if (!(e.target.closest('.search-btn'))) {
        e.preventDefault();
        searchBody.classList.remove('_active');
    }
});