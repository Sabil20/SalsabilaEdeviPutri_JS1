const hasilElemen = document.getElementById("hasil");

// Contoh penggunaan pernyataan nested if
const berat = 57;

if (berat >= 53) {
    hasilElemen.textContent += " Obesitas I, anda perlu menjalankan program penurunan berat badan.";
} else if (berat <= 50) {
    hasilElemen.textContent += " kurus, anda perlu menjalankan program kenaikan berat badan..";
} else {
    if (berat >= 70) {
        hasilElemen.textContent += " Obesitas II.";
    } else {
        hasilElemen.textContent += " Obesitas III.";
    }
}