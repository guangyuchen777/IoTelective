let point1x = [];
let point1y = [];
let point2x = [];
let point2y = [];

let point11x = [];
let point11y = [];
let point12x = [];
let point12y = [];

let point21x = [];
let point21y = [];
let point22x = [];
let point22y = [];

let point31x = [];
let point31y = [];
let point32x = [];
let point32y = [];

let centerX; 
let centerY; 
let deg = 0;
let hour=0;
let d=420;

let w = window.innerWidth;
let h = window.innerHeight;

let y = -1200;
let snowflakes = 400;
let screen = 0;
let screenE = 0;
let slider;

let d2=650;

function setup() {  
 createCanvas(w,h);
 smooth();
 noStroke();
 let multp     = d/2;
 centerX   = w/2; 
 centerY   = h/2; 
                  
 for (let i = 0; i< 361;i++)
  {
    point1x[i] = centerX + (cos(radians(i+200)) * multp); 
    point1y[i] = centerY + (sin(radians(i+200)) * multp);

    point2x[i] = centerX + (cos(radians(i+200 - 2)) * multp); 
    point2y[i] = centerY + (sin(radians(i+200 - 2)) * multp);
  }
                  
    // slider = createSlider(0, 255, 200);
    // slider.position(centerX-200, centerY);
    // slider.style('width', '400px');
    
    // slider2 = createSlider(0, 255, 233);
    // slider2.position(centerX-200, centerY+80);
    // slider2.style('width', '500px');

    // slider3 = createSlider(0, 255, 222);
    // slider3.position(centerX-200, centerY+160);
    // slider3.style('width', '450px');

    slider = createSlider(0, 255, 140);
    slider.position(w-150, h-60);
   
    
    slider2 = createSlider(0, 255, 150);
    slider2.position(w-150, h-50);
   

    slider3 = createSlider(0, 255, 120);
    slider3.position(w-150, h-40);

for (let i = 0; i< 361;i++)
  {
    point11x[i] = w/4 + (cos(radians(i+270)) * (d2/2)); 
    point11y[i] = centerY + (sin(radians(i+270)) * (d2/2));

    point12x[i] = w/4 + (cos(radians(i+270 - 2)) * (d2/2)); 
    point12y[i] = centerY + (sin(radians(i+270 - 2)) * (d2/2));
  }

  for (let i = 0; i< 361;i++)
  {
    point21x[i] = 3*w/4 + (cos(radians(i+270)) * (d2/2)); 
    point21y[i] = centerY + (sin(radians(i+270)) * (d2/2));

    point22x[i] = 3*w/4 + (cos(radians(i+270 - 2)) * (d2/2)); 
    point22y[i] = centerY + (sin(radians(i+270 - 2)) * (d2/2));
  }


//   for (let i = 0; i< 361;i++)
//   {
//     point31x[i] = 5*w/6 + (cos(radians(i+270)) * (d2/2)); 
//     point31y[i] = centerY + (sin(radians(i+270)) * (d2/2));

//     point32x[i] = 5*w/6 + (cos(radians(i+270 - 2)) * (d2/2)); 
//     point32y[i] = centerY + (sin(radians(i+270 - 2)) * (d2/2));
//   }
    
}



