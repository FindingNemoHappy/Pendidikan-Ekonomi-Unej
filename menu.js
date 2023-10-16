document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menuAwal = document.getElementById("menu-awal");
    let isMenuVisible = false;

    menuIcon.addEventListener("click", () => {
        if (isMenuVisible) {
            menuAwal.style.display = "none";  // Menyembunyikan menu jika sedang terlihat
        } else {
            menuAwal.style.display = "block"; // Menampilkan menu jika sedang tersembunyi
        }
        isMenuVisible = !isMenuVisible; // Memflip variabel status
    });
});
