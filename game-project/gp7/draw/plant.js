let plantsX = [];

function drawPlants() {
	for (i = 0; i < plantsX.length; i++) {
		push();
		translate(plantsX[i], 0);
		stroke(0);
		strokeWeight(1);
		// Leaves
		fill(217, 237, 146);
		ellipse(415, 280, 8, 15);
		fill(98, 160, 44);
		ellipse(425, 330, 8, 30);
		fill(0, 128, 0);
		ellipse(408, 370, 8, 20);
		// Stem
		fill(112, 200, 10);
		rect(409, 300, 3, 100, 20);
		fill(153, 194, 77);
		rect(416, 250, 8, 152, 20);
		fill(0, 144, 35);
		rect(429, 355, 3, 45, 20);
		// Vase
		fill(210);
		rect(400, 400, 40, 40, 5);
		fill(220);
		rect(397, 400, 46, 10, 5);
		fill(150);
		rect(399, 409, 42, 2, 5);
		pop();
	}
}