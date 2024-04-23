// Yassmin Ibrahim
// 4/15/ 2024
// sudoku

// if you are hard-coding a level, I'd use something like this

let solvedGrid = [[8, 1, 6, 2, 3, 4, 5, 7, 9],
  [2, 5, 9, 7, 6, 8, 4, 3, 1],
  [4, 7, 3, 5, 9, 1, 2, 8, 6],
  [5, 4, 7, 9, 8, 6, 1, 2, 3],
  [1, 6, 2, 3, 5, 7, 8, 9, 4],
  [9, 3, 8, 4, 1, 2, 6, 5, 7],
  [3, 2, 1, 6, 7, 5, 9, 4, 8],
  [6, 9, 5, 8, 4, 3, 7, 1, 2],
  [7, 8, 4, 1, 2, 9, 3, 6, 5]];

let grid = [[8, 1, 0, 0, 3, 0, 0, 0, 0],
  [2, 5, 9, 0, 6, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 8, 6, 0, 2, 0],
  [1, 0, 0, 0, 5, 0, 0, 9, 0],
  [0, 3, 0, 4, 0, 2, 0, 5, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 5, 8, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 2, 0, 3, 0, 0]];

let gridToggle = [[1, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0]];

let cellSize;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;

//masking

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


  textSize(cellSize*0.5);
  textAlign(CENTER, CENTER);
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
  textSize(cellSize*0.5);
  displayNumbers();
}

function draw() {
  background(220);
  displayGrid();
  displayNumbers();
  lines();
  if(grid === solvedGrid){
    background("black");
  }
  
  
}

function lines(){
  strokeWeight(3);
  line(cellSize*3, 0, cellSize*3, height);
  line(cellSize * 6, 0, cellSize* 6, height);
  line(0, cellSize* 3, width, cellSize * 3);
  line(0, cellSize* 6, width, cellSize * 6);
}

function displayGrid() {
  strokeWeight(1);
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function displayNumbers(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  cellSize = height/grid.length;
  let xText = x * cellSize + cellSize/2;
  for(let y = 0; y< grid.length; y++){
    for(let x = 0; x< grid[y].length; x++){
      if(grid[y][x] === 1){
        text("1", xText , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 2){
        text("2", x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 3){
        text("3",  x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 4){
        text("4",  x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 5){
        text("5", x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 6){
        text("6",  x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 7){
        text("7", x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 8){
        text("8",  x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 9){
        text("9", x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
      if(grid[y][x] === 0){
        text(" ",  x * cellSize + cellSize/2 , y * cellSize + cellSize/2);
      }
    }
  }
  
}

// for (let y = 0; y < gridToggle.length; y++) {
//   for (let x = 0; x < gridToggle[y].length; x++) {
//     if (gridToggle[y][x] === IMPASSIBLE) {
//       fill("black");
//     }
//     else if(gridToggle[y][x] === OPEN_TILE){
//       fill("white");
//     }
//   }
// }




// function mousePressed(){
//   for (let y = 0; y < gridToggle.length; y++) {
//     for (let x = 0; x < gridToggle[y].length; x++) {
//       if(gridToggle[y][x] === 1){
//         fill("blue");
//         square(x * cellSize, y * cellSize, cellSize);
//       }
//     }
//   }
  
  
// }

function keyPressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if(key === "1" && grid[y][x] === 0){
    grid[y][x] = 1;
  }
  else if(key === "2" && grid[y][x] === 0){
    grid[y][x] = 2;
  }
  else if(key === "3"&& grid[y][x] === 0){
    grid[y][x] = 3;
  }
  else if(key === "4" && grid[y][x] === 0){
    grid[y][x] = 4;
  }
  else if(key === "5" && grid[y][x] === 0){
    grid[y][x] = 5;
  }
  else if(key === "6"&& grid[y][x] === 0 ){
    grid[y][x] = 6;
  }
  else if(key === "7"&& grid[y][x] === 0){
    grid[y][x] = 7;
  }
  else if(key === "8" && grid[y][x] === 0){
    grid[y][x] = 8;
  }
  else if(key === "9" && grid[y][x] === 0){
    grid[y][x] = 9;
  }
  else if(keyCode === BACKSPACE && gridToggle[y][x] === 0){
    grid[y][x] = 0;
  }
}
