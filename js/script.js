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

