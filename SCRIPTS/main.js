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
        gridSquare.style['background-color'] = `hsl(200, 75%, 75%)`;
        gridSquare.style['border'] = `3px solid black`;
        gridContainer.appendChild(gridSquare);
    }
}