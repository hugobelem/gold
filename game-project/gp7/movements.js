let isLeft = false;
let isRight = false;
let isJumping = false;
let isFalling = false;

let openDoor = true;

let jumpingHeight = 0;

function characterMovements() {
	gravity();

	if (isLeft && characterX > BEGINING) {
		characterX -= SPEED;
	}
	else if (isRight && characterX < ENDING) {
		characterX += SPEED;
	}
	
	if (isJumping && !isFalling) { //!isFalling condition prevents double jumps
		jumpingHeight = -20;
		isFalling = true;
	}

	characterY += jumpingHeight;
}

function gravity() {
	if (characterY < floorY) {
		jumpingHeight += 1.6;
	}
	else {
		characterY = floorY
		jumpingHeight = 0;
		isFalling = false;
	}
}

function keyPressed() {
	let k = key.toLowerCase();

	if (!flagpole.isReached && lives > 0) {
		let k = key.toLowerCase();

		if (k == "a") {
			isLeft = true;
			openDoor = false;
		}
		else if (k == "d") {
			isRight = true;
			openDoor = false;
		}
		else if (k == "w") {
			isJumping = true;
			openDoor = false;
			jumpSound.play();
		}
	}
}

function keyReleased() {
	let k = key.toLowerCase();

	if (k == "a") {
		isLeft = false;
	}
	else if (k == "d") {
		isRight = false;
	}
	else if (k == "w") {
		isJumping = false;
	}
}