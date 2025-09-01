let jumpSound;
let deathSound;
let collectSound;
let levelUpSound;
let gameOverSound;

let playLevelUpSound = false;
let playGameOverSound = false;

function sounds() {
	soundFormats("mp3", "m4a");

	jumpSound = loadSound("assets/chicken.m4a");
	jumpSound.setVolume(0.5);

    deathSound = loadSound("assets/death.mp3");
	deathSound.setVolume(0.3);

	gameOverSound = loadSound("assets/gameover.mp3");
	gameOverSound.setVolume(3);

	collectSound = loadSound("assets/collect.m4a");
	collectSound.setVolume(3);

	levelUpSound = loadSound("assets/levelup.mp3");
}