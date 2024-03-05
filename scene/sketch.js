//i need to draw the maze done
//draw the moving thing done
//move it using arrows done
// dont let it go grough walls
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
let wall = "no";

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
  } else if (state === "done") {
    done();
  }
}

function drawMaze() {
  background("white");
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        fill("green"); // Wall
        wall = 'yes';
      } else {
        fill(255); // Open space
        wall = 'no'
      }
      rect(j * 40, i * 40, 40);
    }
  }
}

function drawPlayer() {
  fill("pink");
  rect(player.x, player.y, 40, 40);
  
  if(player.x < 0){
    player.x = player.x += 40;
  }
  if(player.x > 600){
    player.x = player.x -= 40;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && player.y > 0) {
    player.y -= 40;
  } else if (keyCode === DOWN_ARROW && player.y < 350) {
    if(wall === 'no'){
    player.y += 40;
    }
  } else if (keyCode === LEFT_ARROW) {
    player.x -= 40;
  } else if (keyCode === RIGHT_ARROW) {
    player.x += 40;
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
  if (player.y === 320 && player . x === 600) {
    state = "done";
  }
}

function done() {
  background('white');
  textSize(50);
  text('YOU WIN', (windowWidth/2) - 100, (windowHeight/2) - 50);
  if(mouseIsPressed){
    state = "before";
  }
}