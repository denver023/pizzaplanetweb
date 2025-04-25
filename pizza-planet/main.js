// Selecting essential DOM elements
const hamburger = document.querySelector('.hamburger');      // Selects the hamburger menu icon
const navLinks = document.querySelector('.nav-links');       // Selects the navigation links container
const nav = document.querySelector('nav');                   // Selects the main navigation bar

// Hamburger menu toggle functionality
hamburger.addEventListener('click', () => {
    // When hamburger is clicked, toggle 'active' class on both hamburger and navLinks
    hamburger.classList.toggle('active');    // Changes hamburger icon appearance (usually from ≡ to X)
    navLinks.classList.toggle('active');     // Shows/hides the mobile menu
});

// Navigation bar scroll effect
window.addEventListener('scroll', () => {
    // Checks if page is scrolled more than 50 pixels from the top
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');       // Adds 'scrolled' class for styling changes (like background color)
    } else {
        nav.classList.remove('scrolled');    // Removes 'scrolled' class when back at top
    }
});

// Mobile menu auto-close functionality
document.querySelectorAll('.nav-links a').forEach(link => {
    // Adds click event listener to each navigation link
    link.addEventListener('click', () => {
        // When any link is clicked, close the mobile menu by removing 'active' classes
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Function to handle navigation to Acsenda website
function navigateToAcsenda() {
    // Redirects the user to Acsenda's website
    window.location.href = "https://www.acsenda.com";
}



//This section is for explanation

//This JavaScript code implements three main functionalities:

//Mobile Menu Toggle:

//Controls the hamburger menu behavior on mobile devices
//When clicked, it shows/hides the navigation menu
//Uses CSS classes to trigger animations and visibility


//Scroll Effect:

//Adds a visual effect to the navigation bar when scrolling
//After scrolling 50px, adds a 'scrolled' class that can be used for styling
//Common use: Making the nav bar background opaque after scrolling


//Auto-Close Mobile Menu:

//Improves mobile UX by automatically closing the menu when a link is clicked
//Prevents the menu from staying open after navigation

//Acsenda Navigation:

//Simple function to redirect users to the Acsenda website
//Called by the Acsenda button in the navigation menu