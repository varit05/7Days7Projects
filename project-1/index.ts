// Import stylesheets
import './style.css';

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

startMeditation();

function startMeditation() {
  text.innerText = 'Breath In!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold!';
    setTimeout(() => {
      container.className = 'container shrink';
      text.innerHTML = 'Breath out!';
    }, holdTime)
  }, breathTime);
}

setInterval(startMeditation, totalTime);