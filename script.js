// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
} else {
    menuBtn.textContent = "☰";
}


});

// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

link.addEventListener("click", function () {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

});


});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

const name =
    document.getElementById("name").value.trim();

const email =
    document.getElementById("email").value.trim();

const message =
    document.getElementById("message").value.trim();


// Check empty fields

if (name === "" || email === "" || message === "") {

    formMessage.textContent =
        "Please fill in all fields.";

    formMessage.style.color = "#f87171";

    return;
}


// Check email

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {

    formMessage.textContent =
        "Please enter a valid email address.";

    formMessage.style.color = "#f87171";

    return;
}


// Success message

formMessage.textContent =
    `Thank you, ${name}! Your message has been received.`;

formMessage.style.color = "#4ade80";


// Clear form

contactForm.reset();


});

// ================================
// ACTIVE NAVIGATION
// ================================

const sections =
document.querySelectorAll("section");

const navigationLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

let currentSection = "";

sections.forEach(function (section) {

    const sectionTop =
        section.offsetTop - 150;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        currentSection =
            section.getAttribute("id");

    }

});


navigationLinks.forEach(function (link) {

    link.classList.remove("active");

    if (
        link.getAttribute("href") ===
        "#" + currentSection
    ) {

        link.classList.add("active");

    }

});


});