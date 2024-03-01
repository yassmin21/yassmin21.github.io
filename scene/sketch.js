//i need to draw the maze done
//draw the moving thing done
//move it using arrows
//add like hearts of flowers or smth for points
//end screen
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
  x: 1,
  y: 1,
};

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(220);
  noStroke();
  drawMaze();
  drawPlayer();
}
function drawMaze() {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        fill("green"); // Wall
      } else {
        fill(255); // Open space
      }
      rect(j *40, i * 40, 40);
    }
  }
}
function drawPlayer() {
  fill("pink");
  rect(player.x  , player.y , 40, 40);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.y -= 40;
  } else if (keyCode === DOWN_ARROW) {
    player.y += 40;
  } else if (keyCode === LEFT_ARROW) {
    player.x -= 40;
  } else if (keyCode === RIGHT_ARROW) {
    player.x += 40;
  }
}

