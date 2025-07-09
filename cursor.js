let monkeyGif = document.getElementById("gif-cursor");
// Detect touch device
function isTouchDevice(){ //try & catch to avoid any errors for touch screens
    try{
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
};

const touchMove = (e) => {
    try{ //PageX and PageY return the position of client's cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touches [0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches [0].pageY;
    }
    catch(e) {}
    //set left and top of div based on mouse position
    monkeyGif.style.left = x + 10 + "px";
    monkeyGif.style.top = y + 10 + "px";
};

let mouseX = 0, mouseY = 0;
let gifX = 0, gifY = 0;

// Update target position on mouse move
document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX + 10;
    mouseY = e.pageY + 10;
});

// Update target position on touch move
document.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
        mouseX = e.touches[0].pageX + 10;
        mouseY = e.touches[0].pageY + 10;
    }
}, {passive: false});


// Animation loop for smooth movement
function animate() {
    // Lerp: move 0.35% closer to the target each frame
    gifX += (mouseX - gifX) * 0.035; 
    gifY += (mouseY - gifY) * 0.035; // lower number = smoother and bigger "lag", bigger number = more fixed movement
    monkeyGif.style.left = gifX + "px";
    monkeyGif.style.top = gifY + "px";
    requestAnimationFrame(animate);
}
animate();