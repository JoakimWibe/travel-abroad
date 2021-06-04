const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');

const mediaQuery = window.matchMedia( '(min-width: 1024px)' );

let sectionIndex = 0;

leftArrow.addEventListener('click', function() {
    if(mediaQuery.matches) {
        sectionIndex = (sectionIndex < 0) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
    } else {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -12.5 + '%)';
    }
});

rightArrow.addEventListener('click', function() {
    if(mediaQuery.matches) {
        sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 1;
        slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
    } else {
        sectionIndex = (sectionIndex < 7) ? sectionIndex + 1 : 7;
        slider.style.transform = 'translate(' + (sectionIndex) * -12.5 + '%)';
    }
}); 


