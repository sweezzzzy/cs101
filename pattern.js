function setup() {
  createCanvas (600, 600);
  background (0, 0, 0);
  stroke (255, 255, 255);
  ellipse (width/2, height/2, 40, 40);
  ellipse (width/2, height/2, 25, 25);
  
  let angle=12;
  
  translate (width/2, height/2);
  for (let i = 0; i < 360 / angle; i++) {
    stroke (255, 100, 122);
    rotate (radians (angle));
    line (40, 0, 150, 50);
    
    push ();
    stroke (215, 142, 150);
    strokeWeight (3);
    line (width/2 - 180, height/2 - 290, 50, 50);
    pop ();
    
    push ();
    stroke(180, 90, 45);
    strokeWeight (3);
    line (width/2 - 330, height/2 - 330, 33, 33);
    pop ();
    
    push ();
    stroke (255, 255, 255);
    strokeWeight (5);
    line (width/2 - 190, height/2 - 190, 150, 150);
    pop ();
    
    push ();
    stroke (156, 180, 23);
    strokeWeight (5);
    line (width/2 - 180, height/2 - 180, 170, 170);
    pop ();
    
    push ();
    stroke (random (0,255), random (0,255),random (0,255));
    strokeWeight (3);
    line (width/2 - 340, height/2 - 180, 170, 170);
    pop ();
 
  }
}
