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
    <p>
        Maria is a talented artist with a passion for painting. Her works are renowned for their vibrant colors and deep emotional expression.
    </p>`;
const hannahInfo = `
    <p>
        TAYO AY NASA FINE DINING RESTAURANT
    </p>`;
const marielleInfo = `
    <p>
        Anna is a skilled chef known for her innovative recipes that blend traditional flavors with modern techniques.
    </p>`;

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