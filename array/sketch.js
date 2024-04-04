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
let score = 0;
let Highscore = 0;

function preload() {
  img = loadImage('background flappy.png');
  bird = loadImage('flappybird2.png');
  pillarUp = loadImage('pillarup.png');
  pillarDown = loadImage('pillardown.png');
  gameover = loadImage('GAME OVER.png');
  startScreen = loadImage('startscreen.png');
  music = loadSound('music.mp3');
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
  if(state === "before" || state === "playing"){
    music.loop();
  }
}

function draw() {
  music.setVolume(slider.value());
  if(state === "before"){
    startScreenDisplay();
  }
  else if(state === "playing"){ 
    background(img);
    displayPillars();
    updatePillars();
    displayCircle();
    updateCirle(); 
    drawText();
    changeState(); 
  }
  else if (state === "loose"){
    checkHighScore();
    loose();
  }
  
}

//Draws the Score Text
function drawText(){
    fill("white");
    noStroke();
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    textSize(50);
    text(score, width / 2, height /6);
}


function startScreenDisplay(){
  background(startScreen);
  if(keyIsPressed){
    state = "playing";
  }
}


function changeState(){
  //if the bird falls down then end game
  if(yCircle > 550){
    state = "loose";
  }
  //collision detection if bird hits the pillars then end game
  for(let pillars of pillarArray){
    hitup = collideRectRect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUp,xCircle, yCircle, widthCircle, lengthCircle);
    hitdown = collideRectRect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown, xCircle, yCircle, widthCircle, lengthCircle);
    if(hitup || hitdown){
     state = "loose";
   }
   //Checks if the bird is in between pillars and adds the score
   if(xCircle === pillars.x && hitup === false && hitdown === false && state === "playing"){
      score = score + 1;
  } 
  } 
}

function loose(){
  background(gameover);
  textSize(25);
  textFont("Verdana");
  stroke(3);
  text("Score: " + score, width/2, height /2 + 60);
  text("HighScore " + Highscore, width/2, height/2 + 90);
  if(mouseIsPressed){
    //bird goes to the middle of the screen 
    yCircle = 300;
    //array becomes empty
    pillarArray = [];
    //reset state to the start
    state = "before";
    score = 0;
  }
}

function checkHighScore(){
  if(score > Highscore){
    Highscore = score;
  }
}

//displays the bird 
function displayCircle(){
  // circle(xcircle, ycircle, widthcircle);
  image(bird, xCircle, yCircle, widthCircle, lengthCircle);
}


function updateCirle(){
  //makes it so that if you dont click then the bird falls down
  velocity * 0.9;
  velocity += gravity;
  yCircle += velocity;

  if(yCircle > height){
    //doesnt let the bird go down the screen 
    yCircle = height;
    velocity = 0;
  }
  if(yCircle < 0){
    //doesn't let the bird go above the screen
    yCircle = 0;
    velocity = 0;
  }
}

//displays the pillars using images loaded before
function displayPillars(){
  for(let pillars of pillarArray){
    // rect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUP);
    image(pillarUp, pillars.x, pillars.yup, pillars.PillarWidth, pillars.pillarHeightUp);
    // rect(pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
    image(pillarDown, pillars.x, height - pillars.pillarHeightDown, pillars.PillarWidth, pillars.pillarHeightDown);
  }
}

//make pillars move to the left and add a new pillar every 100 frames when the state is playing
function updatePillars(){
  for(let pillars of pillarArray){
    pillars.x -= pillars.speed;
  }
  if (frameCount % 100 === 0){
    spawnPillar();
  }
}

//object notation for each pillar then put them in an array
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

//If the space is pressed then make the bird jump 25 pixels 
function keyPressed(){
  if(key = " "){
    velocity -= gravity * 25; 
  }
}
