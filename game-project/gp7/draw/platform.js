let platforms = [];
let isCharacterOnPlatform = false;

function drawPlatforms() {
    for (let p of platforms) {
        p.draw();
        p.check();
    }
}

function platform(x, y) {
    var p = {
        x: x,
        y: y,

        draw: function() {
            //Outer box
            stroke(64, 61, 57);
            strokeWeight(1);
            fill(204, 197, 185);
            rect(this.x, this.y, 50, 30, 5);

            //Inner box
            fill(204, 197, 185);
            rect(this.x + 5, this.y + 5, 40, 20, 2.5);

            //Middle X
            stroke(64, 61, 57, 100);
            strokeWeight(5);
            line(this.x + 42, this.y + 7, this.x + 7, this.y + 22);
        },

        check: function() {
            let isWithinX = characterX > this.x && characterX < this.x + 50;
            let isAboveY = characterY >= this.y - 50 && characterY < this.y + 50;
            let isFallingDown = jumpingHeight > 0;
            let jumpLimit = characterY - this.y < 0
            
            if (isWithinX && isAboveY && isFallingDown && jumpLimit) {
                isCharacterOnPlatform = true;
                characterY = this.y - 50;
                jumpingHeight = 0;
                isFalling = false;
            }
        }
    }
    return p;
}