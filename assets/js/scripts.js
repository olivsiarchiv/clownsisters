function loadContent(section) {
    const sections = document.querySelectorAll('.home-content, .about-content, .playlist-content, .gallery-content');
    sections.forEach(el => el.style.display = 'none');

    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`a[onclick="loadContent('${section}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
    }
}

function showModal(name, content) {
    const modalTitle = document.querySelector('#myModal .modal-title');
    const modalBody = document.querySelector('#myModal .modal-body');

    modalTitle.innerHTML = `${name}'s Personal Information`;
    modalBody.innerHTML = content;

    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();

    const links = document.querySelectorAll('.cs-name-link');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`#link-${name}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

const marciaInfo = `
    <p class="text-align-justify p-2">
        Hi mga bessy ko ako si Toni Fowler halos karamihan tingin saken ay walker puro lang tuwad wala naman alam puro pang babash wala kaseng laman pero totoo na bobo ako wrong grammar ako putang ina ko tanggap koyan lahat kaya di masakit alam mo ang masakit pag tinira ka sa pwet nakikisali lang ako kahit di naman to bars di ako rapper nakiki uso langs pagod kase ako walang magawa ikaw bessy ko naligo kanaba lockdown isang buwan nakakatakot naman baka sa pasko buntis ako malibog pa naman ang asawa ko kaya namamaga pekpek ko pero seryoso salamat sa suporta pero nung una maraming galet pero ako'y ngayon mahal sa mga taong inis isa lang ang tandaan ako nalang bastusin wag ang aking anak nakikiusap ako kahit gago ako hubadera ako twerker lang ako tara trashtalk retokada peke tawagin mo ko pokpok wala ako pake.
    </p>`;
const hannahInfo = `
    <p class="text-center fw-bold">
        Just watched "A Catholic School Girl"
    </p>
    <video autoplay loop playsinline width="100%" controls>
       <source src="assets/img/vid-2.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>`;
const marielleInfo = `
    <h1 class="text-center fw-bold">
        TAYO AY NASA FINE DINING RESTAURANT
    </h1>
    <video autoplay loop playsinline width="100%" controls>
       <source src="assets/img/vid-1.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>`;

function typeMessage(message, elementId, delay = 100, callback = null) {
    const element = document.getElementById(elementId);
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            element.textContent += message[index];
            index++;
            setTimeout(typeLetter, delay);
        } else if (callback) {
            callback();
        }
    }

    typeLetter();
}

function showSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    typeMessage("Loading... Please wait...", "splash-message", 100, () => {
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 500);
    });
}

window.onload = () => {
    showSplashScreen();
    loadContent('home');
};
// window.onload = () => loadContent('home');