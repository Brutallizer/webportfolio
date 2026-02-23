// Reveal animations
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();

// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));

// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.style.display === "flex";
        navLinks.style.display = isOpen ? "none" : "flex";
        if (!isOpen) {
            Object.assign(navLinks.style, { flexDirection: "column", position: "absolute", top: "100%", left: "0", width: "100%", background: "#0a0a0a", padding: "2rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.05)" });
        }
    });
}
