document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');
  const surpriseButton = document.getElementById('surpriseButton');

  // Tambahkan event listener untuk memuat pesan cinta yang berbeda saat halaman dimuat
  content.addEventListener('mouseover', function () {
    content.innerHTML = `
            <h1>Surat Cinta Aulia</h1>
            <p>
                Sayang, terimakasih telah menjadi bagian dalam hidupku.
                <br>
                Setiap momen bersamamu adalah anugerah.
                <br>
                Meski nethingmu berlebih <br>
                Meski insecuremu berlebih <br>
                Ketahuilah Aku menyukainya <br> dan mencintaimu lebih dari apapun.
            </p>
        `;
  });

  // Tambahkan event listener untuk menampilkan kejutan saat tombol ditekan
  surpriseButton.addEventListener('click', function () {
    showSurprise();
  });

  function showSurprise() {
    alert('🎉 Selamat, kamu mendapat kejutan!');
  }
});
