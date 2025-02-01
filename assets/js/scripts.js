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
    const modalTitle = document.querySelector('#exampleModal .modal-title');
    const modalBody = document.querySelector('#exampleModal .modal-body');

    modalTitle.innerHTML = `${name}'s info ᯓᡣ𐭩`;
    modalBody.innerHTML = content;
    initializeAudioPlayer();

    const flipCard = modalBody.querySelector('#flipCard');
    if (flipCard) {
        flipCard.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    }

    const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    exampleModal.show();

    document.querySelectorAll('.cs-name-link').forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    const modalElement = document.getElementById('exampleModal');
    modalElement.addEventListener('hidden.bs.modal', function () {
        document.querySelectorAll('.cs-name-link').forEach(link => {
            link.classList.remove('active');
        });

        const videos = modalElement.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });

        const audio = document.getElementById("audio");
        if (audio) {
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset the audio to the beginning
        }
        
    }, { once: true });
}

function initializeAudioPlayer() {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const progress = document.getElementById('progress');
    const volume = document.getElementById('volume');
    const muteBtn = document.getElementById('muteBtn');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    // Check if audio and controls exist
    if (!audio || !playBtn || !pauseBtn || !progress || !volume || !muteBtn || !currentTimeDisplay || !durationDisplay) {
        console.error("One or more audio player elements are missing.");
        return; // Exit the function if any element is missing
    }

    // Reset audio player UI
    progress.style.setProperty('--value', '0%');
    volume.style.setProperty('--value', '20%');
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';

    // Event listeners for audio controls
    playBtn.addEventListener('click', function() {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    });

    audio.addEventListener('ended', function() {
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
        progress.value = 0;
        currentTimeDisplay.textContent = '00:00';
    });

    audio.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', function() {
        const value = (audio.currentTime / audio.duration) * 100;
        progress.value = value;
        progress.style.setProperty('--value', value + '%');
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    progress.addEventListener('input', function() {
        const time = progress.value * audio.duration / 100;
        audio.currentTime = time;
        progress.style.setProperty('--value', progress.value + '%');
    });

    volume.addEventListener('input', function() {
        audio.volume = volume.value / 100;
        volume.style.setProperty('--value', volume.value + '%');
    });

    muteBtn.addEventListener('click', function() {
        audio.muted = !audio.muted;
        muteBtn.innerHTML = audio.muted ? 
            '<i class="fas fa-volume-mute"></i>' : 
            '<i class="fas fa-volume-up"></i>';
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const marciaInfo = `
    <div class="flip-card" id="flipCard">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="container id-card-container-front p-0">
                    <div class="row id-card-header-front">
                        <div class="col-auto id-logo-front ps-0">
                            <img src="assets/img/cs-logo.png" alt="Logo">
                        </div>
                        <div class="col text-end pe-0">
                            <h1 class="id-header-title-front">Identification Card</h1>
                            <h4 class="id-header-subtitle-front">NO.202508282002</h4>
                        </div>
                    </div>
                    <div class="row id-card-body-front w-100">
                        <div class="row id-card-content-front w-100">
                            <div class="col-6 col-md-4 id-card-icon-front">
                                <img src="assets/img/icon-6.jpg" alt="">
                            </div>
                            <div class="col col-md-8 id-card-details-front">
                                <p>
                                    <span class="label">Name</span>
                                    <span class="value">marcia</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Birthday</span>
                                    <span class="value">08-28-2002</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Course</span>
                                    <span class="value">MEDTECH</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Motto</span>
                                    <span class="value">soaper sikip q daw?!</span>
                                </p>
                                <div class="line"></div>
                                <div class="signature">
                                    <p class="sign">marsyaa</p>
                                    <div class="signature-line"></div>
                                    <p class="signature-label">Signature</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card-back">
                <div class="container id-card-container-back p-0">
                    <div class="id-card-logo-back">
                        <img src="assets/img/cs-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-2 mb-3">
        <h5 style="font-style: italic; font-size: 10px; color: grey;">click the card</h5>
    </div>
    <div class="music-player d-flex align-items-center justify-content-center">
        <div class="audio-player">
            <div class="audio-title">
                <p class="fw-bold text-sm mb-0" style="color: #c78ca0;">♪ now playing : 
                    <span class="fw-lighter" style="font-style: italic; color: grey;"> mantra - jennie</span>
                </p>
            </div>
            <div class="audio-controls">
                <button id="playBtn" class="btn play-btn">
                    <i class="fas fa-play"></i>
                </button>
                <button id="pauseBtn" class="btn pause-btn" style="display: none;">
                    <i class="fas fa-pause"></i> 
                </button>
                <div class="time-display">
                    <span id="current-time">00:00</span> / <span id="duration">00:00</span>
                </div>
                <input type="range" id="progress"  class="progress-bar progress-edit" style="height: 5px; width: 100%;" value="0" max="100"  step="1" oninput="this.style.setProperty('--value', this.value + '%')">
                
                <button id="muteBtn" class="btn mute-btn">
                    <i class="fas fa-volume-up"></i> 
                </button>
                <input type="range" id="volume" value="20" max="100" step="1" class="progress-bar progress-edit" style="height: 5px; width: 40%;" oninput="this.style.setProperty('--value', this.value + '%')">

                <audio id="audio" preload="auto">
                    <source src="assets/music/music-2.mp3" type="audio/mp3">
                </audio>
            </div>
        </div>
    </div>`;
const hannahInfo = `
    <!-- PER MEMBER MODAL CONTENT -->
    <div class="flip-card" id="flipCard">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="container id-card-container-front p-0">
                    <div class="row id-card-header-front">
                        <div class="col-auto id-logo-front ps-0">
                            <img src="assets/img/cs-logo.png" alt="Logo">
                        </div>
                        <div class="col text-end pe-0">
                            <h1 class="id-header-title-front">Identification Card</h1>
                            <h4 class="id-header-subtitle-front">NO.202509122002</h4>
                        </div>
                    </div>
                    <div class="row id-card-body-front w-100">
                        <div class="row id-card-content-front w-100">
                            <div class="col-6 col-md-4 id-card-icon-front">
                                <img src="assets/img/icon-8.jpg" alt="">
                            </div>
                            <div class="col col-md-8 id-card-details-front">
                                <p>
                                    <span class="label">Name</span>
                                    <span class="value">Hana</span>
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
                </div>
            </div>
            <div class="flip-card-back">
                <div class="container id-card-container-back p-0">
                    <div class="id-card-logo-back">
                        <img src="assets/img/cs-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-2 mb-3">
        <h5 style="font-style: italic; font-size: 10px; color: grey;">click the card</h5>
    </div>
    <div class="music-player d-flex align-items-center justify-content-center">
        <div class="audio-player">
            <div class="audio-title">
                <p class="fw-bold text-sm mb-0" style="color: #c78ca0;">♪ now playing : 
                    <span class="fw-lighter" style="font-style: italic; color: grey;"> dive - olivia dean</span>
                </p>
            </div>
            <div class="audio-controls">
                <button id="playBtn" class="btn play-btn">
                    <i class="fas fa-play"></i>
                </button>
                <button id="pauseBtn" class="btn pause-btn" style="display: none;">
                    <i class="fas fa-pause"></i> 
                </button>
                <div class="time-display">
                    <span id="current-time">00:00</span> / <span id="duration">00:00</span>
                </div>
                <input type="range" id="progress"  class="progress-bar progress-edit" style="height: 5px; width: 100%;" value="0" max="100"  step="1" oninput="this.style.setProperty('--value', this.value + '%')">
                
                <button id="muteBtn" class="btn mute-btn">
                    <i class="fas fa-volume-up"></i> 
                </button>
                <input type="range" id="volume" value="20" max="100" step="1" class="progress-bar progress-edit" style="height: 5px; width: 40%;" oninput="this.style.setProperty('--value', this.value + '%')">

                <audio id="audio" preload="auto">
                    <source src="assets/music/music-5.mp3" type="audio/mp3">
                </audio>
            </div>
        </div>
    </div>`;
const marielleInfo = `
    <div class="flip-card" id="flipCard">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="container id-card-container-front p-0">
                    <div class="row id-card-header-front">
                        <div class="col-auto id-logo-front ps-0">
                            <img src="assets/img/cs-logo.png" alt="Logo">
                        </div>
                        <div class="col text-end pe-0">
                            <h1 class="id-header-title-front">Identification Card</h1>
                            <h4 class="id-header-subtitle-front">NO.202510082002</h4>
                        </div>
                    </div>
                    <div class="row id-card-body-front w-100">
                        <div class="row id-card-content-front w-100">
                            <div class="col-6 col-md-4 id-card-icon-front">
                                <img src="assets/img/icon-7.jpg" alt="">
                            </div>
                            <div class="col col-md-8 id-card-details-front">
                                <p>
                                    <span class="label">Name</span>
                                    <span class="value">marielle</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Birthday</span>
                                    <span class="value">10-08-2002</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Course</span>
                                    <span class="value">NURSING</span>
                                </p>
                                <div class="line"></div>
                                <p>
                                    <span class="label">Motto</span>
                                    <span class="value">mama mo</span>
                                </p>
                                <div class="line"></div>
                                <div class="signature">
                                    <p class="sign">maryel</p>
                                    <div class="signature-line"></div>
                                    <p class="signature-label">Signature</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card-back">
                <div class="container id-card-container-back p-0">
                    <div class="id-card-logo-back">
                        <img src="assets/img/cs-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-2 mb-3">
        <h5 style="font-style: italic; font-size: 10px; color: grey;">click the card</h5>
    </div>
    <div class="music-player d-flex align-items-center justify-content-center">
        <div class="audio-player">
            <div class="audio-title">
                <p class="fw-bold text-sm mb-0" style="color: #c78ca0;">♪ now playing : 
                    <span class="fw-lighter" style="font-style: italic; color: grey;"> good graces - sabrina carpenter</span>
                </p>
            </div>
            <div class="audio-controls">
                <button id="playBtn" class="btn play-btn">
                    <i class="fas fa-play"></i>
                </button>
                <button id="pauseBtn" class="btn pause-btn" style="display: none;">
                    <i class="fas fa-pause"></i> 
                </button>
                <div class="time-display">
                    <span id="current-time">00:00</span> / <span id="duration">00:00</span>
                </div>
                <input type="range" id="progress"  class="progress-bar progress-edit" style="height: 5px; width: 100%;" value="0" max="100"  step="1" oninput="this.style.setProperty('--value', this.value + '%')">
                
                <button id="muteBtn" class="btn mute-btn">
                    <i class="fas fa-volume-up"></i> 
                </button>
                <input type="range" id="volume" value="20" max="100" step="1" class="progress-bar progress-edit" style="height: 5px; width: 40%;" oninput="this.style.setProperty('--value', this.value + '%')">

                <audio id="audio" preload="auto">
                    <source src="assets/music/music-4.mp3" type="audio/mp3">
                </audio>
            </div>
        </div>
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
