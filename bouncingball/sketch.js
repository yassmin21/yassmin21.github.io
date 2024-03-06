let x;
let dx;
let dy;
let radius = 40;
let r= 0;
let g = 0;
let b = 0;
let state = "start screen";


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  noStroke();
  dx = random(-5, +5);
  dy= random(-5, +5);
}

function draw(){
  
  
  if (state === "start screen"){
    background("black");
    showInstructions();
  }
  else if(state === "bouncing ball"){
    background(220);
    drawCircle();
    movecircle();
    bounceOfWall();
  }
  
}
function showInstructions(){
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click the mouse to start", width/ 2, height/2 );
}

function mousePressed(){
  if (state === "start screen"){
    state = "bouncing ball";
  }
}
  
function keyTyped(){
  if(key === " "){
    dx = random(-5, 5);
    dy = random(-5, 5);
  }
  
  
}
function drawCircle(){
  // display circle
  fill(r, g ,b);
  circle(x,y, radius *2);
}
function movecircle(){
  // move circle
  x += dx;
  y += dy;
}
function bounceOfWall(){
  //bounce if needed
  if((x + radius>= width) || (x-radius <= 0)){
    dx = -1 * dx
    r = random(255);
    g = random(255);
    b = random(255);
   
  }
  if((y+ radius>= height) || (y - radius <= 0)){
    dy = -1 * dy;
    r = random(255);
    g = random(255);
    b = random(255);
  }
    
}


