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

// Contact title and social media sliding up on scroll
let contactMainHeading = document.querySelectorAll(".contact-heading-part");
let contactMediaText = document.querySelectorAll(".media-text");

let options = {
    rootMargin: "-7%", //The transition will apply when the item come to the view point at 7%
    threshold: 0.0
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){ // If the title is visible on scroll, add "active" class to the div
            entry.target.children[0].classList.add("active")
        }
    });
};

contactMainHeading.forEach(item => {
    observer.observe(item)
});

contactMediaText.forEach(item => {
    observer.observe(item)
});