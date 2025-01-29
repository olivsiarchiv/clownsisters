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

document.addEventListener("DOMContentLoaded", function () {
    const aboutButton = document.getElementById("about-us");
    
    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            loadContent("about");
        });
    }
});

function showModal(event, name, content) {
    const modalTitle = document.querySelector('#myModal .modal-title');
    const modalBody = document.querySelector('#myModal .modal-body');

    modalTitle.innerHTML = `${name}'s info ᯓᡣ𐭩`;
    modalBody.innerHTML = content;

    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();

    document.querySelectorAll('.cs-name-link').forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    const modalElement = document.getElementById('myModal');
    modalElement.addEventListener('hidden.bs.modal', function () {
        document.querySelectorAll('.cs-name-link').forEach(link => {
            link.classList.remove('active');
        });

        const videos = modalElement.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }, { once: true });
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
    <!-- PER MEMBER MODAL CONTENT -->
    <div class="pf-modal d-flex justify-content-center align-items-center">
        <div class="container">
            <!-- Header Section -->
            <div class="pf-header row d-flex align-items-center px-2">
                <div class="col-auto pf-logo d-flex justify-content-start">
                    <img src="assets/img/cs-logo.png" alt="Logo">
                </div>
                <div class="col text-end">
                    <h1 class="pf-header-title">Identification Card</h1>
                    <h4 class="pf-header-subtitle">NO.202509122002</h4>
                </div>
            </div>
            <!-- Content Section -->
            <div class="row pf-content">
                <!-- Profile Image -->
                <div class="col-md-4 pfp-icon text-center">
                    <img src="assets/img/slide-1.jpg" alt="Profile">
                </div>
                <!-- Details -->
                <div class="col-md-8 pf-details">
                    <p>
                        <span class="label">Name</span>
                        <span class="value">hana</span>
                    </p>
                    <div class="line"></div>
                    <p>
                        <span class="label">Birthday</span>
                        <span class="value">09-12-2002</span>
                    </p>
                    <div class="line"></div>
                    <p>
                        <span class="label">Course</span>
                        <span class="value">BSITWMA</span>
                    </p>
                    <div class="line"></div>
                    <p>
                        <span class="label">Motto</span>
                        <span class="value">subomoto</span>
                    </p>
                    <div class="line"></div>
                    <div class="signature">
                        <p class="sign">Hannah G</p>
                        <div class="signature-line"></div>
                        <p class="signature-label">Signature</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
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
