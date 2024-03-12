// fix millis donneee
// add music for the extra thing
// make text pretty
//syntax fix
//make things clear
//(640, 400) is the maze size
const maze = [
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const player = {
  x: 0,
  y: 0,
};
let song;
let starttime;
let millisecond;
let state = "before"; // sets state to before
let l = 150; // text boxes length
let h = 40; // text boxes height

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('assets/song.mp3');
}

function draw() {
  noStroke();
  changeState();
  if (state === "before") {
    startScreenDisplay();
    starttime = int(millis()/ 1000);
  }
  else if(state === "easy"){
    drawMaze();
    drawPlayer();
    easy();
  }
  else if(state === "medium"){
    drawMaze();
    drawPlayer();
    medium();
  }
  else if(state === "hard" ){
    drawMaze();
    drawPlayer();
    hard();
  }
  else if (state === "win") {
    win();
  }
  else if(state === "loose"){
    loose();
  }
}

function drawMaze() {
  background("white");
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        fill("green"); // wall
      }
      else {
        fill(255); // Open space
      }
      rect(j * 40, i * 40, 40);
    }
  }
}

function drawPlayer() {
  fill("pink");
  rect(player.x * 40, player.y * 40, 40, 40); // draw player 
}

function keyPressed() {
  if (keyCode === UP_ARROW && maze[player.y - 1][player.x] === 0) { // move player up
    player.y -= 1;
  }
  else if (keyCode === DOWN_ARROW && maze[player.y + 1][player.x] === 0) { //move player down
    player.y += 1;
  }
  else if (keyCode === LEFT_ARROW && maze[player.y][player.x - 1] === 0) { //move player left
    player.x -= 1;
  }
  else if (keyCode === RIGHT_ARROW && maze[player.y][player.x + 1] === 0) { // move player right
    player.x += 1;
  }
}

function startScreenDisplay() {
  background("pink");
  textSize(20);
  rect(width/2 - 300 , height/2  - 25,  l, h);
  text("EASY", width / 2 - 257, height / 2); // draw easy button

  rect(width / 2 - 90, height / 2 - 25, l, h);
  text("MEDIUM", width / 2 - 52, height / 2); // draw medium button

  rect(width/2 + 130 , height/2 -25,  l, h);
  text("HARD", width / 2 + 175, height / 2); // draw hard button
}

function easy(){
  millisecond = int(millis()/ 1000)
  if (millisecond > 0){
    millisecond = millisecond - starttime;
  }
  textSize(40);
  text(millisecond, 590, 34); // draw timer
  if(millisecond >= 25){
    state = "loose"; // set time diffulity 
  }
}

function medium(){
  millisecond = int(millis()/ 1000)
  if (millisecond > 0){
    millisecond = millisecond - starttime;
  }
  textSize(40);
  text(millisecond, 590, 34);
  if(millisecond >= 15){
    state = "loose";
  }
}

function hard(){
  millisecond = int(millis()/ 1000)
  if (millisecond > 0){
    millisecond = millisecond - starttime;
  }
  textSize(40);
  text(millisecond, 590, 34);
  if(millisecond >= 30){
    state = "loose";
  }
}

function changeState() {
  if (player.y * 40 === 320 && player.x * 40 === 600) {
    state = "win";
  } // determines if the player is at the end and sets state to win
  
  if(state === "before" && mouseIsPressed &&  mouseY > height / 2 - 25 && mouseY < height / 2 + 15){
    if(mouseX > width/2 - 300 && mouseX < width/2 - 150){
      state = "easy"; // changes state to easy if the easy button is pressed
    }
    if (mouseX > width / 2 - 90 && mouseX < width / 2 + 60) {
      state = "medium"; // changes state to medium if the medium button is pressed
    }
    if(mouseX > width/2 + 130 && mouseX < width/2 + 280){
      state = "hard"; // changed state to hard if hard button is pressed
    }
  }
}

function win() {
  background("white");
  fill("green");
  textSize(50);
  text("YOU WIN", windowWidth / 2 - 100, windowHeight / 2 - 50); // draws you win text in green and sets background to white
}


function loose(){
  background("white");
  fill("red");
  textSize(50);
  text("YOU LOOSE", windowWidth / 2 - 100, windowHeight / 2 - 50);
}
