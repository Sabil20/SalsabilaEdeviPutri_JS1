const hasilElemen = document.getElementById("hasil");

// Contoh penggunaan pernyataan do...while
let angka = 0;
let hasil = "";

do {
    hasil += angka + "<br>";
    angka++;
} while (angka <= 10);

// Masukkan hasil ke dalam elemen HTML
hasilElemen.innerHTML = hasil;