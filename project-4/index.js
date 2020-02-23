const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const stepperContents = document.querySelectorAll('.content');
let currentActive = 1;

function updateStepper() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) *
    100}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function updateContent() {
  stepperContents.forEach((content, index) => {
    if (index + 1 === currentActive) {
      content.classList.add('isActive');
    } else {
      content.classList.remove('isActive');
    }
  });
}

function updateCurrentActive(count) {
  currentActive += count;

  if (currentActive < 1) {
    currentActive = 1;
  }
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateStepper();
  updateContent();
}

prev.addEventListener('click', () => {
  updateCurrentActive(-1);
});

next.addEventListener('click', () => {
  updateCurrentActive(1);
});
