// Yassmin Ibrahim
// 4/15/ 2024
// sudoku

// if you are hard-coding a level, I'd use something like this

let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]];
let cellSize;

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
  textSize(50);
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
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      // if(grid[y][x] === 3){
      //     strokeWeight(3);
      // }
      // else{
      //     strokeWeight(1);
      // }
      square(x * cellSize, y * cellSize, cellSize);
      if(grid[y][x] === 1){
        
        text("1", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 2){
        text("2", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 3){
        text("3", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 4){
        text("4", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 5){
        text("5", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 6){
        text("6", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 7){
        text("7", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 8){
        text("8", x * cellSize + 45, y * cellSize + 50);
      }
      if(grid[y][x] === 9){
        text("9", x * cellSize + 45, y * cellSize + 50);
      }
    }
  }
}

// function displayNumbers(){
//   if(grid[y][x] === 1){
//     textSize(50);
//     textAlign(CENTER, CENTER);
//     text("1", x * cellSize + 45, y * cellSize + 50);
//   }
// }

function keyPressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if(key === "1"){
    grid[y][x] = 1;
  }
  else if(key === "2"){
    grid[y][x] = 2;
  }
  else if(key === "3"){
    grid[y][x] = 3;
  }
  else if(key === "4"){
    grid[y][x] = 4;
  }
  else if(key === "5"){
    grid[y][x] = 5;
  }
  else if(key === "6"){
    grid[y][x] = 6;
  }
  else if(key === "7"){
    grid[y][x] = 7;
  }
  else if(key === "8"){
    grid[y][x] = 8;
  }
  else if(key === "9"){
    grid[y][x] = 9;
  }
}
