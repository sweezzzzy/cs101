//управление фигурой девочки стрелками
// шар движется самопроизвольно
// принцип движения фигуры: не столкнуться с шаром
let vel;
let pos;
let acc;
let thrust;
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(400, 400);
  vel = createVector (0, 0);
  pos = createVector (width/2, height/2);
  acc = createVector (0, 0);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width/2;
  ypos = height/2;
}

function draw() {
  background(255, 100, 122);

  
  if (keyIsDown(UP_ARROW)) {
    thrust = createVector (0, -0.2);
    acc.add (thrust);
  }
  else  if (keyIsDown(DOWN_ARROW)) {
    thrust = createVector (0, 0.2);
    acc.add (thrust);
  }
  else  if (keyIsDown(RIGHT_ARROW)) {
    thrust = createVector (0.2, 0);
    acc.add (thrust);
  }
  else  if (keyIsDown(LEFT_ARROW)) {
    thrust = createVector (-0.2, 0);
    acc.add (thrust);
  }
  else {
    vel.mult (0.95);
  }
  
  
  vel.add (acc);
  pos.add (vel);
  push ();
  translate (pos.x, pos.y);
  rect (-10, -10, 20, 20);
  triangle (-12, 40, 0, 10, 12, 40);
  line (-3, 40, -3, 50);
  line (3, 40, 3, 50);
  line (-5, 20, -15, 20);
  line (5, 20, 15, 20);
  
  pop ();
  
  acc.mult (0);
  vel.limit(20);
  
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}

