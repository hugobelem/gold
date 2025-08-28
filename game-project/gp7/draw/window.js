let windowsX = [];

function drawWindows() {
	for (i = 0; i < windowsX.length; i++) {
		stroke(138, 141, 145, 100);
		strokeWeight(10);
		fill(29, 53, 87);
		rect(windowsX[i], 165, 75, 75, 20);
		noStroke();
	}
}