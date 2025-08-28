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
	blackholes.push(new blackhole())
	blackholes = positions.map(p => new blackhole(p))
}