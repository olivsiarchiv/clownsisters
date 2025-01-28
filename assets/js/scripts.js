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
    <p class="text-align-justify fw-bold p-2">
        test
    </p>
    <video autoplay loop playsinline width="100%" controls>
        <source src="assets/img/vid-3.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`;
const hannahInfo = `
    <p class="text-center fw-bold p-2">
        test
    </p>`;
const marielleInfo = `
    <div class="text-center p-2">
        <p class="fw-bold" style="font-size: 21px; display: inline;">Tayo ay nasa</p>
        <p style="font-family: 'Corinthia', serif; font-size: 21px; font-style: italic; font-weight: bold; color: red; display: inline;">✨fine dining restaurant✨</p>
    </div>
    <video autoplay loop playsinline width="100%" controls>
       <source src="assets/img/vid-1.mp4" type="video/mp4">
       Your browser does not support the video tag.
    </video>
    <div class="p-2">
        <p class="fw-bold text-align-justify" style="font-size: 15px; display: inline;">nung dinner 🥩🍜☕️ ano nangyari? 🤨🫣💀 may inaabot ka kay papi 🫳🏻🤔💅🏻 PUTANGINA NALAGLAG ⁉️😤 YUNG BISKWIT tama?! 🥔🫓👍🏻 Tayo ay nasa ✨✨fine DINING restaurant✨✨ diba? so yung pag ka skwater natin 🤩🤙🏿💩 iwan natin sa bahay. 🍻🏠🍆 pag nalaglag andun 😬🙈‼️ sina miss vina sila doc yappy. 🧝🏻‍♀️👨‍⚕️👀 imbis na "ay sorry sorry" 🙏🏻🫦😿 ano naging reaction 🤠🫥👊🏻 PUTANGINA NETO 🤦🏻‍♀️🤬🔥 NAGBIBIGAY LANG GANYAN PA! 😤🖕🏻🦶🏻 EH kinang ina mo naman 🧞‍♂️🙄🐊 nasa restaurant ka naman na sosyal 👨🏻‍🍳🧍🏻‍♀️🦦, kelan moko narinig 🐣📆👂 na PUKINGINA NAMAN EH!  🦪🍑⏳ nag gaganyan ako sa ke ms vina? 👩🏻‍🦯‍➡️🤰🏻👁️ never. 👎🏻🙅🏻‍♀️ ang tawag dun pakikisama 💃🏻🤳🏻💆🏻‍♀️ hindi ka naman magiging peke eh 😃😇 pero puta umadjust ka naman sa sitwasyon 🥺🤌🏻🧚🏻 TANGINA NAMAN EH 😡😤🗯️ NAGBIBIGAYBIGAY LANG AKO EH! 🤬👨🏻‍🦲🦭 napaganun ako sayo oh 👁️👄👁️ay putangina ni mikay oh 🪳🌛💨 ay gago nakaganun ako oh👁️👄👁️ nakatingin lang ako sayo ng ganyan. 👀🌬️💥 tas nung sinabi mo 🤾🏻‍♀️🥊🤦🏻‍♀️ ay sori sori sori po sori po 🗽☹️✊🏻 nung gumilid kayo 🫤👭🏻 tsaka, tsaka ako kumalma 😌🤰🏻🦥 tinignan ako ni vince e 🌚🙍🏼‍♂️👩‍❤️‍💋‍👨</p>
    </div>`;

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
