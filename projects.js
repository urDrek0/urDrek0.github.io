document.addEventListener("DOMContentLoaded", function() {
    // PERBAIKAN: Pastikan selector ini (.projects-flex) sesuai dengan class di HTML
    const projectContainer = document.querySelector('.projects-flex');
    const filterButtons = document.querySelectorAll('.navbar-button');

    // Fungsi ini sudah benar
    function displayProjects(projectsToDisplay) {
        projectContainer.innerHTML = '';
        projectsToDisplay.forEach(project => {
            const projectCardHTML = `
            <a href="${project.link}" target="_blank" class="link-content">
            <div class="projects-card" data-category="${project.category}">
                <img src="${project.thumbnail}" alt="${project.title}" class="card-image">
                <div class="amv-card-contents">
                    <h3 class="title-cards-content">${project.title}</h3>
                    <p class="desc-cards-content">Tools/Software : <br>${project.software}</p>
                    <a href="${project.link}" target="_blank" class="a-btn">Link</a>
                </div>
            </div>
            </a>
            `;
            projectContainer.innerHTML += projectCardHTML;
        });
    }

    // Tampilan default saat halaman dimuat (menampilkan SEMUA proyek)
    // PERBAIKAN: Langsung panggil dengan data lengkap
    const defaultFilter = 'editing'; // Ganti dengan kategori default yang diinginkan
    const defaultDisplay = projectsData.filter(project => project.category === defaultFilter);
    displayProjects(defaultDisplay);


    // Fungsionalitas tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengatur class 'active'
            document.querySelector('.navbar-button.active').classList.remove('active');
            button.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            
            // PERBAIKAN: Logika filter yang lengkap
            const filteredProjects = projectsData.filter(project => {
                return project.category === filterValue;
            });
            
            // Panggil kembali fungsi displayProjects untuk menampilkan hasil filter
            displayProjects(filteredProjects);
        });
    });
});