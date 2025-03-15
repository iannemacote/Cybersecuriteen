// Toggle Mobile Menu
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show-menu");
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save dark mode preference
    let isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Apply dark mode if previously enabled
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Toggle Dropdown for Mobile
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let menu = this.nextElementSibling;
            if (menu) {
                menu.classList.toggle("show-dropdown");
            }
        });
    });
});
