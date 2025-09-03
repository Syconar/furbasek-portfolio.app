let monkeyGif = document.getElementById("gif-cursor");

let monkeyWidth = monkeyGif.offsetWidth;
let monkeyHeight = monkeyGif.offsetHeight;

let mouseX = 0, mouseY = 0;
let gifX = 0, gifY = 0;

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

document.addEventListener("mousemove", (e) => {
    // Calculate the max allowed position so the GIF stays inside the viewport
    let maxX = window.innerWidth - monkeyWidth;
    let maxY = window.innerHeight - monkeyHeight;
    mouseX = clamp(e.clientX + 10, 0, maxX);
    mouseY = clamp(e.clientY + 10, 0, maxY);
});

// Update target on touch move
document.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
        let maxX = window.innerWidth - monkeyWidth;
        let maxY = window.innerHeight - monkeyHeight;
        mouseX = clamp(e.touches[0].clientX + 10, 0, maxX);
        mouseY = clamp(e.touches[0].clientY + 10, 0, maxY);
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

// Update monkeyWidth/monkeyHeight on resize
window.addEventListener("resize", () => {
    monkeyWidth = monkeyGif.offsetWidth;
    monkeyHeight = monkeyGif.offsetHeight;
});