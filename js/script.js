// Menampilkan alert saat halaman dimuat
// window.onload = function() {
//     alert("Selamat datang di halaman ini! Silahkan Login Terlebih dahulu");
// };

window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('myAlertModal'));
    myModal.show();
};