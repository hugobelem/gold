let collectables = [];

function drawCollectables() {
	for (let c of collectables) {
		if (!c.isFound) {
			c.draw();
			c.check();
		}
	}
}

function Collectable(x=400, y=366, isFound=false) {
	this.x = x;
	this.y = y;
	this.isFound = isFound;

	this.draw = function() {
		if (!this.isFound) {
			//Light Rays
			noStroke();
			fill(244, 211, 94, 25);
			ellipse(this.x, this.y, 80, 85);
			fill(244, 211, 94, 50);
			ellipse(this.x, this.y, 55, 60);

			//Bubble
			stroke(238, 150, 75, 150);
			strokeWeight(1);
			fill(244, 211, 94, 40);
			ellipse(this.x, this.y, 40, 45);

			//Light Reflection
			noStroke();
			fill(255, 80);
			ellipse(this.x + 5, this.y - 17, 10, 6);
			ellipse(this.x + 18, this.y - 1, 2, 15);
			
			//Shadow
			noStroke();
			fill(244, 211, 94, 200);
			ellipse(this.x, this.y + 17, 14, 4);

			//Emoji
			noStroke();
			textSize(16);
			text("🐣", this.x - 10, this.y + 7);
		}
	}

	this.check = function() {
		if (dist(characterX, characterY, this.x, this.y) < 25) {
			collectSound.play();
			this.isFound = true;
			score++;
		}
	}
}