/*

The Game Project: Part 4 - Sidescrolling

*/

var floorPos_x;
var floorPos_y;

var gameChar_x;
var gameChar_y;

var canyon;
var collectable;
var mountains;
var clouds;
var trees_x;
var treePos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//Start
var isJumping;
let jumpingHeight = 0;
let plummetingSpeed = 0;
//End

let cameraPosX = 0;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432;
	floorPos_x = 0;

	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_y = height/2;
	trees_x = [20, 500, 900]

	canyon = {x_pos: 200, y_pos: floorPos_y, width: 88}
	collectable = {x_pos: 450, y_pos: 360, size: 50, isFound: false}

	mountains = [
		{x_pos: 370, y_pos: 252, width: 170, height: 240, color: [52, 78, 65]},
		{x_pos: 790, y_pos: 252, width: 170, height: 270, color: [88, 129, 87]},
		{x_pos: 500, y_pos: 252, width: 170, height: 170, color: [58, 100, 64]},

		{x_pos: 10, y_pos: 252, width: 170, height: 300, color: [52, 78, 65]},
	]

	clouds = [
		{x_pos: 150, y_pos: 100, size: 50},
		{x_pos: 430, y_pos: 140, size: 50},
		{x_pos: 830, y_pos: 60, size: 50},
	]

	isLeft = false
	isRight = false
	isJumping = false
	isFalling = false
	isPlummeting = false
}

