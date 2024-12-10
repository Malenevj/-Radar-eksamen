// Når brugeren klikker på burger-menuen
document.getElementById('burger-menu').addEventListener('click', function () {
    // Henter navigation-links
    const navLinks = document.getElementById('nav-links');
    // Toggler klassen 'active' for at vise/skjule menuen
    navLinks.classList.toggle('active');
});



