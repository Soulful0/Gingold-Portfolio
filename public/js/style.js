import {SmoothScroll} from './smoothScroll.js';

const scrollable = document.querySelector('.scrollable');
new SmoothScroll(scrollable)
        
// Image size effect

window.addEventListener('load', function() {
    const img = document.querySelector('#header-img-style');
    img.style.width = '34vw'; // Ensure width is set on full page load
});

// Add the 'shrink' class after a brief delay when the page loads
    window.onload = function() {
    setTimeout(function() {
        document.querySelector('.headshot').classList.add('headshot-shrink');
       }, 50); // Delay of 100 milliseconds (can be adjusted)
    };
