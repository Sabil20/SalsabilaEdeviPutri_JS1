// Ambil elemen daftar dari HTML
const daftarElemen = document.getElementById("daftar");

// Contoh penggunaan pernyataan while dengan variabel let untuk daftar perabot
let perabot = "";
const daftarperabot = ["meja", "kursi", "lampu", "kulkas"];

let i = 0;
while (i < daftarperabot.length) {
    perabot = daftarperabot[i];

    // Buat elemen daftar (li) untuk setiap perabot dan tambahkan ke dalam elemen ul
    const perabotElemen = document.createElement("li");
    perabotElemen.textContent = "perabot: " + perabot;
    daftarElemen.appendChild(perabotElemen);

    i++;
}
