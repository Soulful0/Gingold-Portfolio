// Scroll Effect

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

window.onscroll = () => {
    let pos = window.scrollY;

    // Calculate the opacity based on scroll position (adjust the divisor for faster/slower fading)
    let opacityValue = Math.min(1, pos / 1000); // Adjust 500 to control how quickly it fades

    // Move line1 to the right and decrease opacity as you scroll down
    line1.style.transform = `translateX(${pos}px)`;
    line1.style.opacity = 1 - opacityValue;

    // Move line2 to the right and decrease opacity as you scroll down
    line2.style.transform = `translateX(${-pos}px)`;
    line2.style.opacity = 1 - opacityValue;
};

// Initial fade in effect

document.addEventListener('DOMContentLoaded', function() {
    // Fade-in effect for text elements
    const leftElements = [
      document.getElementById('fadeInEffect-left-1'),
      document.getElementById('fadeInEffect-left-2')
    ];
    const rightElements = [
      document.getElementById('fadeInEffect-right-1'),
      document.getElementById('fadeInEffect-right-2')
    ];
  
    leftElements.forEach(element => element.classList.add('fade-in'));
    rightElements.forEach(element => element.classList.add('fade-in'));

    // Image width transition effect
    const img = document.querySelector('#header-img-style');
    img.style.width = '34vw'; // Change width to 35vw when the DOM is fully loaded
});

// Image size effect

window.addEventListener('load', function() {
    const img = document.querySelector('#header-img-style');
    img.style.width = '34vw'; // Ensure width is set on full page load
});
