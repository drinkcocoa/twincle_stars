function setup() {
  createCanvas(960, 960);
  frameRate(60);
  noStroke();
  background(30, 20, 50); //gradient
  blendMode(OVERLAY);
}

function draw() {
  if (mouseIsPressed) {
    let ran = random(5, 7);
    ran = int(ran);
    fill(230, 240, 230);
    star(mouseX, mouseY, 6, 13, ran);
  }
  if (keyIsPressed) {
    for (cnt = 0; cnt < 70; cnt++) {
      let r1 = random(-70, 70);
      let r2 = random(-70, 70);
      let r_value = random(70, 140);
      let g_value = random(100, 230);
      let b_value = random(100, 240);
      let size = random(1, 4);
      fill(r_value, g_value, b_value);
      ellipse(mouseX + r1, mouseY + r2, size);
    }
  }
}

function star(x, y, radius_S, radius_L, npoints) {
  let angle = 2 * PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 2 * PI; a += angle) {
    let sx = x + cos(a) * radius_L;
    let sy = y + sin(a) * radius_L;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius_S;
    sy = y + sin(a + halfAngle) * radius_S;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