function draw()
{
	///////////DRAWING CODE//////////

	//Start
	//Sidescrolling
	if (isRight) {
		cameraPosX += 5
	}
	else if (isLeft) {
		cameraPosX -= 5
	}
	//End

	//fill the sky blue
	background(50, 192, 250);

	//draw green ground
	noStroke();
	fill(79, 119, 45);
	rect(
		floorPos_x,
		floorPos_y,
		width,
		width - floorPos_y
	);

	//draw brown ground
	noStroke();
	fill(127, 79, 36);
	rect(
		floorPos_x,
		floorPos_y + 58,
		width,
		width - floorPos_y
	);

	push()
	translate(-cameraPosX, 0)

	//canyon
	noStroke();
	fill(50, 192, 250);
	rect(
		canyon.x_pos,
		canyon.y_pos,
		canyon.width,
		150,
	);

	//mountain
	noStroke();
	for (var i = 0; i < mountains.length; i++) {
		fill(mountains[i].color);
		rect(
			mountains[i].x_pos,
			mountains[i].y_pos - (mountains[i].height - 180),
			mountains[i].width,
			mountains[i].height,
			60, 60, 0, 0);
		}

	//trees
	for (var i = 0; i < trees_x.length; i++) {
		//Start
		noStroke();
		//tree trunk
		fill(127, 79, 36);
		rect(trees_x[i], treePos_y + 44, 40, 100);
		//tree branches
		fill(110, 190, 80);
		ellipse(trees_x[i] - 40, treePos_y + 12, 100, 100);
		fill(100, 190, 80);
		ellipse(trees_x[i] + 50, treePos_y - 8, 100, 100);
		fill(139, 204, 90);
		ellipse(trees_x[i], treePos_y + 12, 130, 130);
		fill(120, 190, 80);
		ellipse(trees_x[i] + 50, treePos_y + 27, 100, 100);
		//tree apples
		fill(221, 4, 38);
		ellipse(trees_x[i] - 40, treePos_y + 12, 15, 15);
		fill(227, 18, 56);
		ellipse(trees_x[i] + 60, treePos_y - 38, 15, 15);
		//End
	}

	//collectable egg
	if (collectable.isFound == false) {
		//Start
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
		//End
	}
	
	//clouds
	for (var i = 0; i < clouds.length; i++) {
		//Start
		noStroke();
		fill(253, 253, 253, 230);
		ellipse(
			clouds[i].x_pos, 
			clouds[i].y_pos,
			clouds[i].size,
			clouds[i].size);

		fill(253, 253, 253, 250);
		ellipse(
			clouds[i].x_pos +
			 10, clouds[i].y_pos,
			 clouds[i].size,
			 clouds[i].size);

		fill(253, 253, 253, 240);
		ellipse(
			clouds[i].x_pos +
			 30, clouds[i].y_pos - 10,
			 clouds[i].size,
			 clouds[i].size);

		fill(253, 253, 253, 230);
		ellipse(
			clouds[i].x_pos +
			 40, clouds[i].y_pos - 1,
			 clouds[i].size,
			 clouds[i].size);
		//End
	}

	//Start
	//The game character
	if(isLeft && isFalling) //jumping-left
	{
		//head
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6);
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x - 9.5, gameChar_y - 33, 5, 6, 6);
		//right eye
		fill(0);
		noStroke();
		ellipse(gameChar_x - 6, gameChar_y - 27, 4, 4); 
		//nose
		fill(235, 184, 146);
		ellipse(gameChar_x - 10, gameChar_y - 24, 3, 2.5);
		//mouth
		fill(0);
		triangle(
			gameChar_x - 8, 
			gameChar_y - 20, 
			gameChar_x - 3, 
			gameChar_y - 21, 
			gameChar_x - 4,
			gameChar_y - 20
		);
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 58, 30, 5);
		ellipse(gameChar_x, gameChar_y - 61, 17, 9); 
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 60, 17, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2);
		//beard
		fill(0);
		ellipse(gameChar_x - 6, gameChar_y - 16.5, 4, 2);
		//arm
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x, gameChar_y - 12, 3, 5);
		//leg
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3);
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2);
		//feet
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 5, gameChar_y, 7, 5, 5, 0, 0, 1);

	}
	else if(isRight && isFalling) //jumping-right
	{
		//head
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); 
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x + 4.5, gameChar_y - 33, 5, 6, 6); 
		//right eye
		fill(0);
		noStroke();
		ellipse(gameChar_x + 6, gameChar_y - 27, 4, 4); 
		//nose
		fill(235, 184, 146);
		ellipse(gameChar_x + 10, gameChar_y - 24, 3, 2.5);
		//mouth
		fill(0);
		triangle(
			gameChar_x + 8, 
			gameChar_y - 20, 
			gameChar_x + 3, 
			gameChar_y - 21, 
			gameChar_x + 4,
			gameChar_y - 20
		);
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 58, 30, 5); 
		ellipse(gameChar_x, gameChar_y - 61, 17, 9);
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 60, 17, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); 
		//beard
		fill(0);
		ellipse(gameChar_x + 6, gameChar_y - 16.5, 4, 2); 
		//arm
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 1, gameChar_y - 12, 3, 5); 
		//leg
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); 
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); 
		//feet
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 3, gameChar_y, 7, 5, 0, 5, 1, 0); 

	}
	else if(isLeft) //walking left
	{
		//head
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); 
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x - 9.5, gameChar_y - 33, 5, 6, 6); 
		//right eye
		fill(0);
		noStroke();
		ellipse(gameChar_x - 6, gameChar_y - 27, 4, 4); 
		//nose
		fill(235, 184, 146);
		ellipse(gameChar_x - 10, gameChar_y - 24, 3, 2.5); 
		//mouth
		fill(0);
		triangle(
			gameChar_x - 8, 
			gameChar_y - 20, 
			gameChar_x - 3, 
			gameChar_y - 21, 
			gameChar_x - 4,
			gameChar_y - 20
		); 
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 36, 30, 5); 
		ellipse(gameChar_x, gameChar_y - 39, 17, 9);
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 38, 17, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); 
		//beard
		fill(0);
		ellipse(gameChar_x - 6, gameChar_y - 16.5, 4, 2); 
		//arm
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x, gameChar_y - 12, 3, 5); 
		//leg
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); 
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); 
		//feet
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 5, gameChar_y, 7, 5, 5, 0, 0, 1); 

	}
	else if(isRight) //walking-right
	{
		//head
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 36, 20, 6, 6); 
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x + 4.5, gameChar_y - 33, 5, 6, 6);
		//Eye
		fill(0);
		noStroke();
		ellipse(gameChar_x + 6, gameChar_y - 27, 4, 4);
		//nose
		fill(235, 184, 146);
		ellipse(gameChar_x + 10, gameChar_y - 24, 3, 2.5); 
		//mouth
		fill(0);
		triangle(
			gameChar_x + 8, 
			gameChar_y - 20, 
			gameChar_x + 3, 
			gameChar_y - 21, 
			gameChar_x + 4,
			gameChar_y - 20
		);
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 36, 30, 5);
		ellipse(gameChar_x, gameChar_y - 39, 17, 9);
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 38, 17, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 3, gameChar_y - 16, 5, 12, 2); 
		//beard
		fill(0);
		ellipse(gameChar_x + 6, gameChar_y - 16.5, 4, 2); 
		//arm
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 1, gameChar_y - 12, 3, 5); 
		//leg
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 8, 3); 
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 3, gameChar_y - 7, 5, 2); 
		//feet
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 3, gameChar_y, 7, 5, 0, 5, 1, 0); 

	}
	else if(isFalling || isPlummeting) //front-facing jumping
	{
		//Ears
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 14, gameChar_y - 50, 7, 7);
		ellipse(gameChar_x + 14, gameChar_y - 50, 7, 7);
		//head
		rect(gameChar_x - 16, gameChar_y - 60, 32, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 60, 32, 6, 6); 
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x - 13, gameChar_y - 57, 26, 6, 6); 
		//Eyes
		fill(0);
		noStroke();
		ellipse(gameChar_x - 7, gameChar_y - 50, 4, 6);
		ellipse(gameChar_x + 7, gameChar_y - 50, 4, 6);
		//mouth
		triangle(
			gameChar_x - 2, 
			gameChar_y - 44.5, 
			gameChar_x, 
			gameChar_y - 45.5, 
			gameChar_x + 2,
			gameChar_y - 44.5
		); 
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 72, 55, 5);
		ellipse(gameChar_x, gameChar_y - 75, 26, 9);
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 74, 26, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 12, 2); 
		//body connection
		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 40.5, 9, 5, 2); 
		//beard
		fill(0);
		ellipse(gameChar_x, gameChar_y - 39.9, 8, 2); 
		//arm
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 6, gameChar_y - 38, 3, 5);
		ellipse(gameChar_x + 6, gameChar_y - 38, 3, 5);
		//legs
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 6, gameChar_y - 32, 5, 8, 3);
		rect(gameChar_x + 1, gameChar_y - 32, 5, 8, 3);
		//legs connections
		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 36, 5, 8, 3); 
		rect(gameChar_x - 0.5, gameChar_y - 36, 5, 8, 3);
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 5, gameChar_y - 33, 10, 2); 
		//foot
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 6, gameChar_y - 26, 5, 6, 1.5);
		rect(gameChar_x + 1, gameChar_y - 26, 5, 6, 1.5);

	}
 	else //standing front facing
	{
		//Ears
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 14, gameChar_y - 29, 7, 7);
		ellipse(gameChar_x + 14, gameChar_y - 29, 7, 7); 
		//head
		rect(gameChar_x - 16, gameChar_y - 39, 32, 20, 6); 
		//hair
		noStroke();
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 39, 32, 6, 6); 
		//hair line
		fill(235, 184, 146);
		rect(gameChar_x - 13, gameChar_y - 36, 26, 6, 6); 
		//Eyes
		fill(0);
		noStroke();
		ellipse(gameChar_x - 7, gameChar_y - 29, 5, 5); 
		ellipse(gameChar_x + 7, gameChar_y - 29, 5, 5); 
		//mouth
		triangle(
			gameChar_x - 2, 
			gameChar_y - 24, 
			gameChar_x, 
			gameChar_y - 24.5, 
			gameChar_x + 2,
			gameChar_y - 24
		);
		//hat
		fill(74, 36, 25);
		ellipse(gameChar_x, gameChar_y - 39, 55, 5); 
		ellipse(gameChar_x, gameChar_y - 42, 26, 9);
		//hat stripe
		fill(163, 50, 11);
		ellipse(gameChar_x, gameChar_y - 42, 26, 2); 
		//body
		stroke(0);
		strokeWeight(0.5);
		fill(163, 50, 11);
		rect(gameChar_x - 5, gameChar_y - 19, 10, 12, 2); 
		//body connection
		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 19.5, 9, 5, 2); 
		//beard
		fill(0);
		ellipse(gameChar_x, gameChar_y - 19.9, 8, 2); 
		//arms
		fill(235, 184, 146);
		stroke(0);
		strokeWeight(0.5);
		ellipse(gameChar_x - 6, gameChar_y - 14, 3, 5);
		ellipse(gameChar_x + 6, gameChar_y - 14, 3, 5);
		//legs
		fill(163, 50, 11);
		stroke(0);
		strokeWeight(0.5);
		rect(gameChar_x - 6, gameChar_y - 8, 5, 8, 3);
		rect(gameChar_x + 1, gameChar_y - 8, 5, 8, 3);
		//legs connections
		noStroke();
		rect(gameChar_x - 4.5, gameChar_y - 10, 5, 8, 3);
		rect(gameChar_x - 0.5, gameChar_y - 10, 5, 8, 3);
		//belt
		stroke(0);
		strokeWeight(0.5);
		fill(230, 175, 46);
		rect(gameChar_x - 5, gameChar_y - 10, 10, 2);
		//foot
		stroke(0);
		strokeWeight(0.5);
		fill(50);
		rect(gameChar_x - 8, gameChar_y, 7, 5, 5, 0, 0, 1);
		rect(gameChar_x + 1, gameChar_y, 7, 5, 0, 5, 1, 0);
	}
	//End

	pop()

	///////////INTERACTION CODE//////////

	//Start
	//Game character movements: left, right, jump
	if (isLeft) {
		gameChar_x -= 5;
	}
	else if (isRight) {
		gameChar_x += 5;
	}
	
	if (isJumping && !isFalling) //!isFalling condition prevents double jumps
	{
		jumpingHeight = -20;
		isFalling = true;
	}

	gameChar_y += jumpingHeight;

	//Apply game gravity
	gameCharIsAboveGround = gameChar_y < floorPos_y
	if (gameCharIsAboveGround)
	{
		jumpingHeight += 2;
	}
	else
	{
		gameChar_y = floorPos_y;
		jumpingHeight = 0;
		isFalling = false;
	}
	//End

	//collectable item interaction 
	if (dist(
		gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos
	) < 20) {
		collectable.isFound = true
	}

	//Start
	//Plummeting into the canyon
	gameCharIsWithinCanyon = gameChar_x > canyon.x_pos + 5 && gameChar_x < 285
	gameCharIsNotJumpping = gameChar_y == floorPos_y
	if (gameCharIsWithinCanyon && gameCharIsNotJumpping) {
		isPlummeting = true;
		plummetingSpeed += 15;
		//Deactivate game character movements
		isLeft = false
		isRight = false
		isJumping = false
	}
	
	gameChar_y += plummetingSpeed;

	//Restart the game after plummeting
	if (isPlummeting & gameChar_y > '900') {
		location.reload()
	}
	//End
}


function keyPressed()
{
	//if statements to control the animation of the character when
	//keys are pressed.

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
	//if statements to control the animation of the character when
	//keys are released.

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
