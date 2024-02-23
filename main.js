const buttonPlayPause = document.getElementById('play-pause');
const buttonAvancar = document.getElementById('proximo');
const buttonanterior = document.getElementById('anterior');
const nameCap = document.getElementById('capitulo');
const audioCap = document.getElementById('audio-capitulo');

const numberCap = 10;
let itPlaying = 0;
let capAtual = 1;


function tocarFaixa() {
    audioCap.play();
    buttonPlayPause.classList.remove('bi-play-fill')
    buttonPlayPause.classList.add('bi-pause-fill')
}

function pausarFaixa() {
    audioCap.pause();
    buttonPlayPause.classList.add('bi-play-fill')
    buttonPlayPause.classList.remove('bi-pause-fill')
}

function playOrPause() {
    if ( itPlaying === 0) {
        tocarFaixa();
        itPlaying = 1;
    } else {
        pausarFaixa();
        itPlaying = 0;
    }
}

function trocarNomeFaixa() {
    nameCap.innerText = 'Capitulo ' + capAtual;
}

function proximaFaixa() {
    if (capAtual === numberCap) {
        capAtual = capAtual = 1;
    } else {
        capAtual = capAtual + 1;
    }

    audioCap.src = './books/dom-casmurro/' + capAtual + '.mp3';
    tocarFaixa();
    itPlaying = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (capAtual === 1) {
        capAtual = numberCap;
    } else {
        capAtual = capAtual - 1;
    }

    audioCap.src = './books/dom-casmurro/' + capAtual + '.mp3';
    tocarFaixa();
    itPlaying = 1;
    trocarNomeFaixa();
}

buttonPlayPause.addEventListener('click', playOrPause);
buttonAvancar.addEventListener('click', proximaFaixa);
buttonanterior.addEventListener('click', voltarFaixa);