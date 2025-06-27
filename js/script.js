// Fungsi menghitung luas segitiga
document.getElementById("buttonluas").addEventListener("click", function () {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const output = document.getElementById("output-luas");

    if (isNaN(alas) || isNaN(tinggi)) {
        output.textContent = "Masukkan nilai alas dan tinggi yang valid!";
    } else {
        const luas = 0.5 * alas * tinggi;
        output.textContent = `Luas Segitiga: ${removeTrailingZeros(luas)}`;
    }
});

// Fungsi menghitung keliling segitiga
document.getElementById("buttonkeliling").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("sisi-a").value);
    const b = parseFloat(document.getElementById("sisi-b").value);
    const c = parseFloat(document.getElementById("sisi-c").value);
    const output = document.getElementById("output-keliling");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.textContent = "Masukkan semua sisi segitiga dengan angka yang valid!";
    } else {
        const keliling = a + b + c;
        output.textContent = `Keliling Segitiga: ${removeTrailingZeros(keliling)}`;
    }
});

// Fungsi untuk menghapus angka nol di belakang koma jika tidak diperlukan
function removeTrailingZeros(num) {
    return Number(num).toString();
}
