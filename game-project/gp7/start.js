let floorX;
let floorY;

let characterX;
let characterY;

let flagpole;

function startGame()
{
	textFont('Courier New');
	
	floorX = 150;
	floorY = 391;

	characterX = 200;
	characterY = floorY;

	flagpole = {x: ENDING, y: 317, isReached: false};

	plantsX = [200, 400, 1000];
	windowsX = [800, 650, 1250];

	//Setup collectables
	for (i = 0; i < 5; i++) {
		collectables.push(
			new collectable(random(200, ENDING), random(366, 150))
		)
	}

	//Setup blackholes
	let positions = [300, 632, 1050];
	blackholes.push(new blackhole())
	blackholes = positions.map(p => new blackhole(p))

	//Setup asteroids
	for (i = 0; i < 50; i++)
	{
		asteroids.push(
			new asteroid(
				random(ENDING),
				random(height),
				random(0.4, 1.5)
			)
		)
	}
	
	//Setup stars
	for (i = 0; i < 1000; i++) 
	{
		stars.push({
			x: random(width),
			y: random(height),
			w: random(3)
		})
	}
}