// Yassmin Ibrahim
// 4/15/ 2024
// sudoku

// if you are hard-coding a level, I'd use something like this

let grid = [[0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0]];
let cellSize;

function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;
}

function windowResized() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

  cellSize = height/grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
        if(grid[y][x] === 3){
            strokeWeight(3);
        }
        else{
            strokeWeight(1);
        }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

