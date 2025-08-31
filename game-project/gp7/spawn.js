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

	//Setup platforms
	let positions = [
		{x:200, y:250},
		{x:300, y:330},
		{x:500, y:300},
		{x:570, y:200},
		{x:950, y:350},
		{x:1150, y:300},
		{x:1200, y:300},
		{x:1350, y:230},
		{x:1530, y:200},
	];
	platforms = positions.map(p => platform(p.x, p.y))
}