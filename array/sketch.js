// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bird = {
 
// };
// let pillar;

function setup() {
  createCanvas(400, 600);
  // let top = random(height / 2);
  // let bottom = random(height / 2);
  // let w = 20;
}

function draw() {
  background(0);
  pillar();
}

function pillar() {
  let pillarHeight = random(30, height/2)
  fill("white")
  rect(20, 0, 20, pillarHeight);
  
}