// document.addEventListener('DOMContentLoaded', function() {
//     const leftElements = [
//       document.getElementById('fadeInEffect-left-1'),
//       document.getElementById('fadeInEffect-left-2')
//     ];
//     const rightElements = [
//       document.getElementById('fadeInEffect-right-1'),
//       document.getElementById('fadeInEffect-right-2')
//     ];
  
//     leftElements.forEach(element => element.classList.add('fade-in'));
//     rightElements.forEach(element => element.classList.add('fade-in'));
//   });

//   window.addEventListener('load', function() {
//     const img = document.querySelector('#header-img-style');
//     img.style.width = '35vw'; // Change width to 35vw when the page loads
// });

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
    img.style.width = '35vw'; // Change width to 35vw when the DOM is fully loaded
});

window.addEventListener('load', function() {
    const img = document.querySelector('#header-img-style');
    img.style.width = '35vw'; // Ensure width is set on full page load
});