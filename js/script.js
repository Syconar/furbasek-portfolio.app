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

let contactMainHeading = document.querySelectorAll(".contact-heading-part");

let options = {
    rootMargin: "-10%",
    threshold: 0.0
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.children[0].classList.add("active")
        }
    });
};

contactMainHeading.forEach(item => {
    observer.observe(item)
})