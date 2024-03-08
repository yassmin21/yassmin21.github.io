//i need to draw the maze done
//draw the moving thing done
//move it using arrows done
// dont let it go grough walls done
//mouse change scene idk what tho ahhhh
//end screen
//(640, 400)
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
let state = "before";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  changeState();
  if (state === "before") {
    startScreenDisplay();
  }
  else if (state === "play") {
    level();
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
  else if (state === "done") {
    done();
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
        fill("green");
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
  rect(player.x * 40, player.y * 40, 40, 40);
}

function keyPressed() {
  if (keyCode === UP_ARROW && maze[player.y - 1][player.x] === 0) {
    player.y -= 1;
  }
  else if (keyCode === DOWN_ARROW && maze[player.y + 1][player.x] === 0) {
    player.y += 1;
  }
  else if (keyCode === LEFT_ARROW && maze[player.y][player.x - 1] === 0) {
    player.x -= 1;
  }
  else if (keyCode === RIGHT_ARROW && maze[player.y][player.x + 1] === 0) {
    player.x += 1;
  }
}

function startScreenDisplay() {
  background("pink");
  textSize(20);
  rect(width / 2 - 90, height / 2 - 25, 150, 40);
  text("PLAY", windowWidth / 2 - 40, windowHeight / 2);
}

function level(){
  rect(width/2 - 300 , height/2 + 50 ,  150, 40);
  text("EASY", width / 2 - 257, height / 2 + 75);

  rect(width / 2 - 90, height / 2 + 50, 150, 40);
  text("MEDIUM", windowWidth / 2 - 52, windowHeight / 2 + 75);

  rect(width/2 + 130 , height/2 + 50 ,  150, 40);
  text("HARD", windowWidth / 2 + 175, windowHeight / 2 + 75);
}

function easy(){
  let millisecond = int(millis()/1000);
  text(millisecond, 590, 34);
  if(millisecond > 30){
    state = "loose";
  }
}

function medium(){
  textSize(40);
  let millisecond = int(millis()/1000);
  text(millisecond, 590, 34);
  if(state === "medium"){
    if(millisecond > 20){
      state = "loose";
    }
  }
}

function hard(){
  textSize(40);
  let millisecond = int(millis()/1000);
  text(millisecond, 590, 34);
  if(state === "hard"){
    if(millisecond > 10){
      state = "loose";
    }
  }
}

function changeState() {
  if (
    mouseIsPressed &&
    mouseX > windowWidth / 2 - 90 &&
    mouseX < windowWidth / 2 + 60 &&
    mouseY > windowHeight / 2 - 25 &&
    mouseY < windowHeight / 2 + 15
  ) {
    state = "play";
  }
  if (player.y * 40 === 320 && player.x * 40 === 600) {
    state = "done";
  }
  if(mouseIsPressed && mouseX > width/2 - 300 && mouseY > height/2 + 50 ){
    state = "easy";
  }
  if(mouseIsPressed && mouseX > width/ 2 - 90 && mouseY > height/2 + 50){
    state = "medium";
  }
  if(mouseIsPressed){
  }
}

function done() {
  background("white");
  fill("green");
  textSize(50);
  text("YOU WIN", windowWidth / 2 - 100, windowHeight / 2 - 50);
}


function loose(){
  background("white");
  textSize(50);
  text("YOU LOOSE", windowWidth / 2 - 100, windowHeight / 2 - 50);
}