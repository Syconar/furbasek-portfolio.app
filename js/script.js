// Navbar will hide when scrolling down
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && screen.width >= 770) {
        navbar.classList.add("navbar-hidden");
    } else {
        navbar.classList.remove("navbar-hidden");
    }

    lastScrollY = window.scrollY
});



// if burger icon is checked, slide the nax-text back
function burgerModal() {
    const burgerIcon = document.getElementById("burger-input");
    const navModal = document.getElementById("navText");

    if(burgerIcon.checked === true) {
        navModal.classList.add("modal-back");
        navModal.classList.remove("small-screen");
    } else {
        navModal.classList.remove("modal-back");
        navModal.classList.add("small-screen");
    }
}

const burgerIcon = document.getElementById("burger-input");
const navMode = document.getElementById("burger-mode");
const navModal = document.getElementById("navText");
const navBtn = document.getElementById("nav-btn");

// Close the nav modal, if user click anywhere outside of the modal element
document.addEventListener("click", e => { 
    // Don't close if click is inside navModal, or on burgerIcon, or on navBtn or its children
    if(
        !navModal.contains(e.target) && 
        e.target !== burgerIcon && 
        e.target !== navBtn &&
        !navBtn.contains(e.target)
    ) {
        navModal.classList.remove("modal-back");
        navModal.classList.add("small-screen");
        burgerIcon.checked = false;
    }
});




// Project cards get focused
projectCard = $(".personal-project-container");

$(window).scroll(function(){ // Focus on computers, laptops, tablets
    let scrollBottom = $(window).scrollTop() + $(window).height(); // Assigning the scroll bottom

    if (window.innerWidth > 1003) {
        // Large screens: focus card whose bottom is above scrollBottom
        let closestCard = null;
        let closestDistance = Infinity;

        projectCard.each(function() {
            let cardBottom = $(this).offset().top + $(this).outerHeight(true); // Finding the position of bottom of the div
            let distance = Math.abs(scrollBottom - cardBottom);
            if (distance < closestDistance && scrollBottom >= $(this).offset().top) {
                closestDistance = distance;
                closestCard = $(this);
            }
        });

        projectCard.addClass("unfocused-fog");
        if (closestCard) {
            closestCard.removeClass("unfocused-fog");
        }
    } else {
        // Small screens: focus card whose top is above scrollBottom
        let closestCard = null;
        let closestDistance = Infinity;

        projectCard.each(function() {
            let cardTop = $(this).offset().top;
            let distance = Math.abs(scrollBottom - cardTop);
            if (distance < closestDistance && scrollBottom >= cardTop) {
                closestDistance = distance;
                closestCard = $(this);
            }
        });

        projectCard.addClass("unfocused-fog");
        if (closestCard) {
            closestCard.removeClass("unfocused-fog");
        }
    }
});

// Contact title and social media sliding up on scroll
let contactMainHeading = document.querySelectorAll(".contact-heading-part");
let contactMediaText = document.querySelectorAll(".media-text");

let optionsMedia = {
    rootMargin: "-7%", //The transition will apply when the item come to the view point at 7%
    threshold: 0.0
};

let observerMedia = new IntersectionObserver(showItem, optionsMedia);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){ // If the title is visible on scroll, add "active" class to the div
            entry.target.children[0].classList.add("active")
        }
    });
};

contactMainHeading.forEach(item => {
    observerMedia.observe(item)
});

contactMediaText.forEach(item => {
    observerMedia.observe(item)
});



// Project item start to get focused on scroll
let projectItem = document.querySelectorAll(".personal-project-container");



// Email function
function redirect(){
    window.location.href = "mailto:urbasekfilip02@gmail.com"
}