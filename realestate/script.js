// Scroll Reveal Animation (Professional fade up)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

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
            navLinks.style.background = "#ffffff";
            navLinks.style.padding = "2rem 1rem";
            navLinks.style.gap = "1.5rem";
            navLinks.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";

            if (window.innerWidth <= 768) {
                btnNav.style.display = "inline-flex";
                btnNav.style.margin = "1rem auto";
            }
        } else {
            btnNav.style.display = "none";
        }
    });
}
