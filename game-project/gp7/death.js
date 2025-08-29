function checkDeath(x, w, obj) {
    let isWithin = characterX > obj.x + 40 && characterX < x + w + 30
    let isNotJumpping = characterY >= floorY

    if (isWithin && isNotJumpping) {
        obj.triggered = true;
        isShrinking = true;
    }

    if (obj.triggered && shrink > 0) {
        isLeft = false
        isRight = false;
        isJumping = false;
        isShrinking = false;
        shrink -= 0.02;
        blackholeSound.play();
    }

    if (obj.triggered && !obj.killed && shrink < 0) {
        lives--;
        shrink = 0.4;
        obj.killed = true;
        startGame()
    }
}