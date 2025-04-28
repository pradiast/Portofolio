// Hover animation for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Data pengalaman kerja Anda
const experiences = [
    {
        company: "PROYEK PROGRAM DATA MAHASISWA (2023)",
        responsibilities: [
        "Membuat program pengelolaan data mahasiswa dengan teknik single linked list dan struct mengunakan bahasa pemrograman C++"
           
        ]
    },
    {
        company: "PROYEK DATA PRODUK MOBIL (2023)",
        responsibilities: [
            "Membuat program untuk data tabel produk mobil menggunakan bahasa pemrograman Java"
        ]
    },
    {
        company: "PROYEK WEBSITE PENGELOLAAN PUSKESMAS (2024)",
        responsibilities: [
            "Membuat website pengelolaan puskesmas menggunakan PHP dan MySQL"
        ]
    },
    {
        company: "PROYEK WEBSITE PENGELOLAAN TOKO SEPATU (2024)",
        responsibilities: [
            " Membuat website pengelolaan toko sepatu menggunakan bahasa pemrograman PHP dan framework Laravel"
        ]
    },
    {
        company: "PROYEK WEBSITE PENYEWAAN VILLA (2024)",
        responsibilities: [
            "Menjadi tim dalam pembuatan website penyewaan villa menggunakan HTML, CSS, PHP, Javascript dan Ajax"
        ]
    },
    {
        company: "HIMPUNAN MAHASISWA TEKNIK INFORMATIKA (2024)",
        responsibilities: [
            "Menjadi Anggota Himpunan Mahasiswa Teknik Informatika dalam divisi sekretariat"
        ]
    },
     {
        company: "PROYEK ANIMASI COOKIES DENGAN BLENDER (2024)",
        responsibilities: [
            "Membuat animasi cookies 3D dengan aplikasi blender"
        ]
    },
     {
        company: "PROYEK BUILD A SWITCH AND ROUTER NETWROK PHYSICAL MODE DENGAN CISCO PAKET TRACER (2024)",
        responsibilities: [
            "Menyelesaikan step by step dalam "build a switch and router network physical mode" dengan cisco paket tracer"
];

// Current page
let currentPage = 1;
const itemsPerPage = 2;

// Function to generate experience items
function generateExperiencePage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentExperiences = experiences.slice(start, end);
    
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';  // Clear the list before adding new items

    currentExperiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');

        const expHTML = `
            <h3>${exp.company}</h3>
            <ul>
                ${exp.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        
        expItem.innerHTML = expHTML;
        experienceList.appendChild(expItem);
    });

    generatePagination();
}

// Function to generate pagination buttons
function generatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';  // Clear pagination

    const totalPages = Math.ceil(experiences.length / itemsPerPage);

    // Prev button
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            generateExperiencePage(currentPage);
        }
    });
    pagination.appendChild(prevButton);

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerHTML = i;
        pageButton.disabled = currentPage === i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            generateExperiencePage(currentPage);
        });
        pagination.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            generateExperiencePage(currentPage);
        }
    });
    pagination.appendChild(nextButton);
}

// Initialize the first page
generateExperiencePage(currentPage);

let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Looping di awal atau akhir carousel
    if (index >= totalItems) currentIndex = 0;
    if (index < 0) currentIndex = totalItems - 1;

    items.forEach((item, i) => {
        item.style.transform = `translateX(${-currentIndex * 100}%)`;
        item.classList.toggle("active", i === currentIndex);
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Tampilkan slide awal
showSlide(currentIndex);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

