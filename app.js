document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // --- THEME TOGGLE ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateBtnText(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateBtnText(newTheme);
    });

    function updateBtnText(theme) {
        if (theme === 'light') {
            toggleBtn.textContent = '🌙 Dark';
        } else {
            toggleBtn.textContent = '☀️ Light';
        }
    }

    // --- NAVIGATION SCROLL ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
