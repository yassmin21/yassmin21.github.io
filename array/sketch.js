// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };
let pillarUpArray = [];

function setup() {
  createCanvas(700, 700);
  for(let i = 0; i < 15; i++){
    spawnPillarUp();
  }

}

function draw() {
  background(0);
  displayPillar();
}



function displayPillar(){
  for(let pillars of pillarUpArray){
    fill("white");
    rect(pillars.x, pillars.y, pillars.PillarWidth, pillars.pillarHeight);
    rect(pillars.x, 700, pillars.PillarWidth, pillars.pillarHeight);
  }
}

function spawnPillarUp(){
  let pillar ={
    x: random(20, width),
    y: 0,
    PillarWidth: 20,
    pillarHeight: random(30, height/2),
  };
  pillarUpArray.push(pillar);
}

