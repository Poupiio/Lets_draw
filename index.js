const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function getMousePos(e) {
    // Récupérer la position de la souris
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

function mouseMove(e) {
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = "rgb(254, 255, 172)";
}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
})