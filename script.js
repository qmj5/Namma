const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=> {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// close the menu when the user clicks on the close button
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click());


window.addEventListener('DOMContentLoaded', function() {
    const statics = document.querySelectorAll('.static');

    statics.forEach(function(static) {
        const number = 20; // set the desired number here
        const numberElement = static.querySelector('.static-title');

        numberElement.textContent = '0';

        static.addEventListener('mouseover', function() {
            const interval = setInterval(function() {
                const currentNumber = parseInt(numberElement.textContent);

                if (currentNumber >= number) {
                    clearInterval(interval);
                } else {
                    numberElement.textContent = currentNumber + 1+ '+';
                }
            }, 100);

            static.classList.add('show');
        });
    });
});
// JavaScript file (script.js)

window.addEventListener('DOMContentLoaded', function() {
    const aboutMeLink = document.querySelector('.nav-menu .nav-link[href="#about-me"]');

    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Navigate to the About Me page
        const aboutMeSection = document.querySelector('#about-me');
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollToPosition = aboutMeSection.offsetTop - headerHeight;

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});


