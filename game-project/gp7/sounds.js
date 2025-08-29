let jumpSound;
let blackholeSound;
let collectSound;
let levelUpSound;
let gameOverSound;

let playLevelUpSound = false;

function sounds() {
	soundFormats("mp3", "m4a");

	jumpSound = loadSound("assets/jump.mp3");
	jumpSound.setVolume(0.8);

    blackholeSound = loadSound("assets/blackhole.mp3");
	blackholeSound.setVolume(0.1);

	collectSound = loadSound("assets/collect.m4a");
	levelUpSound = loadSound("assets/levelup.mp3");
	gameOverSound = loadSound("assets/gameover.mp3");
}