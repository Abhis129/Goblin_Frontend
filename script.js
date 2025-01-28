let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay: 200, origin:'top'});
sr.reveal('.hero-img',{delay: 450, origin:'top'});
// Apply ScrollReveal animation to the icons
sr.reveal('.icons', {
    distance: '50px',  // Slide-in distance
    duration: 2600,    // Animation duration
    delay: 500,        // Delay before starting
    origin: 'left',    // Slide in from the left
    reset: true        // Repeats animation on refresh
});


sr.reveal('.scroll-down',{delay: 200, origin:'right'});
