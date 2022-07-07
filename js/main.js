document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('#navbar');
    let logo = document.querySelector('#logo');
    const navLink = document.getElementById('navbarNavAltMarkup');

    function addBackground() {
        // Zmienia kolor tła nawigacji z podstawowego na ciemny
        let i = window.scrollY;
        if (i >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    };

    function addPadding() {
        // Dodaje ekstra przestrzeń padding wokół loga
        let i = window.scrollY;

        if (i >= 300) {
            nav.classList.add('nav-padding')
        } else {
            nav.classList.remove('nav-padding')
        }
    }

    function changeLogo() {
        // Funkcja zmienia kolor loga z czarnego na biały i na odwrót
        let i = window.scrollY;
        let oldLogo = logo.getAttribute('src')

        let newLogo = document.createAttribute('src')
        newLogo.value = "./img/logo-light.png"

        if (i >=300) {
            logo.setAttributeNode(newLogo)
        } else {
            newLogo.value = './img/logo.png';
            logo.setAttributeNode(newLogo)
        }

    }

    function toggleMenu() {
        // Usuwa po kliknięciu linku klasę '.show' tagu <a>
        navLink.classList.remove('show');
    }


    navLink.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', changeLogo)
    window.addEventListener('scroll', addBackground)
    window.addEventListener('scroll', addPadding)
    
});
