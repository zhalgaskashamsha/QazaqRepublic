const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarCloseButton = document.getElementById('sidebar-close-button');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
})

sidebarCloseButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
})
