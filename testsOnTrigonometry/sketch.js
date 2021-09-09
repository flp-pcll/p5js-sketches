let t = 0;
const numLines = 40;

let colors = {
  r: 0,
  g: 255,
  b: 0,
  alphaVal: 100,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  colorMode(RGB);
}

function draw() {
  background(20);
  stroke(colors.r, colors.g, colors.b, 25);
  strokeWeight(2);
  noFill();

  translate(width/2, height/2);

  for(let i = 0; i < numLines; i++) {
    ellipse(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    // curve(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
  }
  t+= .05;
}

function x1(t) {
  return sin(t/10) * 100 + sin(t/1.5)*2;
}

function y1(t) {
  return cos(t/10) * 10;
}

function x2(t) {
  return sin(t/20) * 100 + sin(t/2)*2;
}

function y2(t) {
  return cos(t/20) * 200 + cos(t/12)*2;
}