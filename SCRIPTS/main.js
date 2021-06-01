// VARIABLES
const gridContainer = document.querySelector(".page-wrap");
const resetButton = document.querySelector("button");

// RUNNING CODE
drawSquareGrid(16);

resetButton.addEventListener('click', (e) => {
    resetGrid();
    drawSquareGrid(prompt("Choose a grid size."));
});

document.ontouchmove = (e) => {
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    let target = document.elementFromPoint(x, y);

    if (target.tagName == "DIV") {
        target.classList.add("fill");
    }
}

document.ontouchstart = (e) => {
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    let target = document.elementFromPoint(x, y);

    if (target.tagName == "DIV") {
        target.classList.add("fill");
    }
}

// FUNCTION
function drawSquareGrid(x) {
    let gridArea = x * x;
    gridContainer.style['grid-template-rows'] = `repeat(${x}, 1fr)`;
    gridContainer.style['grid-template-columns'] = `repeat(${x}, 1fr)`;
    for (let i = 0; i < gridArea; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.style['background-color'] = `hsl(200, 15%, 95%)`;
        gridSquare.style['border'] = `1px dotted hsl(0, 0%, 85%)`;
        gridSquare.style['width'] = '100%';
        gridSquare.style['height'] = '100%';
        gridSquare.addEventListener('pointerdown', (e) => {
            if (e.buttons == 1) {
                gridSquare.classList.toggle("fill");
            }
        });
        gridSquare.addEventListener('pointerover', (e) => {
            if (e.buttons == 1) {
                gridSquare.classList.toggle("fill");
            }
        });
        gridContainer.appendChild(gridSquare);
    }
}

function resetGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}