// flappy bird
// Yassmin Ibrahim
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - I added music by using p5 sound library and added a slider to control the volume of the music. Also I learnt how to stop and start the music depending on the state.


let pillarArray = [];
let music;
let slider;
let score = 0;
let HighScore = 0;
let state = "before";
let hitUp = false;
let hitDown = false;

//Circle values
let xBird = 50;
let yBird = 300;
let widthBird = 50;
let lengthBird = 40;

//values to make the bird fall
let gravity = 0.3;
let velocity = 0;

//loading all sounds and images before the game starts
function preload() {
  img = loadImage('background flappy.png');
  bird = loadImage('flappybird2.png');
  pillarUp = loadImage('pillarup.png');
  pillarDown = loadImage('pillardown.png');
  gameOver = loadImage('GAME OVER.png');
  startScreen = loadImage('startscreen.png');
  music = loadSound('music.mp3');
}

function setup() {
  createCanvas(400, 600);
  //slider to control sound volume
  slider = createSlider(0, 1, 0.5, 0.01);
  //when to play music
  if(state === "before" || state === "playing"){
    music.loop();
  }
  //text font and colour for all text
  textFont("Verdana");
  textAlign(CENTER, CENTER);
  fill("white");
  textStyle("BOLD");
}

function draw() {
  music.setVolume(slider.value());
  changeState(); 
  //if statements to determine state
  if(state === "before"){
    startScreenDisplay();
  }
  else if(state === "playing"){ 
    background(img);
    displayPillars();
    updatePillars();
    displayBird();
    updateBird(); 
    drawText();
    
  }
  else if (state === "loose"){
    checkHighScore();
    loose();
  }
  
}

//Draws the Score Text as game is playing
function drawText(){
    noStroke();
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
  if(state === "playing" && yBird > 550){
    state = "loose";
  }
  //collision detection if bird hits the pillars then end game
  for(let pillars of pillarArray){
    hitUp = collideRectRect(pillars.x, pillars.yup, pillars.PillarWidth, pillars.topPillar, xBird, yBird, widthBird, lengthBird);
    heightBottomPillar = height - 180 - pillars.topPillar;
    yBottomPillar = height - heightBottomPillar;
    hitDown = collideRectRect(pillars.x, yBottomPillar, pillars.PillarWidth, heightBottomPillar, xBird, yBird, widthBird, lengthBird);
    if(state === "playing" && hitUp || hitDown){
     state = "loose";
   }
   //Checks if the bird is in between pillars and adds the score
   if(xBird === pillars.x && hitUp === false && hitDown === false && state === "playing"){
      score = score + 1;
  } 
  } 
  if(state === "loose" && mouseIsPressed){
    music.play();
    //bird goes to the middle of the screen 
    yBird = 300;
    //array becomes empty
    pillarArray = [];
    //reset state to the start
    state = "before";
    score = 0;
  }
}

function loose(){
  background(gameOver);
  //displays the scrore and high score
  textSize(25);
  stroke(3);
  text("Score: " + score, width/2, height /2 + 60);
  text("HighScore " + HighScore, width/2, height/2 + 90);
  //pauses music when you loose
  music.pause();
}

//checks if the score is higher than the current high score and makes the high score the score
function checkHighScore(){
  if(score > HighScore){
    HighScore = score;
  }
}

//displays the bird 
function displayBird(){
  image(bird, xBird, yBird, widthBird, lengthBird);
}


function updateBird(){
  //makes it so that if you dont click then the bird falls down
  velocity * 0.9;
  velocity += gravity;
  yBird += velocity;

  if(yBird > height){
    //doesnt let the bird go down the screen 
    yBird = height;
    velocity = 0;
  }
  if(yBird < 0){
    //doesn't let the bird go above the screen
    yBird = 0;
    velocity = 0;
  }
}

//displays the pillars using images loaded before
function displayPillars(){
  for(let pillars of pillarArray){
    image(pillarUp, pillars.x, pillars.yup, pillars.PillarWidth, pillars.topPillar);
    //calculates the height and y coordinate of the bottom pillar
    heightBottomPillar = height - 180 - pillars.topPillar;
    yBottomPillar = height - heightBottomPillar;
    image(pillarDown, pillars.x, yBottomPillar, pillars.PillarWidth, heightBottomPillar);
  }
}

//make pillars move to the left and add a new pillar every 110 frames
function updatePillars(){
  for(let pillars of pillarArray){
    pillars.x -= pillars.speed;
  }
  if (frameCount % 110 === 0){
    spawnPillar();
  }
}

//object notation for each pillar then put them in an array
function spawnPillar(){
  let pillar ={
    x: width,
    yup: 0,
    PillarWidth: 50,
    topPillar: random(50, height - 180),
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
