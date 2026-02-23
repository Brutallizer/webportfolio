// Scroll Reveal Animation (Aggressive snap)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50; // Trigger slightly earlier for dynamic feel

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const btnNav = document.querySelector(".btn-nav");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";

        if (navLinks.style.display === "flex") {
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "100%";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.background = "rgba(5, 5, 16, 0.98)";
            navLinks.style.padding = "2rem 1rem";
            navLinks.style.gap = "1.5rem";
            navLinks.style.borderBottom = "2px solid #ff2a2a";

            if (window.innerWidth <= 768) {
                btnNav.style.display = "inline-flex";
                btnNav.style.margin = "1rem auto";
            }
        } else {
            btnNav.style.display = "none";
        }
    });
}
