let stars = [];

function drawSky() {
	background(29, 53, 87);
}

function drawStars() {
	for (let s of stars) {
        stroke(235, 233, 224);
        strokeWeight(s.w);
        point(s.x, s.y);
    }
}