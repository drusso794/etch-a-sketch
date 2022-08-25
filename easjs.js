

let resize = document.querySelector("button");
let container = document.querySelector(".container");

resize.addEventListener('click', () => {
    resizeGrid();
});

function resizeGrid() {
    let area = prompt("How many rows on the grid? 1-100!");
    if (area < 101 && area > 0) {
    container.style.gridElementRows = `repeat(${area}, 1fr)`;
    container.style.gridElementColumns = `repeat(${area}, 1fr)`;
    createGrid(area);
    } else {
        alert("try again");
        resizeGrid();
    }
};

function createGrid(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = "gainsboro";
        cell.style.border = "1px solid black";
        container.appendChild(cell);
        cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = "black";
        });

        function clearGrid() {
            const gridCell = document.querySelectorAll('.cell');
            resize.addEventListener('click', e => {
                cell.style.backgroundColor = "gainsboro";
                gridCell.forEach(cell => {
                    cell.remove();
                })
                
            })
        }
        clearGrid();
    }

}

createGrid(16);

