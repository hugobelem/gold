let blackholes = [];

function drawBlackhole() {
    for (let b of blackholes) {
        b.draw();
        b.check();
    }
}

function blackhole(x, y=400) {
    this.x = x;
    this.y = y

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
        isWithinBlackhole = characterX > this.x + 40 && characterX < this.x + 150
        isNotJumpping = characterY >= floorY
        if (isWithinBlackhole && isNotJumpping && shrink >= 0) {
            isShrinking = true;
            shrink -= 0.02;
            //Deactivate game character movements
            isLeft = false
            isRight = false;
            isJumping = false;
        }
    }
}