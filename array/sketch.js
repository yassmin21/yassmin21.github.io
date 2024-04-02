// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - framecount
// - music


let pillarArray = [];
let music;
let slider;

function preload() {
  img = loadImage('background flappy.png');
  bird = loadImage('flappybird2.png');
  pillarUp = loadImage('pillarup.png');
  pillarDown = loadImage('pillardown.png');
  gameover = loadImage('GAME OVER.png');
  startScreen = loadImage('startscreen.png');
  music = loadSound('music.mp3');
  loosemusic = loadSound('gameovermusic.mp3');
}


//make one object
let xCircle= 50;
let yCircle= 300;
let widthCircle= 50;
let lengthCircle = 40;
let gravity= 0.3;
let velocity= 0;

let state = "before";
let hitup = false;
let hitdown = false;

function setup() {
  createCanvas(400, 600);
  spawnPillar();
  slider = createSlider(0, 1, 0.5, 0.01);
  music.loop();
}

function draw() {
  music.setVolume(slider.value());
  if(state === "before"){
    startScreenDisplay();
  }
  else if(state === "playing"){
   background(img);
   displayPillars();
   updatepillars();
   displayCircle();
   updateCirle(); 
   changeState(); 
  }
  
  else if (state === "loose"){
    loose();
  }
}

function startScreenDisplay(){
  background(startScreen);

  if(keyIsPressed){
    state = "playing";
  }
}

// function CountPoints(){

// }

function changeState(){
  if(yCircle > 550){
    state = "loose";
  }
  for(let pillars of pillarArray){
    hitup = collideRectRect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUp,xCircle, yCircle, widthCircle, lengthCircle);
    hitdown = collideRectRect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown, xCircle, yCircle, widthCircle, lengthCircle);
    if(hitup || hitdown){
     state = "loose";
   }
   count = 0;
   
  }
}

function loose(){
  background(gameover);
  if(mouseIsPressed){
    yCircle = 300;
    pillarArray = [];
    state = "before";
  }
}

function displayCircle(){
  fill("white")
  // circle(xcircle, ycircle, widthcircle);
  image(bird, xCircle, yCircle, widthCircle, lengthCircle);
}

function updateCirle(){
  velocity * 0.9;
  velocity += gravity;
  yCircle += velocity;

  if(yCircle > height){
    // end game
    yCircle = height;
    velocity = 0;
  }
  if(yCircle < 0){
    yCircle = 0;
    velocity = 0;
  }
}

function displayPillars(){
  for(let pillars of pillarArray){
    fill("pink");
    // rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP);
    image(pillarUp, pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUp);
    // rect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
    image(pillarDown, pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
  }
}

function updatepillars(){
  for(let pillars of pillarArray){
    pillars.x -= pillars.speed;
  }
  if (frameCount % 100 === 0 && state === "playing"){
    spawnPillar();
  }
}

function spawnPillar(){
  let pillar ={
    x: width,
    yup: 0,
    PillarWidth: 50,
    pillarHeightUp: random(50, height/2 - 30),
    pillarHeightDown: random(50, height/2 + 30),
    speed: 2,

  };
  pillarArray.push(pillar);
}

function keyPressed(){
  if(key = " "){
    velocity -= gravity * 25; 
  }
}
