var rectX = [];
var rectY = [];

var r, g, b;

function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');

}

function draw() {
  background(255);
  text('start clicking!',400,125);
  textAlign(CENTER);
  textSize(18);

  noStroke();
  rectMode(CENTER);

  r = random(255);
  g = random(255);
  b = random(255);

  for (var i = 0; i < rectY.length; i++) {
    rect(rectX[i], rectY[i], 50, 25);
    rectY[i] += 1;
  }
}

function mousePressed() {
  rectX.push(mouseX);
  rectY.push(mouseY);
  fill(r, g, b);
}
