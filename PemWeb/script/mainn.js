// // Clear form before unload
// window.onbeforeunload = () => {
//     for (const form of document.getElementsByTagName("form")) {
//         form.reset();
//     }
// };  

// Tangkap elemen form dan pesan
const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

// Tambahkan event listener pada form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Simulasi pengiriman data (bisa diganti dengan logika fetch/axios)
    setTimeout(() => {
        // Tampilkan pesan "Pesan terkirim"
        responseMessage.style.display = "block";

        // Sembunyikan pesan setelah 3 detik
        setTimeout(() => {
            responseMessage.style.display = "none";
        }, 3000);

        // Reset form
        form.reset();
    }, 500); // Simulasi delay pengiriman
});
