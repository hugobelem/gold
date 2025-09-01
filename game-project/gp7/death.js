function checkDeath(obj, isContact) {
    if (isContact) {
        obj.triggered = true;
        isShrinking = true;
    }

    if (obj.triggered && shrink > 0) {
        isLeft = false;
        isRight = false;
        isJumping = false;
        isShrinking = false;
        shrink -= 0.02;
        deathSound.play();
    }

    if (obj.triggered && !obj.killed && shrink < 0) {
        lives--;
        shrink = 0.4;
        obj.killed = true;
        startGame();
    }
}