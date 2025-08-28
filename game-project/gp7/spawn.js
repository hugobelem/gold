function spawnUniverse() {
	//Setup collectables
	for (i = 0; i < 5; i++) {
		collectables.push(
			new collectable(random(200, ENDING), random(366, 150))
		)
	}

	//Setup asteroids
	for (i = 0; i < 50; i++) {
		asteroids.push(
			new asteroid(
				random(ENDING),
				random(height),
				random(0.4, 1.5)
			)
		)
	}
	
	//Setup stars
	for (i = 0; i < 1000; i++) {
		stars.push({
			x: random(width),
			y: random(height),
			w: random(3.5)
		})
	}
}