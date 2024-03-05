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
  } else if (state === "play") {
    drawMaze();
    drawPlayer();
    time();
  } else if (state === "done") {
    done();
  } else if(state === "loose"){
    loose();
  }

}

function drawMaze() {
  background("white");
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        fill('green');
      } else {
        fill(255); // Open space
      }
      rect(j * 40, i * 40, 40);
    }
  }
}

function drawPlayer() {
  fill("pink");
  randomcolour;
  rect(player.x * 40, player.y * 40, 40, 40);
}

function keyPressed() {
  if (keyCode === UP_ARROW && maze[player.y - 1][player.x] === 0) {
    player.y -= 1;
  } else if (keyCode === DOWN_ARROW && maze[player.y + 1][player.x] === 0) {
    player.y += 1;
  } else if (keyCode === LEFT_ARROW && maze[player.y][player.x - 1] === 0) {
    player.x -= 1;
  } else if (keyCode === RIGHT_ARROW && maze[player.y][player.x + 1] === 0) {
    player.x += 1;
  }
}

function startScreenDisplay() {
  background("pink");
  textSize(20);
  rect(windowWidth / 2 - 90, windowHeight / 2 - 25, 150, 40);
  text("PLAY", windowWidth / 2 - 40, windowHeight / 2);
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
}

function done() {
  background("white");
  textSize(50);
  text("YOU WIN", windowWidth / 2 - 100, windowHeight / 2 - 50);
}
function randomcolour(){
  fill("pink");
  if(mouseButton === LEFT){
    let c = random(['red', 'pink', 'black']);
    fill(c);
  }
}

function time(){
  if(state === "play"){
    textSize(40);
    let millisecond = int(millis()/1000);
    text(millisecond, 590, 34);
    if(millisecond > 30){
      state = 'loose';
    }
  }
}

function loose(){
  background("white");
  textSize(50);
  text("YOU LOOSE", windowWidth / 2 - 100, windowHeight / 2 - 50);
}