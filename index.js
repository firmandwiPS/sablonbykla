const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("slide-up")) {
        mobileMenu.classList.remove("slide-up");
        mobileMenu.classList.add("slide-down");
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.remove("slide-down");
        mobileMenu.classList.add("slide-up");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
});

// Tutup menu setelah klik link
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("slide-down");
        mobileMenu.classList.add("slide-up");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    });
}); 




