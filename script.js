// Kopiowanie IP serwera
function copyIP() {
    const ip = document.getElementById('ip').textContent;
    navigator.clipboard.writeText(ip);
    
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Skopiowano!';
    
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 2000);
}

// Licznik graczy online
function updatePlayerCount() {
    // Tu możesz dodać rzeczywiste sprawdzanie liczby graczy
    const count = Math.floor(Math.random() * 100) + 50; // Przykładowa liczba
    document.getElementById('player-count').textContent = count;
}

// Aktualizacja liczby graczy co 30 sekund
updatePlayerCount();
setInterval(updatePlayerCount, 30000);

// Animacje przy scrollowaniu
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
        }
    });
});

document.querySelectorAll('.server-card, .rank-card, .rules-card').forEach((el) => {
    observer.observe(el);
});

// Menu mobilne
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu?.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll dla linków nawigacji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
