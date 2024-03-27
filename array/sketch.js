// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };

let pillarArray = [];
// let pillarDownArray = [];

function setup() {
  createCanvas(700, 700);
  for(let i = 0; i < 5; i++){
    spawnPillar();
    // spawnPillarDown();
  }
}

function draw() {
  background(0);
  displayPillars();
  displayCircle();
  colidedPillars();
  // displayPillarDown();
}

function displayCircle(){
  circle(30, height/2, 30);
}

function displayPillars(){
  for(let pillars of pillarArray){
    fill("white");
    rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeight);
    rect(pillars.x, pillars.ydown, pillars.PillarWidth, pillars.pillarHeightDown);
  }
}


// function displayPillar(){
//   for(let pillarsdowns of pillarDownArray){
//     fill("white");
//     rect(pillarsdowns.x, pillarsdowns.y, pillarsdowns.PillarWidth, pillarsdowns.pillarHeight2 );
//   }
// }

// function spawnPillar(){
//   let pillardown ={
//     // x: pillar.x,
//     y: random(height/2 + 20, 700),
//     PillarWidth: 20,
//     pillarHeight2: random(height/2, 700),
//   };
//   pillarDownArray.push(pillardown);
// }

function spawnPillar(){
  let pillar ={
    x: random(20, width - 20),
    yup: 0,
    ydown: random(height/2 + 20, 600),
    PillarWidth: 20,
    pillarHeight: random(30, height/2),
    pillarHeightDown: random(height/2, 600),
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
