const header = document.querySelector('nav');

window.onscroll = function() {
    const top = window.scrollY;
    
    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}