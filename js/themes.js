// SWITCHING BETWEEN LIGHTMODE AND DARKMODE
let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("nav-btn");

// Enebling the lightmode
const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active")
};

//  Disabling the lightmode
const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", null)
}

// If the lightmode is active, save the theme to local storage
if(lightmode === "active") {
    enableLightmode();
}

// When click on the btn, change the theme
themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem("lightmode") // save the selected theme
    if(lightmode !== "active"){
        enableLightmode();
    } else {
        disableLightmode();
    }
});



// SWITCHING BETWEEN ENGLISH AND CZECH LANGUAGES
function setLanguage(lang) {
    // Save language to localStorage
    localStorage.setItem("lang", lang);

    //  Load the correct JSON file with language
    let langFile = lang === "cs" ? "js/cs-lang-data.json" : "js/en-lang-data.json";

    fetch(langFile).then(response => response.json()).then(data => {
        // For each element with data-i18l, sert its coresponding text
        document.querySelectorAll("[data-i18l]").forEach(el => {
            let key = el.getAttribute("data-i18l");
            if (data[key]) {
                el.innerHTML = data[key]; //Using this, the tags and anchors will be rendered correctly
            }
        });
    });
}

// On page load, set language from localStorage or default to "cs"
document.addEventListener("DOMContentLoaded", () =>{
    let lang = localStorage.getItem("lang") || "cs";
    setLanguage(lang);

    // Update "hidden" class on buttons
    document.querySelectorAll(".nav-lang a").forEach(btn => {
        btn.classList.toggle("hidden", btn.textContent.trim().toLowerCase() === (lang === "cs" ? "cze" : "eng"));
    });
});

// Expose function for onclick
window.changeLanguage = function(lang) {
    setLanguage(lang);

    // Update hidden class on buttons
    document.querySelectorAll(".nav-lang a").forEach(btn => {
        btn.classList.toggle("hidden", btn.textContent.trim().toLowerCase() === (lang === "cs" ? "cze" : "eng"));
    });

    return false;
};