// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    dx: Math.random() - 0.5,
    dy: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
}

function updateConfetti() {
  confetti.forEach(c => {
    c.x += c.dx;
    c.y += c.dy;
    if (c.y > canvas.height) c.y = -10;
  });
}

function animate() {
  drawConfetti();
  updateConfetti();
  requestAnimationFrame(animate);
}

animate();

// Music & Surprise
document.getElementById('play-music').addEventListener('click', () => {
  let audio = new Audio('assets/music/happy-birthday.mp3');
  audio.play();
});

document.getElementById('surprise').addEventListener('click', () => {
  alert('🎉 Surprise! More fun on the next pages!');
});
