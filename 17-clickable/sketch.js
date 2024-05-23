// clickable demo

let startBotton;
let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
  startBotton = new Clickable();
  startBotton.locate(300, 300);
  startBotton.resize(150, 45);
  startBotton.onPress = startBottonPressed;
}

function draw() {
  
  if (state === "start"){
    background(220);
  }
  else{
    background(0);
  }
  startBotton.draw();
  
}

function startBottonPressed(){
  state = "gamePlay";
}