const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreValue = document.querySelector('.score-value');
const gameOverScreen = document.querySelector('.game-over-screen');

let pontos = 0;
let pipePassed = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOverScreen.style.display = 'flex';

        clearInterval(loop);

    } else if (pipePosition < 0 && !pipePassed) {
        pontos++;
        scoreValue.innerText = pontos;
        pipePassed = true;
    } else if (pipePosition > 120) {
        pipePassed = false;
    }

}, 10);

const restartGame = () => {
    window.location.reload();
}

document.addEventListener('keydown', jump);