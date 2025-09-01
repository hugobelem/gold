let jumpSound;
let deathSound;
let collectSound;
let levelUpSound;
let gameOverSound;

let playLevelUpSound = false;
let playGameOverSound = false;

function sounds() {
	soundFormats("mp3", "m4a");

	jumpSound = loadSound("assets/jump.mp3");
	jumpSound.setVolume(0.8);

    deathSound = loadSound("assets/death.mp3");
	deathSound.setVolume(0.07);

	gameOverSound = loadSound("assets/gameover.mp3");
	gameOverSound.setVolume(3);

	collectSound = loadSound("assets/collect.m4a");
	levelUpSound = loadSound("assets/levelup.mp3");
}