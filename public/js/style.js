        import {SmoothScroll} from './smoothScroll.js';

        const scrollable = document.querySelector('.scrollable');
        new SmoothScroll(scrollable)
        
        // Add the 'shrink' class after a brief delay when the page loads
        window.onload = function() {
            setTimeout(function() {
                document.querySelector('.headshot').classList.add('headshot-shrink');
            }, 50); // Delay of 100 milliseconds (can be adjusted)
        };

