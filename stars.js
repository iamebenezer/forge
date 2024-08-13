const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
const numberOfStars = 100;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: 'white'
    };
}

function drawStar(star) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();
    ctx.closePath();
}

function updateStar(star) {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx = -star.dx;
    if (star.y < 0 || star.y > canvas.height) star.dy = -star.dy;
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let star of stars) {
        drawStar(star);
        updateStar(star);
    }

    requestAnimationFrame(animateStars);
}

function init() {
    resizeCanvas();
    stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(createStar());
    }
    animateStars();
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', init);
