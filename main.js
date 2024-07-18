document.addEventListener('DOMContentLoaded', () => {
    /*----------------TOGGLE ICON NAVBAR--------------------*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    /*----------------ACTIVE NAV LINK ON SCROLL--------------------*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('header');

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        /*----------------STICKY NAVBAR--------------------*/
        header.classList.toggle('sticky', window.scrollY > 100);

        /*----------------REMOVE TOGGLE ICON AND NAVBAR--------------------*/
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    /*----------------SCROLL REVEAL--------------------*/
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    /*----------------TYPED JS--------------------*/
    const typed = new Typed('.multiple-text', {
        strings: ['Copywriter', 'Editor', 'Youtuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
