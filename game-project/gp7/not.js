function drawCanyon(t_canyon) {
	noStroke();
	fill(50, 192, 250);
	rect(
		t_canyon.x_pos,
		t_canyon.y_pos,
		t_canyon.width,
		150,
	);
}

function checkCanyon(t_canyon) {
	gameCharIsWithinCanyon = gameChar_x > t_canyon.x_pos + 5 && gameChar_x < t_canyon.x_pos + t_canyon.width
	gameCharIsNotJumpping = gameChar_y >= floorPos_y
	if (gameCharIsWithinCanyon && gameCharIsNotJumpping) {
		isPlummeting = true;
		plummetingSpeed += 15;
		//Deactivate game character movements
		isLeft = false
		isRight = false;
		isJumping = false;
	}
	gameChar_y += plummetingSpeed;
	checkPlayerDie();
}

function drawFlagpole() {
	if (!flagpole.isReached) {
		noStroke();
		fill(120, 49, 19);
		// body
		fill(139, 69, 19);
		rect(flagpole.x_pos, flagpole.y_pos + 20, 20, 100);
		// flag
		noStroke();
		fill(210, 105, 0); // red
		rect(flagpole.x_pos, flagpole.y_pos, 60, 30);
	} else {
		noStroke();
		fill(120, 49, 19);
		// body
		fill(139, 69, 19);
		rect(flagpole.x_pos, flagpole.y_pos + 20, 20, 100);
		// flag
		noStroke();
		fill(210, 105, 0); // red
		rect(flagpole.x_pos, flagpole.y_pos + 80, 60, 30);
	}
}

function checkFlagpole() {
	if (gameChar_x >= gameWorldEnding) {
		flagpole.isReached = true
	}
}

function checkPlayerDie() {	
	if (gameChar_y > 1000) {
		lives--;
		if (lives > 0) {
			startGame();
		}
	}
}