function draw() {
    if (screen ==0) {
  background(0);
  slider.hide();
  slider2.hide();
  slider3.hide();
  fill(255);
  ellipse(w/2, h/2, d, d);
  
  deg = map( mouseY, 0, h, 0, 360);

  noStroke();
  fill(2, 227, 13, 250);
  for (let i = 0; i< deg;i++)
  {
    triangle(centerX, centerY, point1x[i], point1y[i], point2x[i], point2y[i]);
  }
  
   // inner circle
  noStroke();
  fill(0);
  ellipse(centerX, centerY, d-90, d-90);
  noFill();
  stroke(255);
  strokeWeight(6);
  //border
  ellipse(w/2, h/2, d, d);
  
  fill(255)
   .strokeWeight(0)
   .textSize(10);
  textFont('Helvetica', 80);
  hour = map( deg, 0, 360, 0, 24);
  text('Study Mode', w/2 - textWidth('Study Mode')/2, 120);
  textFont('Helvetica', 30);
  text('Now I am going to study for', w/2 - textWidth('Now I am going to study for')/2, 170);
//   text(screen, 100, 100);
  textFont('Helvetica', 80);
  text(nf(hour, 2,1)+ ' '+ 'h', w/2 - textWidth(nf(hour, 2,1)+ ' '+ 'h')/2, centerY+d/15);
  
}

 if (screen == 1) {
    background(0);
    slider.hide();
    slider2.hide();
    slider3.hide();
    frameRate(5);
    noStroke();
    for (let s = 0; s < snowflakes; s++) {
    circle(random(w), y + random(1200), random(7, 13));
    }
    y += 30;

    if (y > 0) {
    y = -600;
    }

    if (screenE == 2) {
        fill(2, 227, 13, 250)
    .strokeWeight(6)
    .textSize(10);
    textFont('Helvetica', 100);
    text('Shoot towards where you study!', w/2 - textWidth('Shoot towards where you study')/2, centerY);
    }

}

 if (screen == 3) {
    background(0);
    slider.show();
    slider2.show();

    fill(255)
    .strokeWeight(0)
    .textSize(10);
    textFont('Helvetica', 50);
    text('Adjustable Air Quality', w/2 - textWidth('Adjustable Air Quality')/2, 80);
    text('parameters', w/2 - textWidth('parameters')/2, 130);
    
    // textFont('Helvetica', 35);
    // text('CO2', centerX-200 - textWidth('CO2')-40, centerY+15);
    // text('Humidity', centerX-200 - textWidth('Humidity')-40, centerY+95);
    // text('PM', centerX-200 - textWidth('PM')-40, centerY+175);

    fill(255);
    ellipse(w/4, centerY, d2, d2);
    fill(200);
    arc(
      w/4,
      centerY,
      d2,
      d2,
      0,
      radians(180)
    );
    let val1 = slider.value();
    deg1 = map( val1, 0, 255, 0, 360); 
    noStroke();
    fill(100);
    for (let i = 0; i< deg1;i++)
    {triangle(w/4, centerY, point11x[i], point11y[i], point12x[i], point12y[i]);}
     // inner circle
    noStroke();
    fill(0);
    ellipse(w/4, centerY, d2-120, d2-120);
    noFill();
    stroke(255);
    strokeWeight(6);
    //border
    ellipse(w/4, centerY, d2, d2);
    fill(255)
   .strokeWeight(0)
   .textSize(10);
    textFont('Helvetica', 60);
    text('CO2', w/4 - textWidth('CO2')/2, centerY);
    


    fill(255);
    ellipse(3*w/4, centerY, d2, d2);
    fill(200);
    arc(
      3*w/4,
      centerY,
      d2,
      d2,
      0,
      radians(150)
    );
    let val2 = slider2.value();
    deg2 = map( val2, 0, 255, 0, 360); 
    noStroke();
    fill(100);
    for (let i = 0; i< deg2;i++)
    {triangle(3*w/4, centerY, point21x[i], point21y[i], point22x[i], point22y[i]);}
     // inner circle
    noStroke();
    fill(0);
    ellipse(3*w/4, centerY, d2-120, d2-120);
    noFill();
    stroke(255);
    strokeWeight(6);
    //border
    ellipse(3*w/4, centerY, d2, d2);
    fill(255)
   .strokeWeight(0)
   .textSize(10);
    textFont('Helvetica', 60);
    text('Humidity', 3*w/4 - textWidth('Humidity')/2, centerY);



//     fill(255);
//     ellipse(5*w/6, centerY, d2, d2);
//     let val3 = slider3.value();
//     deg3 = map( val3, 0, 255, 0, 360); 
//     noStroke();
//     fill(100);
//     for (let i = 0; i< deg3;i++)
//     {triangle(5*w/6, centerY, point31x[i], point31y[i], point32x[i], point32y[i]);}
//      // inner circle
//     noStroke();
//     fill(0);
//     ellipse(5*w/6, centerY, d2-90, d2-90);
//     noFill();
//     stroke(255);
//     strokeWeight(6);
//     //border
//     ellipse(5*w/6, centerY, d2, d2);
//     fill(255)
//    .strokeWeight(0)
//    .textSize(10);
//     textFont('Helvetica', 35);
//     text('PM', 5*w/6 - textWidth('PM')/2, centerY+ d2/2+60);
    
}

}


function keyTyped() {
    if (key === '0') {
    screen = 0;
    } else if (key === '1') {
    screen = 1;
    } else if (key === '2') {
        screenE = 2;
    } else if (key === '3') {
        screen = 3;
    }
  }

