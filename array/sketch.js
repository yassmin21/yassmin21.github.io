// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - framecount

let object;
let pillarArray = [];

function setup() {
  createCanvas(400, 600);
  spawnPillar();
}

function draw() {
  background(0);
  displayPillars();
  updatepillars();
  displayCircle();
  // updateCircle();
}

function displayCircle(){
  let object = {
    xcircle: 50,
    ycircle: height/2,
    widthcircle: 20,
  }
  fill("white")
  circle(object.xcircle, object.ycircle, object.widthcircle);
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

// function updateCircle(){
//   for(let object of circleArray){
//     if(mouseIsPressed){
//       ycircle += 1;
//   }
// }
// }

