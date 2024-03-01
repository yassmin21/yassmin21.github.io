// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis
let isRed = false;
let isYellow = false;
let isGreen = false;

function setup(){
  createCanvas(100, 300);
  redTime = 3000;
  yellowTime= 2000;
  greenTime = 1000;
}

function draw() {
  background(255);
  drawOutlineOfLights();
   greenlight();
   yellowlight();
   redlight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);  
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function redlight(){
   if(millis() > redTime && isGreen === false){
    isRed = true;
  }
   if(isRed){
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
     isYellow = false;
  }
}
function yellowlight(){
   if(millis() > yellowTime && isRed === false ){
     isYellow= true;
  }
  if(isYellow){
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
    isGreen = false;
  }
}
function greenlight(){
   if(millis() > greenTime && isYellow === false && isRed === false){
    isGreen = true;
  }  
  if(isGreen){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
    isYellow = false;

  }
}
