let blackholes = [];

function drawBlackhole() {
    for (let b of blackholes) {
        b.draw();
        b.check();
    }
}

function Blackhole(x, y=400) {
    this.x = x;
    this.y = y
    this.killed = false;
    this.triggered = false;

    this.draw = function() {
        push();
        translate(-cameraX, 0);
        //Outer layer
        noStroke();
        fill(202, 240, 248, 150);
        rect(this.x + 30, this.y + 10, 120, 120, 40);

        //Middle layer
        stroke(0, 119, 182, 100);
        strokeWeight(25);
        fill(29, 53, 87);
        rect(this.x + 50, this.y + 30, 80, 80, 25);

        //Center
        noStroke();
        rect(this.x + 60, this.y + 40, 60, 60, 15);
        pop();
    }

    this.check = function() {
        checkDeath(this.x, 120, this)
    }
}