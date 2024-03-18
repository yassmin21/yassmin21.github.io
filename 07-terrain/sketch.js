// terrain generation
// yassmin
// 18 march 24

let terrain = [];
let numberofrects;
let rectwidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numberofrects = width;
  rectwidth = width/ numberofrects;
  generateterrain();
}

function draw() {
  background(220);
  for (let somerect of terrain){
    rect(somerect.x, somerect.y, somerect.w, somerect.h);
  }
}

function generateterrain(){
  let time = 0;
  let deltatime = 0.001;

  for(let x = 0; x< width; x += rectwidth){
    let theheight = noise(time) * height;
    spawnrectangle(x, theheight);
    time += deltatime;
  }
}

function spawnrectangle(leftside, rectheight){
  let thisrect = {
    x: leftside,
    y: height - rectheight,
    w: rectwidth,
    h: rectheight,
  };
  terrain.push(thisrect);
}