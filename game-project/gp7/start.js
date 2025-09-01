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

	plantsX = [200, 400, 1000];
	windowsX = [800, 650, 1250];

	//Blackholes
	let positions = [300, 632, 1050];
	blackholes = positions.map(p => new Blackhole(p))

	//Setup enemies
	let enemyPositions = [
		{x: 200, y: 200, range: 400},
		{x: 800, y: 67, range: 900},
		{x: 1200, y: 391, range: 400},
	];
	enemies = enemyPositions.map(p => new Enemy(p.x, p.y, p.range));
}