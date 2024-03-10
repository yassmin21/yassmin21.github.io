//i need to draw the maze done
//draw the moving thing done
//move it using arrows done
// dont let it go grough walls done
//mouse change scene idk what tho ahhhh done
//end screen done
// fix bottons easy medium hard done
// fix millis
// make text pretty
//syntax fix
//make things clear
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
let resettime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  S = 0;
}

function draw() {
  noStroke();
  changeState();
  if (state === "before") {
    startScreenDisplay();
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
  for (let i =0; i < maze.length; i++) {
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
  rect(width/2 - 300 , height/2  - 25,  150, 40);
  text("EASY", width / 2 - 257, height / 2);

  rect(width / 2 - 90, height / 2 - 25, 150, 40);
  text("MEDIUM", windowWidth / 2 - 52, windowHeight / 2);

  rect(width/2 + 130 , height/2 -25,  150, 40);
  text("HARD", windowWidth / 2 + 175, windowHeight / 2);
}

function easy(){
  textSize(40);
  let millisecond = int(millis()/1000);
  text(millisecond, 590, 34);
  if(millisecond >= 25){
    state = "loose";
  }
}

function medium(){
  textSize(40);
  // let millisecond = int(millis()/1000);
  // let gametime = 0;
  // if (millisecond > 0 && gametime === 0){
  //   millisecond = 0;
  //   gametime = millisecond
  // }
  let S;
  let t=0;
  let dt=0.1;
  if (S===1){
    t=t+dt;
    }
  text(t, 590, 34);
  if(t >= 15){
      state = "loose";
    }
}
function touchStarted(){
  if (S===0){
  S=1;
  }
  else{
  S=0;
  }
}

function hard(){
  textSize(40);
  let millisecond = int(millis()/1000);
  text(millisecond, 590, 34);
  if(millisecond >= 10){
      state = "loose";
    }
}

function changeState() {
  if (player.y * 40 === 320 && player.x * 40 === 600) {
    state = "win";
  }
  
  if(mouseIsPressed &&  mouseY > windowHeight / 2 - 25 && mouseY < windowHeight / 2 + 15){
    if (mouseX > windowWidth / 2 - 90 && mouseX < windowWidth / 2 + 60) {
      state = "medium";
    }
    if(mouseX > width/2 - 300 && mouseX < width/2 - 150){
        state = "easy";
      }
    if(mouseX > width/2 + 130 && mouseX < width/2 + 280){
        state = "hard";
    }
  }
}

function win() {
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