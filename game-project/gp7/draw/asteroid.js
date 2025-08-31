let asteroids = [];

function drawAsteroids() {
    for (let a of asteroids) {
      a.draw();
      a.rotate();
    }
}

function Asteroid(x, y, s=1) {
  this.s = s;
  this.angle = random(TWO_PI);
  this.vector = createVector(x, y)
  this.rotation = random(-0.03, 0.03);
  this.speed = p5.Vector.random2D().mult(random(0.2, 1.2));

  this.rotate = function() {
    this.vector.add(this.speed);
    this.angle += this.rotation;
  }

  this.draw = function() {
      noStroke();
      
      push();
      translate(this.vector.x, this.vector.y);
      scale(this.s);
      rotate(this.angle);

      //Body
      fill(150, 130, 100);
      beginShape();
      curveVertex(40, 0);
      curveVertex(25, -30);
      curveVertex(-5, -40);
      curveVertex(-35, -25);
      curveVertex(-40, 5);
      curveVertex(-20, 35);
      curveVertex(15, 30);
      curveVertex(35, 10);
      endShape(CLOSE);

      //Shading
      fill(110, 95, 80, 140);
      ellipse(15, 15, 18, 12);

      //Craters
      fill(100, 85, 70, 180);
      ellipse(-12, -5, 12, 8);

      //Highlights
      fill(235, 233, 224, 180);
      ellipse(-20, -20, 18, 12);
      pop();
  }
}