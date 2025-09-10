document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    if (header && menuToggle) {
        header.addEventListener('mouseleave', function() {
            menuToggle.checked = false;
        });
    }
});