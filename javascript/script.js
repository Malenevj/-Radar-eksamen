// Når brugeren klikker på burger-menuen
document.getElementById('burger-menu').addEventListener('click', function () {
    // Henter navigation-links
    const navLinks = document.getElementById('nav-links');
    // Toggler klassen 'active' for at vise/skjule menuen
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach((item) => {
      const dropdown = item.querySelector('.dropdown');
      const link = item.querySelector('a');
  
      link.addEventListener('click', (e) => {
        if (window.innerWidth < 768) { // Mobilvisning
          e.preventDefault(); // Forhindrer navigation på mobil
          const openDropdown = document.querySelector('.dropdown.active');
  
          // Luk andre åbne dropdowns
          if (openDropdown && openDropdown !== dropdown) {
            openDropdown.classList.remove('active');
          }
  
          // Toggler dropdown
          dropdown.classList.toggle('active');
        }
      });
    });
  });
  

