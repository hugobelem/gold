function drawSpaceship() {
    //Walls
    stroke(214, 204, 194);
    strokeWeight(1);
    fill(237, 237, 233);
    rect(0, floorY - 350, width, 450, 20);

    //Inside 
    stroke(214, 204, 194);
    strokeWeight(1);
    fill(235, 233, 224);
    rect(100, floorY - 300, width, 350, 20);

    //Shadow
    noStroke();
    fill(0, 4);
    rect(100, floorY - 300, width, 35, 20, 0, 0, 0);
    rect(100, floorY - 300, width, 50, 20, 0, 0, 0);

    if (openDoor) {
         drawSpaceshipDoor();
    }
}

function drawSpaceshipDoor() {
	stroke(138, 141, 145, 100);
	strokeWeight(10);
	fill(29, 53, 87);
	rect(150, 296, 100, 140, 20, 20, 0, 0);
    noStroke();
}