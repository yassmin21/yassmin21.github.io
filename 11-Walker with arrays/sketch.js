// Walker OOP

class Walker{
  constructor(x, y, theColour){
    this.x = x;
    this.y = y;
    this.stepSize = 10;
    this.colour = theColour;
    this.radius = 5;
  }

  display(){
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  move(){
    let choice = random(100);
    if(choice< 25){
      //move up
      this.y -= this.stepSize;
    }
    else if(choice < 50){
      //move down
      this.y += this.stepSize;
    }
    else if(choice < 75){
      //move right
      this.x += this.stepSize;
    }
    else{
      //move left
      this.x -= this.stepSize;
    }
  }
}

let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for(let someWalker of theWalkers){
    someWalker.move();
    someWalker.display();
  }
  
}

function mousePressed(){
  let theColour = color(random(255), random(255), random(255));
  let myWalker = new Walker(mouseX, mouseY, theColour);
  theWalkers.push(myWalker);
}