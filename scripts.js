const content = document.getElementById('content');
const backgroundMusic = document.getElementById('backgroundMusic');

// Gunakan innerHTML untuk mengganti pesan cinta
content.innerHTML = `
    <h1>Surat Cinta Untukmu</h1>
    <p>
        Sayang, terimakasih telah menjadi bagian dalam hidupku.
        <br>
        Setiap momen bersamamu adalah anugerah.
        <br>
        Meski nethingmu berlebih <br>
        Meski insecuhdafsddgau berlebih <br>
        ketahuilah Aku mencintaimu lebih dari apapun.
    </p>
`;

// Ganti 'your_music.mp3' dengan nama file musik Anda
backgroundMusic.src = 'your_music.mp3';
