let zatvori = document.querySelector('.fa-times');
let images = document.querySelectorAll('.containerr a');

let dugmeNazad = document.querySelector('.arrow-left');
let dugmeNapred = document.querySelector('.arrow-right');

dugmeNazad.addEventListener('click',previousImage);
dugmeNapred.addEventListener('click',nextImage);



zatvori.addEventListener('click',zatvoriPopUp);
window.addEventListener('load',init);

function zatvoriPopUp() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('visible');
}

function bindGalleryItems() {
    let index = 0;
    images.forEach(image => {
        image.addEventListener('click',showImage);
        image.dataset.index = index;
        index++;
    });
}

function bindKeyDown() {
    window.addEventListener('keydown', keyDownHandler);
}
function keyDownHandler(event) {
    switch (event.key) {
        case 'Escape':
            zatvoriPopUp();
            break;
        case 'ArrowRight':
                nextImage();
                break;
        case 'ArrowLeft':
                    previousImage();
                    break;
    
        default:
            break;
    }
}

function showImage(event) {
    event.preventDefault();

    let index=event.target.parentElement.dataset.index;
    let link = event.target.parentElement.href;
/* dodato za prikaz teksta */

    let image = document.querySelector('.popup img');
/* dodato za prikaz teksta */
    let h1 = document.querySelector('.popup h1');

    image.src = link;

    let popup = document.querySelector('.popup');
    popup.dataset.currentIndex = index;

    popup.classList.add('visible');
}

function init() {
    bindGalleryItems();
    bindKeyDown();
}

function nextImage() {
    let popup = document.querySelector('.popup');
    let currentIndex = popup.dataset.currentIndex;
    let images = document.querySelectorAll('.containerr a');

    /* dodato za prikaz teksta */
    /* let tekstoviH1 = document.querySelectorAll('.container h1'); */

    currentIndex++;

    currentIndex = currentIndex % images.length;
    /* dodato za prikaz teksta */
    let link = images[currentIndex].href;

    let image = document.querySelector('.popup img');
    /* dodato za prikaz teksta */
    let h1 = document.querySelector('.popup h1');

    image.src = link;
    popup.dataset.currentIndex = currentIndex;
    popup.classList.add('visible');
}

function previousImage() {
    let popup = document.querySelector('.popup');
    let currentIndex = popup.dataset.currentIndex;
    let images = document.querySelectorAll('.containerr a');

    /* let tekstoviH1 = document.querySelectorAll('.container h1'); */

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length-1;
    }
    let link = images[currentIndex].href;



    let image = document.querySelector('.popup img');

    image.src = link;

    let h1 = document.querySelector('.popup h1');
    /* h1.innerText = tekstH1; */
    popup.dataset.currentIndex = currentIndex;
    popup.classList.add('visible');
}