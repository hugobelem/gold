/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(50, 192, 250); //fill the sky blue

	noStroke();
	fill(79, 119, 45);
	rect(300, 432, 1024, 144); //draw some green ground

	noStroke();
	fill(127, 79, 36);
	rect(300, 490, 1024, 144); //draw some brown ground

	//1. a cloud in the sky
	fill(253, 253, 253, 230);
	ellipse(200, 150, 50, 50);
	fill(253, 253, 253, 250);
	ellipse(210, 150, 50, 50);
	fill(253, 253, 253, 240);
	ellipse(230, 140, 50, 50);
	fill(253, 253, 253, 230);
	ellipse(240, 149, 50, 50);

	fill(253, 253, 253, 210);
	ellipse(400, 180, 50, 50);
	fill(253, 253, 253, 230);
	ellipse(410, 180, 50, 50);
	fill(253, 253, 253, 240);
	ellipse(430, 170, 50, 50);
	fill(253, 253, 253, 230);
	ellipse(440, 179, 50, 50);

	fill(253, 253, 253, 210);
	ellipse(800, 110, 50, 50);
	fill(253, 253, 253, 230);
	ellipse(810, 110, 50, 50);
	fill(253, 253, 253, 240);
	ellipse(830, 100, 50, 50);
	fill(253, 253, 253, 230);
	ellipse(840, 109, 50, 50);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	fill(52, 78, 65);
	rect(370, 252, 160, 180, 60, 60, 0, 0);
	fill(58, 90, 64);
	rect(470, 182, 160, 250, 60, 60, 0, 0);
	fill(88, 129, 87);
	rect(570, 282, 160, 150, 60, 60, 0, 0);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	fill(127, 79, 36);
	rect(850, 332, 40, 100);
	fill(110, 190, 80);
	ellipse(810, 300, 100, 100); // bush
	fill(100, 190, 80);
	ellipse(900, 280, 100, 100); // bush
	fill(139, 204, 90);
	ellipse(850, 300, 130, 130); // bush
	fill(120, 190, 80);
	ellipse(900, 315, 100, 100); // bush
	fill(221, 4, 38);
	ellipse(810, 300, 15, 15); // apple
	fill(227, 18, 56);
	ellipse(910, 250, 15, 15); // apple

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	noStroke();
	fill(79, 119, 45);
	quad(0, 590, 200, 590, 70, 350, 0, 350); //draw some green ground

	fill(127, 79, 36);
	quad(210, 640, 210, 590, 70, 350, 40, 350); //draw some green ground

	stroke(88, 47, 14);
	strokeWeight(2);
	line(41, 351, 170, 575);

	stroke(88, 47, 14);
	strokeWeight(2);
	line(300, 434, 300, 575);

	stroke(49, 87, 44);
	strokeWeight(2);
	line(300, 490, 300, 433);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	fill(247, 181, 56, 40);
	ellipse(440, 360, 10, 20);
	fill(247, 181, 56, 50);
	ellipse(440, 360, 30, 20);
	fill(247, 181, 56, 40);
	ellipse(440, 360, 40, 50);
	fill(247, 181, 56, 30);
	ellipse(440, 360, 70, 60);
	fill(247, 181, 56, 20);
	ellipse(440, 360, 70, 80);
	fill(247, 181, 56, 5);
	ellipse(440, 360, 110, 100);
	stroke(243, 229, 124);
	strokeWeight(1);
	fill(243, 229, 124, 200);
	ellipse(440, 360, 28, 38);
	stroke(0, 0, 0, 50);
	strokeWeight(2);
	fill(247, 181, 56, 240);
	ellipse(440, 360, 25, 35);
	noStroke()
	fill(255, 255, 255, 150);
	ellipse(445, 355, 5, 8);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
