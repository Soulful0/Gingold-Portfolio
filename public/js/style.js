import { SmoothScroll } from './smoothScroll.js';

const scrollable = document.querySelector('.scrollable');
new SmoothScroll(scrollable);

// Image size effect
window.addEventListener('load', function() {
    const img = document.querySelector('#header-img-style');
});

window.onload = function() {
    // Add the 'shrink' class to the headshot
    setTimeout(function() {
        document.querySelector('.headshot').classList.add('headshot-shrink');
    }, 50); // Delay of 50 milliseconds (can be adjusted)

    // Add the 'on-screen' class to elements with right-fade-in or left-fade-in animations
    setTimeout(function() {
        const rightFadeInLetters = document.querySelectorAll('[data-anims="right-fade-in"]');
        const leftFadeInLetters = document.querySelectorAll('[data-anims="left-fade-in"]');

        rightFadeInLetters.forEach(letter => {
            letter.classList.add('on-screen');
        });

        leftFadeInLetters.forEach(letter => {
            letter.classList.add('on-screen');
        });
    }, 50); // Delay of 50 milliseconds (can be adjusted)
};
