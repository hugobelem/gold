let plantsX = [];

function drawPlants() {
	for (i = 0; i < plantsX.length; i++) {
		push();
		translate(plantsX[i], 0);
		stroke(0);
		strokeWeight(1);
		// tree
		fill(98, 160, 44);
		ellipse(420, 330, 8, 30);
		ellipse(428, 370, 8, 20);
		fill(153, 194, 77);
		rect(422, 300, 5, 100, 20);
		// vase
		fill(210);
		rect(400, 391, 50, 50, 5);
		fill(220);
		rect(397, 391, 56, 20, 5);
		fill(255, 195, 0);
		rect(399, 409, 52, 2, 5);
		pop()
	}
}