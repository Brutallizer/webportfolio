// Scroll Reveal Animation (Bouncy)
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

// Navbar Scroll & Back to top button
const navbar = document.getElementById("navbar");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        backToTop.classList.add("show");
    } else {
        navbar.classList.remove("scrolled");
        backToTop.classList.remove("show");
    }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const btnNav = document.querySelector(".btn-round.btn-primary"); // The navbar button

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

            // Text color logic since background is white now
            const links = navLinks.querySelectorAll("a");
            links.forEach(link => link.style.color = "#1e293b");

            if (window.innerWidth <= 768) {
                btnNav.style.display = "inline-flex";
                btnNav.style.margin = "1rem auto";
            }
        } else {
            btnNav.style.display = "none";
        }
    });
}

// Favorite Button Toggle
const favBtns = document.querySelectorAll(".favorite-btn");
favBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        const icon = this.querySelector("i");
        if (this.classList.contains("active")) {
            icon.classList.remove("far");
            icon.classList.add("fas");
        } else {
            icon.classList.remove("fas");
            icon.classList.add("far");
        }
    });
});
