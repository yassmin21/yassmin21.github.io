// connected nodes OOP demo

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let somePoint = new MovingPoint(width/2, height/2);
  points.push(somePoint);
}

function draw() {
  background("black");

  //draw the lines first
  for(let point of points){
    point.update();
    point.connectTo(points);
  }

  //draw the circles after
  for(let point of points){
    point.display();
  }
}

class MovingPoint{
  constructor(x, y){
    this.speed = 5;
    this.radius = 15;
    this.maxRadius = 50;
    this.minRadius = 15;
    this.reach = 150;
    this.x = x;
    this.y = y;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.colour = color(random(255), random(255), random(255));
  }
  
  display(){
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  update(){
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeWithMouse();
  }

  connectTo(pointsArray){
    for(let otherPoint of pointsArray){
      //avoid drawing line to same point
      if(this !== otherPoint){
        let pointDistance = dist(this.x, this.y, otherPoint.x, otherPoint.y);
        if(pointDistance < this.reach){
          stroke(this.colour);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }

  adjustSizeWithMouse(){
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if(mouseDistance < this.reach){
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }
    else{
      this.radius = this.minRadius;
    }
  }

  wrapAroundScreen(){
    //wrap around the screen if you fall off
    if(this.x > width){
      this.x -= width;
    }
    else if(this.y > height){
      this.y -= height;
    }
    else if(this.x < 0){
      //fell off left size
      this.x += width;
    }
    else if(this.y < 0){
      this.y += height;
    }
  }
  move(){
    //pick random direction of movement
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //scale the movement speed
    this.dx = map(dx, 0, 1, -this.speed, this.speed);
    this.dy = map(dy, 0 , 1, -this.speed, this.speed);

    //move the points
    this.x += this.dx;
    this.y += this.dy;

    // this.x = noise(this.xTime) * width;
    // this.y = noise(this.yTime) * height;

    //move on the graph
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;

  }
}

function mousePressed(){
  let somePoint = new MovingPoint(mouseX, mouseY);
  points.push(somePoint);
}