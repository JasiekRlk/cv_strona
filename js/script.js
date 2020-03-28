function openMenu() {
    $("#slide_menu").addClass("slide_menu_opened");
    $(".search").addClass("move_search");
}

function closeMenu() {
    $("#slide_menu").removeClass("slide_menu_opened");
    $(".search").removeClass("move_search");
}

var slides = document.getElementsByClassName("slider");
var arrowRight = document.getElementById("arrowRight");
var arrowLeft = document.getElementById("arrowLeft");
var slidesContainer = document.getElementById("slidesContainer");


var position = 0;

arrowRight.addEventListener("click", function(event) {
    reposition(1);
});

arrowLeft.addEventListener("click", function(event) {
    reposition(-1);
});

function reposition(direction) { // 1 | -1
    position += direction;

    slidesContainer.style.left = -(position * 25) + "%";
    for (let slide of slides) {
        let slidePos = Math.round(convertPxtoPercent(getComputedStyle(slide).left) * 4);
        //slidePos: 0
        if (slidePos < (position - 2)) { // 0 < 1 
            slide.style.left = (slidePos + 7) * 25 + "%"; // (0 + 7) * 25 +"%" // 175%
        }
        //slidePos: 8 -> 1
        // position: 2
        if (slidePos > (position + 7)) { // 8 < 9
            slide.style.left = (slidePos - 7) * 25 + "%"; // (8 - 7) * 25 +"%" // 25%
        }

        if (slidePos == position) slide.className += " active";
        else slide.className = slide.className.replace(" active", "");
    }
}

setInterval(function() {
    reposition(1);
}, 4000)

//
function convertPxtoPercent(input) // "2301px"
{
    let ret = +(input.slice(0, -2)) / slidesContainer.getBoundingClientRect().width; //
    return ret;
}

let mainPhoto = document.getElementById("agenda_carousel");
let photo1 = document.getElementById("photo_grand1")
let photo2 = document.getElementById("photo_grand2")
let photo3 = document.getElementById("photo_grand3")
let photo4 = document.getElementById("photo_grand4")
let photo5 = document.getElementById("photo_grand5")
let photo6 = document.getElementById("photo_grand6")
let photo7 = document.getElementById("photo_grand7")

photo1.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/photo15.svg')";
})

photo2.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/photo16.svg')";
})

photo3.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/photo17.svg')";
})

photo4.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/photo18.svg')";
})

photo5.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/photo19.svg')";
})

photo6.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/photo20.svg')";
})

photo7.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/photo21.svg')";
})

const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth +
    (cardMarginRight * (cardCount / 3)) -
    carouselWidth - cardMarginRight);

leftButton.addEventListener("click", function() {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})
if (window.matchMedia("(width: 400px)").matches) {
    const carousel = document.querySelector("[data-target='carousel']");
    const card = carousel.querySelector("[data-target='card']");
    const leftButton = document.querySelector("[data-action='slideLeft']");
    const rightButton = document.querySelector("[data-action='slideRight']");

    const carouselWidth = carousel.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card)
    const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


    const cardCount = carousel.querySelectorAll("[data-target='card']").length;
    let offset = 0;
    const maxX = -((cardCount / 2) * carouselWidth +
        (cardMarginRight * (cardCount / 2)) -
        carouselWidth - cardMarginRight);

    leftButton.addEventListener("click", function() {
        if (offset !== 0) {
            offset += carouselWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })

    rightButton.addEventListener("click", function() {
        if (offset !== maxX) {
            offset -= carouselWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;


        }

    })
}