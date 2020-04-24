// паттерн создан по подобию эквалайзера в музыкальном проигрывателе, вдохновлялась этим
// программу для рисования линий писала исходя из того, какой результат дает та или иная комбинация

let angle = 12;
let angleInner = 12;

function preload() {
  soundFormats ('mp3', 'ogg');
  ost = loadSound('files/audio1.mp3');
}

function setup() {
  createCanvas(600, 600);
  noFill();
  stroke (255);
  ellipse(width/2, height/2, 40, 40);
  ellipse(width/2, height/2, 25, 25);
  ost.setVolume(55);
  ost.play();
}
  
function draw() {
  background (0, 0, 0); 
  translate (width/2, height/2);
  ellipse(0, 0, 100, 100);
  rotate(angle);
 
  drawLines(0, 360, 8, [215, 142, 150], 180, 290, 3, 50, 50, 0);
  
  rotate(angleInner);
  drawLines(0, 360, 5, [180, 90, 45], 330, 330, 2, 33, 33, 0);
  drawLines(0, 360, 8, [255, 255, 255], 190, 190, 5, 150, 150, 0);
  drawLines(0, 360, 5, [255, 100, 122], 700, 100, 1, 130, 10, 0);
  drawLines(0, 360, 8, [156, 180, 23], 180, 180, 5, 170, 170, 0);
  drawLines(0, 360, 5, [random (0,255), random (0,255),random (0,255)], 340, 180, 3, 170, 170, 0);
  
  angle = angle + 0.003; 
  angleInner = angleInner + 0.004;
  
}

function drawLines(startAngle, endAngle, angleInc, strClr, lenCutX, lenCutY, strW, endX, endY, lengthInc) {
  let inc = 0;
  for (let i = 0; i < endAngle / angleInc; i++) {
    push();
    stroke(strClr[0], strClr[1], strClr[2]);
    strokeWeight(strW);
    translate(0, 0); 
    rotate(radians(startAngle));
    line(width/2 - lenCutX - inc, height/2 - lenCutY - inc, endX, endY);
    pop();
    startAngle += angleInc;
    inc += lengthInc;
  }
}
