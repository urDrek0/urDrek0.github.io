document.addEventListener("DOMContentLoaded", function() {
    // PERBAIKAN: Pastikan selector ini (.assets-flex) sesuai dengan class di HTML
    const assetContainer = document.querySelector('.projects-flex');
    const filterButtons = document.querySelectorAll('.navbar-button');

    // Fungsi ini sudah benar
    function displayassets(assetsToDisplay) {
        assetContainer.innerHTML = '';
        assetsToDisplay.forEach(asset => {
            const assetCardHTML = `
            <a href="${asset.link}" target="_blank" class="link-content">
            <div class="projects-card" data-category="${asset.category}">
                <img src="${asset.thumbnail}" alt="${asset.title}" class="card-image">
                <div class="amv-card-contents">
                    <h3 class="title-cards-content">${asset.title}</h3>
                    <p class="desc-cards-content">Software : ${asset.software}</p>
                    <p class="desc-cards-content">File Format : ${asset.fileformat}</p>
                    <a href="${asset.link}" target="_blank" class="a-btn">Link</a>
                </div>
            </div>
            </a>
            `;
            assetContainer.innerHTML += assetCardHTML;
        });
    }

    // Tampilan default saat halaman dimuat (menampilkan SEMUA proyek)
    // PERBAIKAN: Langsung panggil dengan data lengkap
    const defaultFilter = 'projectfiles'; // Ganti dengan kategori default yang diinginkan
    const defaultAssets = assetsData.filter(asset => asset.category === defaultFilter);
    displayassets(defaultAssets);

    // Fungsionalitas tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengatur class 'active'
            document.querySelector('.navbar-button.active').classList.remove('active');
            button.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            
            // PERBAIKAN: Logika filter yang lengkap
            const filteredassets = assetsData.filter(asset => {
                return asset.category === filterValue;
            });
            
            // Panggil kembali fungsi displayassets untuk menampilkan hasil filter
            displayassets(filteredassets);
        });
    });
});