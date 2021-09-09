let p = 1;
let z = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0, 6);
  translate(width/2, height/2);
  stroke(255, 0, 0);
  strokeWeight(.5);
  noFill();

  beginShape();
  for (let i = 0; i < TAU; i += .1) {
    r = noise(.3 * cos(i + p) + 3, .8 * sin(i + p) + 5, z) * 150 + 100;
    vertex(r * cos(i), r * sin(i));
  }
  endShape(CLOSE);

  p += .008;
  z += .008;
}

function mouseClicked() {
  background(0, 0, 0);
}

