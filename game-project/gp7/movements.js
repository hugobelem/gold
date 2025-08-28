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
	characterIsAboveGround = characterY < floorY
	if (characterIsAboveGround) {
		jumpingHeight += 1.6;
	}
	else {
		characterY = floorY
		jumpingHeight = 0;
		isFalling = false;
	}
}

function keyPressed() {
	if (!flagpole.isReached && lives > 0) {
		if (key == "a") {
			isLeft = true;
			openDoor = false;
		}
		else if (key == "d") {
			isRight = true;
			openDoor = false;
		}
		else if (key == "w") {
			isJumping = true;
			openDoor = false;
		}
	}
}

function keyReleased() {
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