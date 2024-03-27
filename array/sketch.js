// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };

let pillarArray = [];
let ycircle = 350;

function setup() {
  createCanvas(700, 700);
  for(let i = 0; i < 5; i++){
    spawnPillar();
  }
}

function draw() {
  background(0);
  movepillarssWithNoise();
  displayPillars();
  displayCircle();
  // movepillarsback();
  // colidedPillars();
}

function displayCircle(){
  if(mouseIsPressed){
    ycircle -= 1;
  }
  circle(30, ycircle, 30);
}

// function movepillarsback(x, pillar){
//   pillar.x -= 50;
// }

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


// function colidedPillars(x, y, pillar){
//   let distanceAway = dist(x, y, pillar.x, pillar.ydown);
//   let radius = pillar.pillarwidth;
//   if(distanceAway < pillarwidth){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// function mousePressed(){
//   for(let i = pillarArray.length-1; i>= 0; i--){
//     if(colidedPillars(mouseX, mouseY, pillar[i])){
//       //kill it
//       pillarArray.splice(i, 1);
//     }
//   }
// }
function movepillarssWithNoise(){
  for (let pillars of pillarArray){
    let x = noise(pillars.timeX) * width;

    pillars.x = x;

    pillars.timeX -= pillars.deltaTime;
  }
}