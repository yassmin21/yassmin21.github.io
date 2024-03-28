// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };

let pillarArray = [];
let ycircle = 350;
let pillarGone = false;
let xcirlcle = 0;

function setup() {
  createCanvas(700, 700);
  for(let i = 0; i < 1; i++){
    spawnPillar();
  }

  window.setInterval(spawnPillar, 500, pillarGone === true);
}

function draw() {
  background(0);
  displayPillars();
  displayCircle();

  // collidedPillars();
}

function displayCircle(){
  if(mouseIsPressed){
    ycircle -= 1;
  }
  circle(30, ycircle, 30);
}



function displayPillars(){
  for(let pillars of pillarArray){
    fill("white");
    rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeight);
    rect(pillars.x, pillars.ydown, pillars.PillarWidth, pillars.pillarHeightDown);
  }
}


function spawnPillar(){
  let pillar ={
    x: random(20, width - 20),
    yup: 0,
    ydown: random(height/2 + 20, 600),
    PillarWidth: 20,
    pillarHeight: random(30, height/2),
    pillarHeightDown: random(height/2, 600),
    deltaTime: 0.002,
    timeX: random(20000),
  };
  pillarArray.push(pillar);
}


function keyPressed(){
  if(key === UP_ARROW){

  }
}

// function movepillarssWithNoise(){
//   for (let pillars of pillarArray){
//     let x = noise(pillars.timeX) * width;

//     pillars.x = x;

//     pillars.timeX -= pillars.deltaTime;
//   }
// }