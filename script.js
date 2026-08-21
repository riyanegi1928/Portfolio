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
        // Dynamic Animation Controls (matches @keyframes stardrift in style.css)
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * -10; // Negative delay ensures stars are already floating immediately
    star.style.animation = `stardrift ${duration}s linear ${delay}s infinite`;
               // Prevents stars from starting at once
        
        container.appendChild(star);
    }
});
