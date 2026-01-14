/*

The Game Project: Part 7

*/

let cameraX = 0;
let score = 0;
let lives = 3;

const SPEED = 5;
const BEGINING = 140;
const ENDING = 2500;

function preload() {
	sounds();
}

function setup() {
	let canvas = createCanvas(1024, 576);
	canvas.style('border-radius', '20px')

	spawnUniverse();
	startGame();
}

function draw() {
	//Sidescrolling
	cameraX = constrain(characterX - width / 2, 0, max(0, ENDING - width));

	//Draw World
	drawSky();
	drawAsteroids();
	drawSpaceship();
	
	push();
	translate(-cameraX, 0);
	drawWindows();
	drawPlaques();
	drawPlants();
	drawFlagpole();
	drawPlatforms();
	drawCollectables();
	drawCharacter(characterX, characterY);
	drawEnemies();
	pop();
	
	//Spaceship's left wall. Used to hide the objects moving through
	fill(237, 237, 233);
	rect(0, 41, 99, 440, 19, 0, 0, 0);

	//The black holes and starts should be at the top of everything
	drawBlackhole();
	drawStars();

	//Game character movements: left, right, jump
	characterMovements();

	//Score
	stroke(200);
	strokeWeight(1);
	fill(255);
	textSize(14);
	text("mission 01/ eggs retrieved " + score + "/", 20, 560);

	//lives
	textSize(16);
	for (i = 0; i < lives; i++) {
		text("❤️", 20 * (1 + i), 275);
	}

	//Level Complete
	if (flagpole.isReached) {
		if (!playLevelUpSound) {
			levelUpSound.play();
			playLevelUpSound = true;
		}
		noStroke();
		fill(255);
		textSize(80);
		background(0, 255, 0, 35);
		text("Level Complete", 195, 288);
	}

	//Game Over
	if (lives < 1) {
		if (!playGameOverSound) {
			gameOverSound.play();
			playGameOverSound = true
		}
		noStroke();
		fill(255);
		textSize(100);
		background(255, 100, 0, 100);
		text("Game Over", 260, 288);
	}
}