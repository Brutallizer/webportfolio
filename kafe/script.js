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

// Menu Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.style.display === "flex";
        navLinks.style.display = isOpen ? "none" : "flex";
        if (!isOpen) {
            Object.assign(navLinks.style, { flexDirection: "column", position: "absolute", top: "100%", left: "0", width: "100%", background: "#faf6f1", padding: "2rem 1rem", borderBottom: "1px solid rgba(92,51,23,0.1)" });
        }
    });
}
