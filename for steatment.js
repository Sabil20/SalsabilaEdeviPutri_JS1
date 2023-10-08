const daftarElemen = document.getElementById("daftar");

// Contoh penggunaan pernyataan for untuk membuat daftar
const kelompok = ["kelompok Anggrek", "kelompok Mawar ", "kelompok Melati"];

for (let i = 0; i < kelompok.length; i++) {
    // Buat elemen daftar (li) untuk setiap kelompok dan tambahkan ke dalam elemen ul
    const kelompokElemen = document.createElement("li");
    kelompokElemen.textContent = kelompok[i];
    daftarElemen.appendChild(kelompokElemen);
}