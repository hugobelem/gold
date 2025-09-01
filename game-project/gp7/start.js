let floorX;
let floorY;

let characterX;
let characterY;

let flagpole;

function startGame() {
	textFont('Courier New');
	
	floorX = 150;
	floorY = 391;

	characterX = 200;
	characterY = floorY;

	flagpole = {x: ENDING - 100, y: 341, isReached: false};

	plantsX = [150, 450, 1050, 1480, 1530, 1700];
	windowsX = [650, 800, 1250, 1750, 1900, 2050];

	//Blackholes
	let positions = [300, 632, 1050, 1630];
	blackholes = positions.map(p => new Blackhole(p))

	//Setup enemies
	let enemyPositions = [
		{x: 200, y: 200, range: 400},
		{x: 800, y: 67, range: 1750},
		{x: 1200, y: 391, range: 400},
		{x: 1400, y: 300, range: 900},
	];
	enemies = enemyPositions.map(p => new Enemy(p.x, p.y, p.range));
}