function checkFlagpole() {
    if (characterX >= flagpole.x) {
        flagpole.isReached = true
    }
}

function drawFlagpole() {
    checkFlagpole();
    if (!flagpole.isReached) {
        // Bottom shadow
        noStroke();
        fill(50, 60); 
        ellipse(flagpole.x, 435, 130, 10);

        // Bottom
        stroke(0, 50);
        strokeWeight(1);
        fill(210, 220, 230);
        ellipse(flagpole.x, 350, 120, 15);

        // Metallic shine on bottom
        noStroke();
        fill(255, 150); 
        ellipse(flagpole.x, 348, 60, 6);

        // Top dome
        stroke(0, 10);
        strokeWeight(1);
        fill(214, 204, 194, 200);
        arc(flagpole.x, 344, 75, 75, PI, 0, PIE);

        // Top shine
        noStroke();
        fill(255, 120);
        ellipse(flagpole.x - 15, 320, 20, 10);

        // Top highlight
        fill(255, 80);
        ellipse(flagpole.x, 310, 15, 10);

        // Left antenna
        stroke(160);
        strokeWeight(1);
        line(flagpole.x - 10, 307, flagpole.x - 20, 270);
        fill(255);
        ellipse(flagpole.x - 20, 270, 10, 10);

        // Right antenna
        stroke(160);
        strokeWeight(1);
        line(flagpole.x + 10, 307, flagpole.x + 20, 270);
        fill(255);
        ellipse(flagpole.x + 20, 270, 10, 10);
    } else {
        // Bottom shadow
        noStroke();
        fill(50, 60); 
        ellipse(flagpole.x, 435, 130, 10);

        // Bottom
        stroke(0, 50);
        strokeWeight(1);
        fill(72, 12, 168, 100);
        ellipse(flagpole.x, 350, 120, 15);

        // Metallic shine on bottom
        noStroke();
        fill(255, 150); 
        ellipse(flagpole.x, 348, 60, 6);

        // Top dome
        stroke(0, 10);
        strokeWeight(1);
        fill(202, 60, 255, 100);
        arc(flagpole.x, 344, 75, 75, PI, 0, PIE);

        // Top shine
        noStroke();
        fill(255, 120);
        ellipse(flagpole.x - 15, 320, 20, 10);

        // Top highlight
        fill(255, 80);
        ellipse(flagpole.x, 310, 15, 10);

        // Left antenna
        stroke(160);
        strokeWeight(1);
        line(flagpole.x - 10, 307, flagpole.x - 20, 270);
        fill(247, 37, 133);
        ellipse(flagpole.x - 20, 270, 10, 10);

        // Right antenna
        stroke(160);
        strokeWeight(1);
        line(flagpole.x + 10, 307, flagpole.x + 20, 270);
        fill(247, 37, 133, 200);
        ellipse(flagpole.x + 20, 270, 10, 10);
    }
}