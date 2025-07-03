// Dark mode toggle
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Animated background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h, particles;
function initCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1,
    r: Math.random() * 2 + 1,
  }));
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(100,150,255,0.5)";
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
  }
  requestAnimationFrame(draw);
}

window.addEventListener("resize", initCanvas);
initCanvas();
draw();
