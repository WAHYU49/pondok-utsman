
// Menu navigasi mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    // Tutup menu setelah pengunjung memilih halaman
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Buka menu navigasi"
            );
        });
    });

    // Tutup menu jika layar kembali ke ukuran desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// Tahun otomatis pada footer
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
