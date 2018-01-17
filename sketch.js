
function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');

  background(255,255,0);
}

function draw() {
  if (mouseIsPressed) {
    fill(250,200,0);
  } else {
    fill(255);
  }
  rect(mouseX,mouseY,310,80);
}
