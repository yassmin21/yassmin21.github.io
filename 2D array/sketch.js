// Yassmin Ibrahim
// 4/15/ 2024
// sudoku




// make mistakes counter
//add sound, timer and clicking

//the solved grid
let solvedGrid = [[8, 1, 6, 2, 3, 4, 5, 7, 9],
  [2, 5, 9, 7, 6, 8, 4, 3, 1],
  [4, 7, 3, 5, 9, 1, 2, 8, 6],
  [5, 4, 7, 9, 8, 6, 1, 2, 3],
  [1, 6, 2, 3, 5, 7, 8, 9, 4],
  [9, 3, 8, 4, 1, 2, 6, 5, 7],
  [3, 2, 1, 6, 7, 5, 9, 4, 8],
  [6, 9, 5, 8, 4, 3, 7, 1, 2],
  [7, 8, 4, 1, 2, 9, 3, 6, 5]];

//the editable grid
let grid = [[8, 1, 0, 0, 3, 0, 0, 0, 0],
  [2, 5, 9, 0, 6, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 8, 6, 0, 2, 0],
  [1, 0, 0, 0, 5, 0, 0, 9, 0],
  [0, 3, 0, 4, 0, 2, 0, 5, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 5, 8, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 2, 0, 3, 0, 0]];

//the initial grid
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
let xBotton;

function preload(){
  howToBackground = loadImage("how to background.png");
  backgroundStartScreen = loadImage("background.png");
}

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
  xBotton = height/ 4;
}
function windowResized() {
  //make the canvas the largest square that you can
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

  
  cellSize = height/grid.length;

  //makes the text be smaller as screen smaller
  textSize(cellSize*0.5);
  
  //resests the height between the text in startscreen
  xBotton = height/4;
}

function draw() {
  changeState();
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
    displayGrid();
    lines();
    displayNumbers();
  }
  
}

function startScreen(){
  background(backgroundStartScreen);
  textFont("DIDOT");
  fill("black");
  textStyle(BOLD);
  text("SUDOKU", width/2, height/2 - xBotton);
  textStyle(NORMAL);
  text("Play", width/2, height/2);
  text("How To Play", width/2, height/2 + xBotton); 
}

function HowToPlay(){
  background(howToBackground);
}
  
//sets the grid to the solved grid
function solve(){
  grid = solvedGrid;
}

//changes state when the mouse is pressed in start screen
function changeState(){
  if(mouseIsPressed && state === "startScreen"){
    if(mouseX > width/2 - 40 
    && mouseY > height/2 - 20
    && mouseX < width/2 + 40 
    && mouseY < height/2 + 20){
      state = "playing";
    }
    else if(mouseX > width/2 - 80
    && mouseY > height/2 + xBotton - 20
    && mouseX < width/2 + 80 
    && mouseY < height/2 + xBotton + 20){
    state = "howToPlay";
    }
  }
     
}

//draws lines
function lines(){
  strokeWeight(2);
  line(cellSize*3, 0, cellSize*3, height);
  line(cellSize * 6, 0, cellSize* 6, height);
  line(0, cellSize* 3, width, cellSize * 3);
  line(0, cellSize* 6, width, cellSize * 6);
}


function displayGrid() {
  strokeWeight(1);
  for (let y = 0; y < gridInitial.length; y++) {
    for (let x = 0; x < gridInitial[y].length; x++) {

      //makes all the squares white
      fill("white");
      square(x * cellSize, y * cellSize, cellSize);

      //if the state is playing or typing it adds a light blue highlight to the square you are on with the mouse
      if (state === "playing" || state === "typing") {
        let x = Math.floor(mouseX/cellSize);
        let y = Math.floor(mouseY/cellSize);
        fill(173, 216, 230);
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

//the state changes from playing to typing when the mouse is clicked
function mouseClicked(){
  if(state === "playing"){
    state = "typing";
  }
  else if(state === "typing"){
    state = "playing";
  }
}

function displayNumbers(){
  //goes through each element in the grid array
  for(let y = 0; y< grid.length; y++){
    for(let x = 0; x< grid[y].length; x++){
      // constent variables for where x and y for the text are
      let xText = x * cellSize + cellSize/2;
      let yText = y * cellSize + cellSize/2;

      fill("black");

      //checks to see if this is in the initial grid or not and if it is then it makes it bold
      if(gridInitial[y][x] === IMPASSIBLE){
        textStyle(BOLD);
      }
      else if(gridInitial[y][x] === OPEN_TILE){
        textStyle(NORMAL);
      }

      //displays the number on the grid
      if(grid[y][x] === 1){
        text("1", xText , yText);
      }
      else if(grid[y][x] === 2){
       text("2", xText , yText);
      }
      else if(grid[y][x] === 3){
        text("3", xText , yText);
      }
      else if(grid[y][x] === 4){
        text("4", xText , yText);
      }
      else if(grid[y][x] === 5){
        text("5", xText , yText);
      }
      else if(grid[y][x] === 6){
        text("6", xText , yText);
      }
      else if(grid[y][x] === 7){
        text("7", xText , yText);
      }
      else if(grid[y][x] === 8){
        text("8", xText , yText);
     }
      else if(grid[y][x] === 9){
        text("9", xText , yText);
      
      }
    }
  }
}



function keyPressed(){

  //sets x and y to which square the mouse is on
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  //if the initial grid spot is empty and you are playing then depending on the key it changes the grid to that number
  if(gridInitial[y][x] === OPEN_TILE && state === "playing"){
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
  
  //if you press on the backspace and it is a square you can edit then you can delete 
  if(keyCode === BACKSPACE && gridInitial[y][x] === OPEN_TILE ){
    grid[y][x] = 0;
  }

  //if you press on s it changes the state to done
  if(keyCode === 83 && state === "playing"){
    state = "done";
  }
}