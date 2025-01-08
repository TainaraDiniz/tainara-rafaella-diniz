function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuIconDesktop = document.querySelector('.menu-icon-desktop');
    const nav = document.querySelector('nav ul');
    menuIcon.classList.toggle('active');
    menuIconDesktop.classList.toggle('active');
    nav.classList.toggle('active');
}