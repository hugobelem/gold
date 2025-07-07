/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	strokeWeight(1);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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
	ellipse(gameChar_x - 7, gameChar_y - 50, 5, 5); //left eye
	ellipse(gameChar_x + 7, gameChar_y - 50, 5, 5); //right eye
	triangle(
		gameChar_x - 2, 
		gameChar_y - 45, 
		gameChar_x, 
		gameChar_y - 45.5, 
		gameChar_x + 2,
		gameChar_y - 45
	); //mouth
	fill(74, 36, 25);
	ellipse(gameChar_x, gameChar_y - 60, 35, 5); //hat
	ellipse(gameChar_x, gameChar_y - 63, 22, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 62, 22, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
	rect(gameChar_x - 5, gameChar_y - 40, 10, 12, 2); //body

	noStroke();
	rect(gameChar_x - 4.5, gameChar_y - 40.5, 9, 5, 2); //body connection

	fill(0);
	ellipse(gameChar_x, gameChar_y - 39.9, 8, 2); //beard

	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	ellipse(gameChar_x - 6, gameChar_y - 36, 3, 5); //arm
	ellipse(gameChar_x + 6, gameChar_y - 36, 3, 5); //arm

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 6, gameChar_y - 32, 5, 8, 3); //leg
	rect(gameChar_x + 1, gameChar_y - 32, 5, 8, 3); //leg

	noStroke();
	rect(gameChar_x - 4.5, gameChar_y - 36, 5, 8, 3); //leg connection
	rect(gameChar_x - 0.5, gameChar_y - 36, 5, 8, 3); //leg connection

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 5, gameChar_y - 33, 10, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 8, gameChar_y - 26, 7, 5, 5, 0, 0, 1); //feet
	rect(gameChar_x + 1, gameChar_y - 26, 7, 5, 0, 5, 1, 0); //feet


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
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
	ellipse(gameChar_x, gameChar_y - 64, 35, 5); //hat
	ellipse(gameChar_x, gameChar_y - 67, 22, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 66, 22, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
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

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 6, gameChar_y - 32, 5, 8, 3); //leg
	rect(gameChar_x + 1, gameChar_y - 32, 5, 8, 3); //leg

	noStroke();
	rect(gameChar_x - 4.5, gameChar_y - 36, 5, 8, 3); //leg connection
	rect(gameChar_x - 0.5, gameChar_y - 36, 5, 8, 3); //leg connection

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 5, gameChar_y - 33, 10, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 6, gameChar_y - 26, 5, 6, 1.5); //feet
	rect(gameChar_x + 1, gameChar_y - 26, 5, 6, 1.5); //feet


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 10, gameChar_y - 60, 20, 20, 6); //head
	noStroke();
	fill(0);
	rect(gameChar_x - 10, gameChar_y - 60, 20, 6, 6); //hair
	fill(235, 184, 146);
	rect(gameChar_x - 9.5, gameChar_y - 57, 5, 6, 6); //hair line
	fill(0);
	noStroke();
	ellipse(gameChar_x - 6, gameChar_y - 50, 4, 4); //right eye
	fill(235, 184, 146);
	ellipse(gameChar_x - 10, gameChar_y - 49, 3, 2.5); //nose
	fill(0);
	triangle(
		gameChar_x - 8, 
		gameChar_y - 43, 
		gameChar_x - 3, 
		gameChar_y - 44, 
		gameChar_x - 4,
		gameChar_y - 43
	); //mouth
	fill(74, 36, 25);
	ellipse(gameChar_x, gameChar_y - 60, 30, 5); //hat
	ellipse(gameChar_x, gameChar_y - 63, 17, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 62, 17, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
	rect(gameChar_x - 3, gameChar_y - 40, 5, 12, 2); //body

	fill(0);
	ellipse(gameChar_x - 6, gameChar_y - 40.5, 4, 2); //beard

	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	ellipse(gameChar_x, gameChar_y - 36, 3, 5); //arm

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 3, gameChar_y - 32, 5, 8, 3); //leg

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 3, gameChar_y - 33, 5, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 5, gameChar_y - 26, 7, 5, 5, 0, 0, 1); //feet


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 10, gameChar_y - 60, 20, 20, 6); //head
	noStroke();
	fill(0);
	rect(gameChar_x - 10, gameChar_y - 60, 20, 6, 6); //hair
	fill(235, 184, 146);
	rect(gameChar_x + 4.4, gameChar_y - 57, 5, 6, 6); //hair line
	fill(0);
	noStroke();
	ellipse(gameChar_x + 6, gameChar_y - 50, 4, 4); //right eye
	fill(235, 184, 146);
	ellipse(gameChar_x + 10, gameChar_y - 49, 3, 2.5); //nose
	fill(0);
	triangle(
		gameChar_x + 8, 
		gameChar_y - 43, 
		gameChar_x + 3, 
		gameChar_y - 44, 
		gameChar_x + 4,
		gameChar_y - 43
	); //mouth
	fill(74, 36, 25);
	ellipse(gameChar_x, gameChar_y - 60, 30, 5); //hat
	ellipse(gameChar_x, gameChar_y - 63, 17, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 62, 17, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
	rect(gameChar_x - 3, gameChar_y - 40, 5, 12, 2); //body

	fill(0);
	ellipse(gameChar_x + 6, gameChar_y - 40.5, 4, 2); //beard

	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	ellipse(gameChar_x, gameChar_y - 36, 3, 5); //arm

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 3, gameChar_y - 32, 5, 8, 3); //leg

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 3, gameChar_y - 33, 5, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 3, gameChar_y - 26, 7, 5, 0, 5, 1, 0); //feet

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 10, gameChar_y - 62, 20, 20, 6); //head
	noStroke();
	fill(0);
	rect(gameChar_x - 10, gameChar_y - 62, 20, 6, 6); //hair
	fill(235, 184, 146);
	rect(gameChar_x + 4.4, gameChar_y - 59, 5, 6, 6); //hair line
	fill(0);
	noStroke();
	ellipse(gameChar_x + 6, gameChar_y - 52, 3, 6); //right eye
	fill(235, 184, 146);
	ellipse(gameChar_x + 10, gameChar_y - 51, 3, 2.5); //nose
	fill(0);
	triangle(
		gameChar_x + 8, 
		gameChar_y - 46, 
		gameChar_x + 3, 
		gameChar_y - 47, 
		gameChar_x + 4,
		gameChar_y - 46
	); //mouth
	fill(74, 36, 25);
	ellipse(gameChar_x, gameChar_y - 66, 30, 5); //hat
	ellipse(gameChar_x, gameChar_y - 69, 17, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 68, 17, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
	rect(gameChar_x - 3, gameChar_y - 40, 5, 12, 2); //body

	fill(0);
	ellipse(gameChar_x + 6, gameChar_y - 42.5, 4, 2); //beard

	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	ellipse(gameChar_x, gameChar_y - 38, 3, 5); //arm

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 3, gameChar_y - 32, 5, 8, 3); //leg

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 3, gameChar_y - 33, 5, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 3, gameChar_y - 27.5, 5, 8, 3); //feet


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 10, gameChar_y - 62, 20, 20, 6); //head
	noStroke();
	fill(0);
	rect(gameChar_x - 10, gameChar_y - 62, 20, 6, 6); //hair
	fill(235, 184, 146);
	rect(gameChar_x - 9.3, gameChar_y - 59, 5, 6, 6); //hair line
	fill(0);
	noStroke();
	ellipse(gameChar_x - 6, gameChar_y - 52, 3, 6); //right eye
	fill(235, 184, 146);
	ellipse(gameChar_x - 10, gameChar_y - 51, 3, 2.5); //nose
	fill(0);
	triangle(
		gameChar_x - 8, 
		gameChar_y - 46, 
		gameChar_x - 3, 
		gameChar_y - 47, 
		gameChar_x - 4,
		gameChar_y - 46
	); //mouth
	fill(74, 36, 25);
	ellipse(gameChar_x, gameChar_y - 66, 30, 5); //hat
	ellipse(gameChar_x, gameChar_y - 69, 17, 9); //hat

	fill(35, 5, 15);
	ellipse(gameChar_x, gameChar_y - 68, 17, 2); //hat stripe

	stroke(0);
	strokeWeight(0.5);
	fill(63, 68, 56);
	rect(gameChar_x - 3, gameChar_y - 40, 5, 12, 2); //body

	fill(0);
	ellipse(gameChar_x - 6, gameChar_y - 42.5, 4, 2); //beard

	fill(235, 184, 146);
	stroke(0);
	strokeWeight(0.5);
	ellipse(gameChar_x, gameChar_y - 38, 3, 5); //arm

	fill(63, 68, 56);
	stroke(0);
	strokeWeight(0.5);
	rect(gameChar_x - 3, gameChar_y - 32, 5, 8, 3); //leg

	stroke(0);
	strokeWeight(0.5);
	fill(150);
	rect(gameChar_x - 3, gameChar_y - 33, 5, 2); //belt
	
	stroke(0);
	strokeWeight(0.5);
	fill(50);
	rect(gameChar_x - 3, gameChar_y - 27.5, 5, 8, 3); //feet
}
