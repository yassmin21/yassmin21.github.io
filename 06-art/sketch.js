// generative art demo
// mar 15 2024

let tilesize = 10;
let thetiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let y = 0; y < height; y+= tilesize){
    for(let x = 0; x < width; x += tilesize){
      let sometile = spawntile(x, y);  
      thetiles.push(sometile);
    }
  }
  
}

function draw() {
  background(220);

  for(let sometile of thetiles){
    line(sometile.x1, sometile.y1, sometile.x2, sometile.y2);   
  }
}

function spawntile(x, y){
  let choice = random(100);
  let tile;
 
  if (choice> 50){
    //negative slope
    tile = {
      x1: x - tilesize/2,
      y1: y - tilesize/2,
      x2: x + tilesize/2,
      y2: y + tilesize/2,
    };

  }
  else{
    //positive slope
    tile = {
      x1: x - tilesize/2,
      y1: y + tilesize/2,
      x2: x + tilesize/2,
      y2: y - tilesize/2,
    };
  }

  return tile;
}