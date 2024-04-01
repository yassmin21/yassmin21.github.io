// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - framecount
// - music


let pillarArray = [];
let music;

function preload() {
  img = loadImage('background flappy.png');
  bird = loadImage('flappybird2.png');
  pillarup = loadImage('pillarup.png');
  pillardown = loadImage('pillardown.png');
  gameover = loadImage('GAME OVER.png');
  music = loadSound('music.mp3');
  loosemusic = loadSound('gameovermusic.mp3');
}


//make one object
let xcircle= 50;
let ycircle= 300;
let widthcircle= 50;
let lengthcircle = 40;
let gravity= 0.3;
let velocity= 0;

let state = "before";
let hitup = false;
let hitdown = false;

function setup() {
  createCanvas(400, 600);
  spawnPillar();
  music.play();
  // if(state = "loose"){
  //   loosemusic.play();
  // }
  
}

function draw() {
  if(state === "before"){
    startScreenDisplay();
  }
  else if(state === "playing"){
   background(img);
   displayPillars();
   updatepillars();
   displayCircle();
   updateCirle(); 
   changestate(); 
  }
  
  else if (state === "loose"){
    loose();
  }
}

function startScreenDisplay(){
  background(img);
  if(keyIsPressed){
    state = "playing";
  }
}

// function CountPoints(){
//   if(xcircle > )
// }

function changestate(){
  if(ycircle > 550){
    state = "loose";
  }
  for(let pillars of pillarArray){
    hitup = collideRectRect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP,xcircle, ycircle, widthcircle, lengthcircle);
    hitdown = collideRectRect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown, xcircle, ycircle, widthcircle, lengthcircle);
    if(hitup || hitdown){
     state = "loose";
   }
  }
}

function loose(){
  background(gameover);
  if(mouseIsPressed){
    ycircle = 300;
    pillarArray = [];
    state = "before";
  }
}

function displayCircle(){
  fill("white")
  // circle(xcircle, ycircle, widthcircle);
  image(bird, xcircle, ycircle, widthcircle, lengthcircle);
}

function updateCirle(){
  velocity * 0.9;
  velocity += gravity;
  ycircle += velocity;

  if(ycircle > height){
    // end game
    ycircle = height;
    velocity = 0;
  }
  if(ycircle < 0){
    ycircle = 0;
    velocity = 0;
  }
}

function displayPillars(){
  for(let pillars of pillarArray){
    fill("pink");
    // rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP);
    image(pillarup, pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP);
    // rect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
    image(pillardown, pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
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
    PillarWidth: 50,
    pillarHeightUP: random(50, height/2 - 10),
    pillarHeightDown: random(50, height/2 + 10),
    speed: 2,

  };
  pillarArray.push(pillar);
}

function keyPressed(){
  if(key = " "){
    velocity -= gravity * 25; 
  }
 
}
