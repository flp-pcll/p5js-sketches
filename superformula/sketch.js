let t = 0;
let redVal = 255;
let colorTax = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // noFill();
  fill(redVal, 0, 255);
  strokeWeight(1);
  translate(width/2, height/2);

  // beginShape();
  // for(let theta = 0; theta <= 2 * PI; theta += 0.01) {
  //   //m = 25 é o perfeito / a = mouseX/100; b = mouseY/100;
  //   let rad = r(theta, 2, 2, 20, 1, sin(t)*.5+2, cos(t)*.5+1);
  //   let x = rad * cos(theta) * 50;
  //   let y = rad * sin(theta) * 50;
  //   vertex(x, y);
  // }
  // endShape();

  beginShape();
  for(let theta = 0; theta <= 2 * PI; theta += 0.01) {
    //m = 25 é o perfeito / a = mouseX/100; b = mouseY/100;
    let rad = r(theta, 1.5, 1.5, 35, 1, sin(t)*.5+2, cos(t)*.5+2);
    let x = rad * cos(theta) * 50;
    let y = rad * sin(theta) * 50;
    vertex(x, y);
  }
  endShape();

  t += 0.05;
  redVal -= colorTax;

  if(redVal === 0) {
    redVal += colorTax;
  }
}

function r(theta, a, b, m, n1, n2, n3) {
  return pow(pow(abs(cos(m * theta / 4) / a), n2) + pow(abs(sin(m * theta / 4) / b), n3), -1/n1);
}
