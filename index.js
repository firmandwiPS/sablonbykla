document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden', 'hide');
        mobileMenu.classList.add('show');
    } else {
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // Waktu yang sama dengan durasi transisi
    }
});

    
document.getElementById('menu-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-kontak');
        mobileMenu.classList.toggle('-translate-y-full');
        mobileMenu.classList.toggle('hidden');
    });
