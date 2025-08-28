function checkDeath(x, w, obj) {
    let isWithin = characterX > obj.x + 40 && characterX < x + w + 30
    let isNotJumpping = characterY >= floorY

    if (isWithin && isNotJumpping) {
        obj.triggered = true;
        isShrinking = true;
    }

    if (obj.triggered && shrink > 0) {
        shrink -= 0.02;
        isLeft = false
        isRight = false;
        isJumping = false;
    }

    if (obj.triggered && !obj.killed) {
        lives--;
        obj.killed = true;
        startGame()
    }
}