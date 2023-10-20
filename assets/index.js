// Select the menu button and the menu container
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the 'open' class on the menu button and the menu container
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
});
