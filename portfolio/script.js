// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = (e.clientX - 200) + 'px';
    cursorGlow.style.top = (e.clientY - 200) + 'px';
});

// ===== SCROLL REVEAL =====
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll(".filter-btn");
const portCards = document.querySelectorAll(".port-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        portCards.forEach(card => {
            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.classList.remove("hidden");
                // Re-trigger reveal animation 
                card.classList.remove("active");
                setTimeout(() => card.classList.add("active"), 50);
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// ===== MOBILE MENU =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.style.display === "flex";
        navLinks.style.display = isOpen ? "none" : "flex";
        if (!isOpen) {
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "100%";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.background = "#0d1117";
            navLinks.style.padding = "2rem 1rem";
            navLinks.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
        }
    });
}
