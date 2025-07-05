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
    enableLightmode()
}

// When click on the btn, change the theme
themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem("lightmode") // save the selected theme
    if(lightmode !== "active"){
        enableLightmode()
    } else {
        disableLightmode()
    }
});