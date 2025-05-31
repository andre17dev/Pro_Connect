const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawLightning() {
  const startX = Math.random() * canvas.width;
  let x = startX;
  let y = 0;
  const segments = 25;

  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < segments; i++) {
    const dx = (Math.random() - 0.5) * 60;
    const dy = canvas.height / segments;
    x += dx;
    y += dy;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = 'rgba(200, 0, 255, 0.8)';
  ctx.lineWidth = 2;
  ctx.shadowColor = 'rgba(200, 0, 255, 0.8)';
  ctx.shadowBlur = 25;
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.3) {
    drawLightning();
  }

  requestAnimationFrame(animate);
}

animate();
