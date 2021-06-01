// VARIABLES
const gridContainer = document.querySelector(".page-wrap");

// RUNNING CODE
drawSquareGrid(64);

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
        gridSquare.addEventListener('mousedown', (e) => {
            gridSquare.classList.toggle("fill");
        });
        gridSquare.addEventListener('mouseover', (e) => {
            if (e.buttons == 1) {
                gridSquare.classList.toggle("fill");
            }
        });
        gridContainer.appendChild(gridSquare);
    }
}