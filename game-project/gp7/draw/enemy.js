let enemies = [];

function drawEnemies() {
	for (let e of enemies) {
		e.draw();
		e.check();
	}
}

function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;

	this.currentX = x;
	this.increment = 1;

	this.killed = false;
	this.triggered = false;

	this.update = function() {
		this.currentX += this.increment;

		if (this.currentX >= this.x + this.range) {
			this.increment = -1;
		}
		else if (this.currentX < this.x) {
			this.increment = 1;
		}
	};

	this.draw = function() {
		this.update();

		// Bottom dome
		stroke(0, 10);
		strokeWeight(1);
		fill(112, 224, 0, 200);
		arc(this.currentX + 25, this.y + 10, 65, 65, 0, PI, PIE);

		// Bottom shine
		noStroke();
		fill(255, 120);
		ellipse(this.currentX + 40, this.y + 32, 12, 8);

		// Bottom highlight
		fill(255, 80);
		ellipse(this.currentX + 25, this.y + 40, 12, 5);

		// Top
		stroke(0, 50);
		strokeWeight(1);
		fill(204, 255, 51, 200);
		ellipse(this.currentX + 25, this.y + 10, 110, 15);

		// Metallic shine on top
		noStroke();
		fill(255, 150); 
		ellipse(this.currentX + 25, this.y + 10, 60, 6);

		//Body
		fill(0, 114, 0);
		rect(this.currentX + 12, this.y - 25, 25, 35, 50, 50, 5, 5);

		//Eyes
		stroke(0, 75, 35);
		strokeWeight(1);
		fill(158, 240, 26);
		ellipse(this.currentX + 14, this.y - 30 + 20, 10, 10);
		ellipse(this.currentX + 34, this.y - 30 + 20, 10, 10);
	}

	this.check = function() {
		let isContact = dist(characterX, characterY, this.currentX, this.y) < 60;
		checkDeath(this, isContact);
	}
}