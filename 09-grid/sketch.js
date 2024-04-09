// 2D Grid
// April 9 24

//if you are hard codimg a level:

// let grid =[
//   [1, 0, 0, 1],
//   [0, 1, 0, 1],
//   [0, 0, 0, 1],
//   [1, 1, 0, 0],
//   [1, 0, 1, 1],
//   [0, 0, 0, 1],
//   [0, 0, 1, 1],
//   [0, 1, 0, 1]
// ];
   
//if randomizing the grid:
let grid;
let cellSize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //this is dumb should check if this is the right size
  
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE); 
  cellSize = height/grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed(){
  if(key === "r"){
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE); 
  }
  
}

function generateRandomGrid(cols, rows){
  let emptyArray = [];
  for(let y = 0; y<rows; y++){
    emptyArray.push([]);
    for(let x = 0; x< cols; x++){
      //half the time 1 half the time 0
      if(random(100) < 50){
        emptyArray[y].push(0);
      }
      else{
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function displayGrid(){
  for(let y = 0; y< grid.length; y++){
    for(let x = 0; x<grid[y].length; x++){
      if(grid[y][x] === 1){
        fill("black");
      }
      else{
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mouseClicked(){
  
}