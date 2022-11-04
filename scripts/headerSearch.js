let searchButton = document.querySelector('.search-btn');
let closeButton = document.querySelector('.close-btn');
let searchBox = document.querySelector('.search-box');

let menuToggle = document.querySelector('.menu-toggle');
let headerNav = document.querySelector('header');

searchButton.addEventListener('click', () => {
        searchBox.classList.add('active');
        searchButton.classList.add('active');
        closeButton.classList.add('active');

        menuToggle.classList.add('hidden');
        headerNav.classList.remove('opened');
    });

closeButton.addEventListener('click', () => {
        searchBox.classList.remove('active');
        searchButton.classList.remove('active');
        closeButton.classList.remove('active');

        menuToggle.classList.remove('hidden');
    });

menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('opened');

        searchBox.classList.remove('active');
        searchButton.classList.remove('active');
        closeButton.classList.remove('active');
    });
