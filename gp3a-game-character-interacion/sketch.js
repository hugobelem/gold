/*

The Game Project

Week 3

Game interaction

*/

var floorPos_x;
var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

var isLeft;
var isRight;
var isJumping;
var isFalling;
var isPlummeting;

let jumpingHeight = 0;
let velocity_y = 0;
let gravity = 1;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432;
	floorPos_x = 300;

	gameChar_x = 40;
	gameChar_y = floorPos_y + 10;

	treePos_x = width/2;
	treePos_y = height/2;

	canyon = {x_pos: 0, y_pos: floorPos_y, width: 220}
	collectable = {x_pos: 450, y_pos: 360, size: 50, isFound: false}

	mountain = {x_pos: 370, y_pos: 252, width: 170, height: 240}
	cloud = {x_pos: 150, y_pos: 130, size: 50}

	isLeft = false
	isRight = false
	isJumping = false
	isFalling = false
	isPlummeting = false
}

function draw()
{

	///////////DRAWING CODE//////////

	background(50, 192, 250); //fill the sky blue

	noStroke();
	fill(79, 119, 45);
	rect(
		floorPos_x,
		floorPos_y,
		width,
		width - floorPos_y
	); //draw some green ground

	noStroke();
	fill(127, 79, 36);
	rect(
		floorPos_x,
		floorPos_y + 58,
		width,
		width - floorPos_y
	); //draw some brown ground


	//canyon
	noStroke();
	fill(155);
	rect(
		canyon.x_pos,
		canyon.y_pos,
		canyon.width,
		150,
	); //draw brown ground

	fill(127, 79, 36);
	rect(
		canyon.x_pos,
		canyon.y_pos + 55,
		canyon.width,
		150,
	); //draw green ground

	stroke(88, 47, 14);
	strokeWeight(2);
	line(300, 434, 300, 575); //ground contour

	stroke(49, 87, 44);
	strokeWeight(2);
	line(300, 490, 300, 433); //ground contour


	//mountain
	noStroke();
	fill(52, 78, 65);
	rect(
		mountain.x_pos,
		mountain.y_pos - (mountain.height - 180),
		mountain.width,
		mountain.height,
		60, 60, 0, 0);
	fill(58, 90, 64);
	rect(
		mountain.x_pos + 100,
		mountain.y_pos - (mountain.height - 180) - 70,
		mountain.width,
		mountain.height + 70,
		60, 60, 0, 0);
	fill(88, 129, 87);
	rect(
		mountain.x_pos + 200,
		mountain.y_pos - (mountain.height - 180) + 30,
		mountain.width,
		mountain.height - 30,
		60, 60, 0, 0);


	//tree
	noStroke();
	fill(127, 79, 36);
	rect(treePos_x + 338, treePos_y + 44, 40, 100);
	//tree branches
	fill(110, 190, 80);
	ellipse(treePos_x + 298, treePos_y + 12, 100, 100);
	fill(100, 190, 80);
	ellipse(treePos_x + 388, treePos_y - 8, 100, 100);
	fill(139, 204, 90);
	ellipse(treePos_x + 338, treePos_y + 12, 130, 130);
	fill(120, 190, 80);
	ellipse(treePos_x + 388, treePos_y + 27, 100, 100);
	//tree apples
	fill(221, 4, 38);
	ellipse(treePos_x + 298, treePos_y + 12, 15, 15);
	fill(227, 18, 56);
	ellipse(treePos_x + 398, treePos_y - 38, 15, 15);


	//collectable token
	if (collectable.isFound == false) {
		noStroke();
		fill(247, 181, 56, 40);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size * 0.2,
			collectable.size * 0.4
		);
		fill(247, 181, 56, 50);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size * 0.6,
			collectable.size * 0.4
		);
		fill(247, 181, 56, 40);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size * 0.8,
			collectable.size
		);
		fill(247, 181, 56, 30);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size * 1.4,
			collectable.size * 1.2
		);
		fill(247, 181, 56, 20);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size + 20,
			collectable.size + 30
		);
		fill(247, 181, 56, 5);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos,
			collectable.size + 60,
			collectable.size + 50
		);
		stroke(243, 229, 124);
		strokeWeight(1);
		fill(243, 229, 124, 200);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos, 
			collectable.size * 0.56,
			collectable.size * 0.76
		);
		stroke(0, 0, 0, 50);
		strokeWeight(2);
		fill(247, 181, 56, 240);
		ellipse(
			collectable.x_pos, 
			collectable.y_pos, 
			collectable.size / 2,
			collectable.size * 0.70
		);
	}

	
	//clouds
	noStroke();
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.size, cloud.size);
	fill(253, 253, 253, 250);
	ellipse(cloud.x_pos + 10, cloud.y_pos, cloud.size, cloud.size);
	fill(253, 253, 253, 240);
	ellipse(cloud.x_pos + 30, cloud.y_pos - 10, cloud.size, cloud.size);
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos + 40, cloud.y_pos - 1, cloud.size, cloud.size);

	fill(253, 253, 253, 210);
	ellipse(cloud.x_pos + 200, cloud.y_pos + 30, cloud.size, cloud.size);
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos + 210, cloud.y_pos + 30, cloud.size, cloud.size);
	fill(253, 253, 253, 240);
	ellipse(cloud.x_pos + 230, cloud.y_pos + 20, cloud.size, cloud.size);
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos + 240, cloud.y_pos + 29, cloud.size, cloud.size);

	fill(253, 253, 253, 210);
	ellipse(cloud.x_pos + 600, cloud.y_pos - 40, cloud.size, cloud.size);
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos + 610, cloud.y_pos - 30, cloud.size, cloud.size);
	fill(253, 253, 253, 240);
	ellipse(cloud.x_pos + 630, cloud.y_pos - 50, cloud.size, cloud.size);
	fill(253, 253, 253, 230);
	ellipse(cloud.x_pos + 640, cloud.y_pos - 41, cloud.size, cloud.size);


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); //head
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x - 9.5, gameChar_y - 33, 5, 6, 6); //hair line
		fill(0);
		noStroke();
		ellipse(gameChar_x - 6, gameChar_y - 27, 4, 4); //right eye
		fill(235, 184, 146);
		ellipse(gameChar_x - 10, gameChar_y - 24, 3, 2.5); //nose
		fill(0);
		triangle(
			gameChar_x - 8, 
			gameChar_y - 20, 
			gameChar_x - 3, 
			gameChar_y - 21, 
			gameChar_x - 4,
			gameChar_y - 20
		); //mouth
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 58, 30, 5); //hat
		ellipse(gameChar_x, gameChar_y - 61, 17, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 60, 17, 2); //hat striped

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); //body

		fill(0);
		ellipse(gameChar_x - 6, gameChar_y - 16.5, 4, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x, gameChar_y - 12, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); //leg

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); //belt
		
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 5, gameChar_y, 7, 5, 5, 0, 0, 1); //feet

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); //head
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x + 4.5, gameChar_y - 33, 5, 6, 6); //hair line
		fill(0);
		noStroke();
		ellipse(gameChar_x + 6, gameChar_y - 27, 4, 4); //right eye
		fill(235, 184, 146);
		ellipse(gameChar_x + 10, gameChar_y - 24, 3, 2.5); //nose
		fill(0);
		triangle(
			gameChar_x + 8, 
			gameChar_y - 20, 
			gameChar_x + 3, 
			gameChar_y - 21, 
			gameChar_x + 4,
			gameChar_y - 20
		); //mouth
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 58, 30, 5); //hat
		ellipse(gameChar_x, gameChar_y - 61, 17, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 60, 17, 2); //hat striped

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); //body

		fill(0);
		ellipse(gameChar_x + 6, gameChar_y - 16.5, 4, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 1, gameChar_y - 12, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); //leg

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); //belt
		
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 3, gameChar_y, 7, 5, 0, 5, 1, 0); //feet

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); //head
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x - 9.5, gameChar_y - 33, 5, 6, 6); //hair line
		fill(0);
		noStroke();
		ellipse(gameChar_x - 6, gameChar_y - 27, 4, 4); //right eye
		fill(235, 184, 146);
		ellipse(gameChar_x - 10, gameChar_y - 24, 3, 2.5); //nose
		fill(0);
		triangle(
			gameChar_x - 8, 
			gameChar_y - 20, 
			gameChar_x - 3, 
			gameChar_y - 21, 
			gameChar_x - 4,
			gameChar_y - 20
		); //mouth
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 36, 30, 5); //hat
		ellipse(gameChar_x, gameChar_y - 39, 17, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 38, 17, 2); //hat stripe

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); //body

		fill(0);
		ellipse(gameChar_x - 6, gameChar_y - 16.5, 4, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x, gameChar_y - 12, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); //leg

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); //belt
		
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 5, gameChar_y, 7, 5, 5, 0, 0, 1); //feet

	}
	else if(isRight)
	{
		// add your walking-right code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); //head
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x + 4.5, gameChar_y - 33, 5, 6, 6); //hair line
		fill(0);
		noStroke();
		ellipse(gameChar_x + 6, gameChar_y - 27, 4, 4); //right eye
		fill(235, 184, 146);
		ellipse(gameChar_x + 10, gameChar_y - 24, 3, 2.5); //nose
		fill(0);
		triangle(
			gameChar_x + 8, 
			gameChar_y - 20, 
			gameChar_x + 3, 
			gameChar_y - 21, 
			gameChar_x + 4,
			gameChar_y - 20
		); //mouth
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 36, 30, 5); //hat
		ellipse(gameChar_x, gameChar_y - 39, 17, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 38, 17, 2); //hat stripe

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); //body

		fill(0);
		ellipse(gameChar_x + 6, gameChar_y - 16.5, 4, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 1, gameChar_y - 12, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); //leg

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); //belt
		
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 3, gameChar_y, 7, 5, 0, 5, 1, 0); //feet

	}
	else if(isFalling || isPlummeting)
	{
		// add your front-facing jumping code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 14, gameChar_y - 50, 7, 7); //left ear
		ellipse(gameChar_x + 14, gameChar_y - 50, 7, 7); //right ear
		rect(gameChar_x - 16, gameChar_y - 60, 32, 20, 6); //head
		noStroke();
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 60, 32, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x - 13, gameChar_y - 57, 26, 6, 6); //hair line
		fill(0);
		noStroke();
		ellipse(gameChar_x - 7, gameChar_y - 50, 4, 6); //left eye
		ellipse(gameChar_x + 7, gameChar_y - 50, 4, 6); //right eye
		triangle(
			gameChar_x - 2, 
			gameChar_y - 44.5, 
			gameChar_x, 
			gameChar_y - 45.5, 
			gameChar_x + 2,
			gameChar_y - 44.5
		); //mouth
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 72, 55, 5); //hat
		ellipse(gameChar_x, gameChar_y - 75, 26, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 74, 26, 2); //hat stripe

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 12, 2); //body

		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 40.5, 9, 5, 2); //body connection

		fill(0);
		ellipse(gameChar_x, gameChar_y - 39.9, 8, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 6, gameChar_y - 38, 3, 5); //arm
		ellipse(gameChar_x + 6, gameChar_y - 38, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 6, gameChar_y - 32, 5, 8, 3); //leg
		rect(gameChar_x + 1, gameChar_y - 32, 5, 8, 3); //leg

		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 36, 5, 8, 3); //leg connection
		rect(gameChar_x - 0.5, gameChar_y - 36, 5, 8, 3); //leg connection

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 5, gameChar_y - 33, 10, 2); //belt
		
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 6, gameChar_y - 26, 5, 6, 1.5); //feet
		rect(gameChar_x + 1, gameChar_y - 26, 5, 6, 1.5); //feet

	}
	else
	{
		// add your standing front facing code
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 14, gameChar_y - 29, 7, 7); //left ear
		ellipse(gameChar_x + 14, gameChar_y - 29, 7, 7); //right ear
		rect(gameChar_x - 16, gameChar_y - 39, 32, 20, 6); //head

		noStroke();
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 39, 32, 6, 6); //hair
		fill(235, 184, 146);
		rect(gameChar_x - 13, gameChar_y - 36, 26, 6, 6); //hair line

		fill(0);
		noStroke();
		ellipse(gameChar_x - 7, gameChar_y - 29, 5, 5); //left eye
		ellipse(gameChar_x + 7, gameChar_y - 29, 5, 5); //right eye
		triangle(
			gameChar_x - 2, 
			gameChar_y - 24, 
			gameChar_x, 
			gameChar_y - 24.5, 
			gameChar_x + 2,
			gameChar_y - 24
		); //mouth
		
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 39, 55, 5); //hat
		ellipse(gameChar_x, gameChar_y - 42, 26, 9); //hat

		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 42, 26, 2); //hat stripe

		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 5, gameChar_y - 19, 10, 12, 2); //body

		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 19.5, 9, 5, 2); //body connection

		fill(0);
		ellipse(gameChar_x, gameChar_y - 19.9, 8, 2); //beard

		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 6, gameChar_y - 14, 3, 5); //arm
		ellipse(gameChar_x + 6, gameChar_y - 14, 3, 5); //arm

		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 6, gameChar_y - 8, 5, 8, 3); //leg
		rect(gameChar_x + 1, gameChar_y - 8, 5, 8, 3); //leg

		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 10, 5, 8, 3); //leg connection
		rect(gameChar_x - 0.5, gameChar_y - 10, 5, 8, 3); //leg connection

		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 5, gameChar_y - 10, 10, 2); //belt

		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 8, gameChar_y, 7, 5, 5, 0, 0, 1); //feet
		rect(gameChar_x + 1, gameChar_y, 7, 5, 0, 5, 1, 0); //feet

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if (isLeft) {
		gameChar_x -= 3;
	}
	else if (isRight) {
		gameChar_x += 3;
	}

	if (isJumping && !isFalling)
	{
		jumpingHeight = -20;
		isFalling = true;
	}

	// Apply gravity
	gameChar_y += jumpingHeight;
	if (gameChar_y < floorPos_y + 10)
	{
		jumpingHeight += gravity;
	}
	else
	{
		gameChar_y = floorPos_y + 10;
		jumpingHeight = 0;
		isFalling = false;
	}

	// collectable item interaction 
	if (dist(
		gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos
	) < 20) {
		collectable.isFound = true
	}

	// Plummeting into the canyon
	if (
		gameChar_x < floorPos_x &&
		gameChar_x > canyon.width &&
		gameChar_y == floorPos_y + 10
	) {
		velocity_y += 5;
		isPlummeting = true;
	}
	
	gameChar_y += velocity_y;
	if (isPlummeting && gameChar_y > floorPos_y + 10) {
		velocity_y += 1;
	}
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work

	if (key == "a") {
		isLeft = true;
	}
	else if (key == "d") {
		isRight = true;
	}
	else if (key == "w") {
		isJumping = true;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	if (key == "a") {
		isLeft = false;
	}
	else if (key == "d") {
		isRight = false;
	}
	else if (key == "w") {
		isJumping = false;
	}
}
