// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };
let pillarUpArray = [];
let pillarDownArray = [];

function setup() {
  createCanvas(700, 700);
  for(let i = 0; i < 5; i++){
    spawnPillarUp();
    spawnPillarDown();
  }
}

function draw() {
  background(0);
  displayPillarUP();
  displayPillarDown();
}



function displayPillar(){
  for(let pillars of pillarUpArray){
    fill("white");
    rect(pillars.x, pillars.y, pillars.PillarWidth, pillars.pillarHeight);
    // for(let i )
  }
}


function displayPillar(){
  for(let pillarsdowns of pillarDownArray){
    fill("white");
    rect(pillarsdowns.x, pillarsdowns.y, pillarsdowns.PillarWidth, pillarsdowns.pillarHeight2 );
  }
}

function spawnPillarDown(){
  let pillardown ={
    // x: pillar.x,
    y: random(height/2 + 20, 700),
    PillarWidth: 20,
    pillarHeight2: random(height/2, 700),
  };
  pillarDownArray.push(pillardown);
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

//make them the same object