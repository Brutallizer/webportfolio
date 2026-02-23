// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // when to start revealing

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle (Simple implementation)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const btnNav = document.querySelector(".btn-nav");

if(hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "rgba(11, 15, 25, 0.95)";
        navLinks.style.padding = "1rem";
        navLinks.style.gap = "1rem";
        
        // Ensure nav btn is also toggled or kept hidden on mobile depending on design
        if(window.innerWidth <= 768) {
             btnNav.style.display = btnNav.style.display === "inline-flex" ? "none" : "inline-flex";
             if(btnNav.style.display === "inline-flex") {
                 btnNav.style.margin = "1rem auto";
             }
        }
    });
}
