// Navbar will hide when scrolling down
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add("navbar-hidden");
    } else {
        navbar.classList.remove("navbar-hidden");
    }
    

    lastScrollY = window.scrollY
});



// Focus to project item when scrollTop
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $(".personal-project-container").removeClass("unfocused-fog");
    } else {
        $(".personal-project-container").addClass("unfocused-fog");
    }
})



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

