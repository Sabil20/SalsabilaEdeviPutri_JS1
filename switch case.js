const opsi = document.getElementById("opsi");
const hasilElemen = document.getElementById("hasil");

opsi.addEventListener("change", function() {
    const opsiTerpilih = opsi.value;
    
    
    switch (opsiTerpilih) {
        case "diselingkuhin":
            hasilElemen.textContent = "Anda memilih deselingkuhi.";
            break;
        case "selingkuh":
            hasilElemen.textContent = "Anda memilih selingkuh.";
        default:
            hasilElemen.textContent = "Silakan pilih opsi.";
    }
});