document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("stars-container");
    const starCount = 80; // Slightly increased for a better effect!

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        
        // Base Sizing & Styling
        star.style.position = "absolute";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.backgroundColor = "#ffffff";
        star.style.borderRadius = "50%"; // Makes the stars perfectly round
        star.style.opacity = Math.random() * 0.6 + 0.2;
        
        // Random Placement on screen
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.zIndex = "-1";
        
        // --- NEW: Dynamic Animation Controls ---
        star.style.animation = "starDrift infinite ease-in-out";
        star.style.animationDuration = (Math.random() * 8 + 6) + "s"; // Random duration between 6s and 14s
        star.style.animationDelay = (Math.random() * 5) + "s";       // Prevents stars from starting at once
        
        container.appendChild(star);
    }
});