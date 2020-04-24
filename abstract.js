function setup() {
  createCanvas(450, 450);
  background (random (0, 255), random (0, 255), random(0, 255));
  
  for (let i = 0; i < 50; i ++) {
    noStroke ();
    let cx = random (0, width);
    let cy = random (0, height);
    if (cy > height/2) {
       fill (255, 0, 0);
       ellipse (cx, cy, 10, 10);
        }
    else {
      fill (0, 0, 255);
      rect (cx, cy, 10, 10);
    }
  }
  
  stroke (255, 0, 255);
  strokeWeight (1);
  let x = 0;
  for (let i = 0; i < 50; i = i + 1) {
    line (430, 430, i*5, random (200, 300));
  }
  
  stroke (225, 100, 169);
  strokeWeight (3);
  fill (0, 0, 0);
  arc (35, 280, 65, 150, QUARTER_PI, PI);
  
  stroke (156,174,23);
  strokeWeight (3);
  fill (255,255,255);
  rectMode (CENTER);  
  rect (width/2, height/2, random (35, 50), random (25, 60));
  
  stroke (214, 162, 58);
  strokeWeight (3);
  fill (random (0, 255));
  triangle (85, 200, 120, 250, 180, 230);

  stroke (16, 183, 255);
  strokeWeight (3);
  fill (random (0,255));
  beginShape ();
  vertex (random (15, 40), 245);
  vertex (35, random (225, 255));
  vertex (random (10, 50), 260);
  vertex (65, random (210, 250));
  endShape (CLOSE);
  
  stroke (0, random (0, 255), 0);
  strokeWeight (4);
  fill ( 255, 255, 255);
  ellipse (50, 180, 45, 45);
  
  fill (0, 0, 0);
  ellipse (50, 180, 25, 25);
   
  stroke (random (0, 255), 0, 0);
  noStroke ();
  fill (0, random (0, 255), 0);
  ellipse (50, 180, 10, 10);
  
  stroke (255, 0, 255);
  strokeWeight (3);
  fill (111, 250, 0);
  ellipse (random (200,400), random (100, 300), 50, 50);
  
  stroke (255, 0, 255);
  strokeWeight (3);
  fill (0, 255, 138);
  ellipse (random (200, 400), random (100, 300), 50, 50);

}