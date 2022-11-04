let bannerItem = document.querySelector('.banner-item');
let bannerImage = document.querySelector('.banner-image');
let bannerInfo = document.getElementById('banner-info');

// onmouseover function to show banner info
bannerItem.addEventListener('mouseover', () => {
    bannerInfo.classList.add('active');
    bannerImage.classList.add('active');
});

// onmouseout function to hide banner info
bannerItem.addEventListener('mouseout', () => {
    bannerInfo.classList.remove('active');
    bannerImage.classList.remove('active');
});