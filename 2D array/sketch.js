// Yassmin Ibrahim
// 4/15/ 2024
// sudoku

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

let gridInitial = [[1, 1, 0, 0, 1, 0, 0, 0, 0],
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
let state = "startScreen";

//masking

function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  
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
}

function draw() {
  if(state === "startScreen"){
    startScreen();
  }
  else if(state === "playing"){
    displayGrid();
    lines();
    displayNumbers();
  }
  else if(state === "howToPlay"){
    HowToPlay();          }
  else if(state === "done"){
    solve();
  }
  
  
}

function startScreen(){
  background("pink");
  rect(width/2 - 70, height/2 - 25, 150, 50);
  text("PLAY", width/2, height/2);
  rect(width/2 - 70, height/2 + 50, 150, 50);
  text("How To Play", width/2, height/2 + 75);
  if(mouseIsPressed && state === "startScreen" 
     && mouseX > width/2 - 70 
     && mouseY > height/2 - 25
     && mouseX < width/2 + 80 
     && mouseY < height/2 + 25){
    state = "playing";
  }
  if(mouseIsPressed && state === "startScreen" && mouseX > width/2 - 70 && mouseY> height/2 + 50 && mouseX < width/2 + 80 && mouseY < height/2 + 125){
    state = "howToPlay";
  }
}
function HowToPlay(){
  background("grey");
}
  

function solve(){
  grid = solvedGrid;
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
  
  for (let y = 0; y < gridInitial.length; y++) {
    for (let x = 0; x < gridInitial[y].length; x++) {
      fill("white");
      square(x * cellSize, y * cellSize, cellSize);
      if (state === "typing" || state === "playing") {
        
        let x = Math.floor(mouseX/cellSize);
        let y = Math.floor(mouseY/cellSize);
        fill(173, 216, 230);
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

function mouseClicked(){
  if(state === "playing" || state === "startScreen"){
    state = "typing";
  }
  else if(state === "typing"){
    state = "playing";
  }
}

function displayNumbers(){
  cellSize = height/grid.length;
  for(let y = 0; y< gridInitial.length; y++){
    for(let x = 0; x< gridInitial[y].length; x++){
      if(gridInitial[y][x] === 1){
        textStyle(BOLD);
      }
      else{
        textStyle(NORMAL);
      }
    }
  }
  for(let y = 0; y< grid.length; y++){
    for(let x = 0; x< grid[y].length; x++){
      let xText = x * cellSize + cellSize/2;
      let yText = y * cellSize + cellSize/2;
      if(grid[y][x] === 1){
        fill("black");
        text("1", xText , yText);
        
      }
      if(grid[y][x] === 2){
        fill("black");
        text("2",xText , yText);
      }
      if(grid[y][x] === 3){
        fill("black");
        text("3", xText , yText);
      }
      if(grid[y][x] === 4){
        fill("black");
        text("4",  xText , yText);
      }
      if(grid[y][x] === 5){
        fill("black");
        text("5",xText , yText);
      }
      if(grid[y][x] === 6){
        fill("black");
        text("6",  xText , yText);
      }
      if(grid[y][x] === 7){
        fill("black");
        text("7", xText , yText);
      }
      if(grid[y][x] === 8){
        fill("black");
        text("8", xText , yText);
      }
      if(grid[y][x] === 9){
        fill("black");
        text("9", xText , yText);
      }
    }
  }
  
  
}


function keyPressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  if(gridInitial[y][x] === 0 && state === "playing"){
    state = "typing";
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
    // else{
    //   state = "playing";
    // }
  }
  
  if(keyCode === BACKSPACE && gridInitial[y][x] === 0 ){
    grid[y][x] = 0;
  }

  if(keyCode === 83){
    state = "done";
  }
}