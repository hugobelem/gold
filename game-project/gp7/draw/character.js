let shrink = 0.4;
let isShrinking = false;

function drawCharacter(x, y) {
	if(isLeft && isFalling)
	{
		drawChickenJumpingLeft(x, y);
	}
	else if(isRight && isFalling)
	{
		drawChickenJumpingRight(x, y);
	}
	else if(isLeft) 
	{
		drawChickenWalkingLeft(x, y);
	}
	else if(isRight)
	{
		drawChickenWalkingRight(x, y);
	}
	else if(isFalling || isShrinking) 
	{
		drawChickenFrontFacingJumping(x, y)
	}
 	else
	{
		drawChickenFrontFacing(x, y);
	}
}

function drawChickenFrontFacing(x, y) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(0, 90, -20, 120);
	line(0, 90, 20, 120);
	noStroke();

	// wings
	fill(250, 221, 60);
	rect(-80, 10, 50, 50, 15);
	fill(255, 195, 0);
	rect(-75, 15, 50, 50, 15);

	fill(250, 221, 60);
	rect(30, 10, 50, 50, 15);
	fill(255, 195, 0);
	rect(25, 15, 50, 50, 15);

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, 0, 100, 110, 20);

	// head
	fill(255, 195, 0);
	rect(-40, -54, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -60, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -30, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(-20, -20, 14, 20);
	fill(255, 250);
	ellipse(-20, -25, 5, 4);
	fill(50);
	ellipse(20, -20, 14, 20);
	fill(255, 250);
	ellipse(20, -25, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(0, 0, 14, 20);
	fill(255, 165, 0);
	ellipse(0, -5, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -60, 20, 20);
	ellipse(0, -65, 20, 20);

	pop();
}

function drawChickenFrontFacingJumping(x=200, y=410) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(-20, 40, -20, 70);
	line(20, 40, 20, 70);
	noStroke();

	// wings
	fill(250, 221, 60);
	rect(-95, -45, 50, 50, 15);
	fill(255, 195, 0);
	rect(-85, -35, 50, 50, 15);

	fill(250, 221, 60);
	rect(45, -45, 50, 50, 15);
	fill(255, 195, 0);
	rect(35, -35, 50, 50, 15);

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, -50, 100, 110, 20);

	// head
	fill(255, 195, 0);
	rect(-40, -104, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -110, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -80, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(-20, -70, 14, 20);
	fill(255, 250);
	ellipse(-20, -75, 5, 4);
	fill(50);
	ellipse(20, -70, 14, 20);
	fill(255, 250);
	ellipse(20, -75, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(0, -50, 14, 20);
	fill(255, 165, 0);
	ellipse(0, -55, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -110, 20, 20);
	ellipse(0, -115, 20, 20);

	pop();
}

function drawChickenWalkingLeft(x=200, y=410) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(0, 90, 0, 120);
	noStroke();

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, 0, 100, 110, 20);

	// wings
	fill(235, 94, 40);
	rect(-10, 15, 50, 50, 15);
	fill(255, 195, 0);
	rect(-5, 25, 50, 50, 15);

	// head
	fill(255, 195, 0);
	rect(-40, -64, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -70, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -30, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(-20, -20, 14, 20);
	fill(255, 250);
	ellipse(-22, -25, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(-40, 0, 14, 20);
	fill(255, 165, 0);
	ellipse(-40, -5, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -60, 20, 20);
	ellipse(0, -65, 20, 20);

	pop();
}

function drawChickenWalkingRight(x=200, y=410) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(0, 90, 0, 120);
	noStroke();

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, 0, 100, 110, 20);

	// wings
	fill(235, 94, 40);
	rect(-35, 15, 50, 50, 15);
	fill(255, 195, 0);
	rect(-40, 25, 50, 50, 15);

	// head
	fill(255, 195, 0);
	rect(-40, -64, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -70, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -30, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(20, -20, 14, 20);
	fill(255, 250);
	ellipse(22, -25, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(40, 0, 14, 20);
	fill(255, 165, 0);
	ellipse(40, -5, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -60, 20, 20);
	ellipse(0, -65, 20, 20);

	pop();
}

function drawChickenJumpingLeft(x=200, y=410) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(0, 90, 20, 125);
	noStroke();

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, 0, 100, 110, 20);

	// wings
	fill(235, 94, 40);
	rect(5, 20, 50, 50, 15);
	fill(255, 195, 0);
	rect(15, 25, 55, 55, 15);

	// head
	fill(255, 195, 0);
	rect(-40, -64, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -70, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -30, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(-20, -20, 14, 20);
	fill(255, 250);
	ellipse(-22, -25, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(-40, 0, 14, 20);
	fill(255, 165, 0);
	ellipse(-40, -5, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -60, 20, 20);
	ellipse(0, -65, 20, 20);

	pop();
}

function drawChickenJumpingRight(x=200, y=410) {
	s = shrink

	push();
	translate(x, y);
	scale(s);

	// legs
	stroke(255, 165, 0);
	strokeWeight(8);
	line(20, 90, 0, 125);
	noStroke();

	// body
	noStroke();
	fill(250, 221, 60);
	rect(-50, 0, 100, 110, 20);

	// wings
	fill(235, 94, 40);
	rect(-45, 20, 50, 50, 15);
	fill(255, 195, 0);
	rect(-60, 25, 55, 50, 15);

	// head
	fill(255, 195, 0);
	rect(-40, -64, 80, 80, 20);
	fill(250, 221, 60);
	rect(-40, -70, 80, 80, 20);

	// helmet
	stroke(0, 50);
	strokeWeight(1);
	fill(214, 204, 194, 100);
	ellipse(0, -30, 130, 130);
	noStroke();

	// eye
	fill(50);
	ellipse(20, -20, 14, 20);
	fill(255, 250);
	ellipse(22, -25, 5, 4);

	// beak
	fill(255, 100, 0);
	ellipse(40, 0, 14, 20);
	fill(255, 165, 0);
	ellipse(40, -5, 12, 20);

	// comb
	fill(220, 50, 50);
	ellipse(-10, -60, 20, 20);
	ellipse(0, -65, 20, 20);

	pop();
}