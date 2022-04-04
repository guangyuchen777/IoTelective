let point1x = [];
let point1y = [];
let point2x = [];
let point2y = [];

let centerX; 
let centerY; 
let deg = 360;
let hour=0;

let w = window.innerWidth;
let h = window.innerHeight;

function setup() {  createCanvas(w,h);
 smooth();
 noStroke();
 let multp     = 100;
 centerX   = width/2; 
 centerY   = height/2; 
                  
 for (let i = 0; i< 361;i++)
  {
    point1x[i] = centerX + (cos(radians(i)) * multp); 
    point1y[i] = centerY + (sin(radians(i)) * multp);

    point2x[i] = centerX + (cos(radians(i - 2)) * multp); 
    point2y[i] = centerY + (sin(radians(i - 2)) * multp);
  }
                  
                  
}

function draw() {
  background(255);
  fill(0);
  ellipse(w/2, h/2, 200, 200);
  
  deg = map( mouseY, 0, h, 0, 360);

  noStroke();
  fill(255, 227, 13, 100);
  for (let i = 0; i< deg;i++)
  {
    triangle(centerX, centerY, point1x[i], point1y[i], point2x[i], point2y[i]);
  }
  
   // inner circle
  noStroke();
  fill(0);
  ellipse(centerX, centerY, 130, 130);
  noFill();
  stroke(0);
  strokeWeight(6);
  //border
  ellipse(w/2, h/2, 200, 200);
  
  fill(0)
   .strokeWeight(0)
   .textSize(10);
  textFont('Helvetica', 40);
  hour = map( deg, 0, 360, 0, 24);
  text(nf(hour, 2,1)+ ' '+ 'h', w/2 - textWidth(nf(hour, 2,1))/2, h -100);
}