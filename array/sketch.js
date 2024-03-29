// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - framecount


let pillarArray = [];
let xcircle= 50;
let ycircle= 300;
let widthcircle= 20;
let gravity= 0.75;
let velocity= 0;

function setup() {
  createCanvas(400, 600);
  spawnPillar();
}

function draw() {
  background(0);
  displayPillars();
  updatepillars();
  displayCircle();
  updateCirle();
  // updateCircle();
}

function displayCircle(){
  fill("white")
  circle(xcircle, ycircle, widthcircle);
}

function updateCirle(){
  velocity += gravity;
  ycircle += velocity;
}

function displayPillars(){
  for(let pillars of pillarArray){
    fill("pink");
    rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP);
    rect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
  }
}

function updatepillars(){
  for(let pillars of pillarArray){
    pillars.x -= pillars.speed;
  }
  if (frameCount % 100 === 0){
    spawnPillar();
  }
}

function spawnPillar(){
  let pillar ={
    x: width,
    yup: 0,
    PillarWidth: 20,
    pillarHeightUP: random(30, height/2),
    pillarHeightDown: random(30, height/2),
    speed: 2,

  };
  pillarArray.push(pillar);
}


