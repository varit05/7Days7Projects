/**
 * Screen 2
 */

const screen = document.querySelectorAll('.screen');

const startbtn = document.getElementById('start-game');

startbtn.addEventListener('click', () => {
  screen[0].classList.add('up');
});

/**
 * Screen 3
 */

const insectBtn = document.querySelectorAll('.choose-insect');
const gameContainer = document.querySelector('.game_container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const annoyingMessage = document.getElementById('annoying_message');
let seconds = 0;
let score = 0;
let selected_insect = {};

insectBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_insect = {
      src,
      alt,
    };
    screen[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;

  seconds++;
};

function createInsect() {
  const insect = document.createElement('div');
  const { x, y } = getRandomLocations();
  insect.classList.add('insect');
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform : rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener('click', catchInsect);
  gameContainer.appendChild(insect);
}
function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function getRandomLocations() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { x: getRandomPoints(width), y: getRandomPoints(height) };
}

function getRandomPoints(point) {
  return Math.random() * (point - 200) + 100;
}

function catchInsect() {
  increaseScore();
  this.classList.add('catched');
  setTimeout(() => {
    this.remove();
  }, 2000);
  addInsects();
}

function increaseScore() {
  score++;
  if (score > 15) {
    annoyingMessage.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
