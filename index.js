const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initialisation d'une variable pour le drag and drop
let item;


function getMousePos(e) {
    // Récupérer la position de la souris
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
};

function mouseMove(e) {
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = "rgb(255, 161, 245)";
    ctx.lineWidth = 8;
};

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove);
    });
});

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


// 1er event du drag and drop : on repère l'élément html sélectionné
document.addEventListener('dragstart', (e) => {
    item = e.target;
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// On permet de drop l'élément seulement dans les éléments html ayant la data-draggable à "target" pour éviter de placer les éléments n'importe où
document.addEventListener('drop', (e) => {
    if (e.target.getAttribute("data-draggable") == "target") {
        e.preventDefault();
        e.target.appendChild(item);
    };
});

// Pour éviter tout bug, on remet la variable item à null
document.addEventListener('dragend', () => item = null);