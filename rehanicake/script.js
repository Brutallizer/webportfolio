// Soft Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// Navbar Scroll Effect (Soft transition)
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
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
            navLinks.style.background = "rgba(255, 250, 251, 0.98)";
            navLinks.style.padding = "2rem 1rem";
            navLinks.style.gap = "1.5rem";
            navLinks.style.boxShadow = "0 10px 20px rgba(255, 159, 178, 0.1)";

            if (window.innerWidth <= 768) {
                btnNav.style.display = "inline-flex";
                btnNav.style.margin = "1rem auto";
            }
        } else {
            btnNav.style.display = "none";
        }
    });
}
