
// variables

// images
var kiwi;
var sky;
var tree;
var feather;

// sounds
var ding;
var splat;

// kiwi position
var kiwiX;
var kiwiY;

// tree position
var treeX;
var treeY;

// feather position
var featherX;
var featherY;

// tree speed
var treeSpeed;

// slider
var slider;

// points = feather count
var points=0;

// high score
var high_score=0;

// timer for tree spawns
var timer=0;

// boolean to check if playing
var play;
var click_counter;


function preload() {
	// images
	kiwi = loadImage("images/kiwi.png");
	sky = loadImage("images/sky.jpg");
	tree = loadImage("images/tree.png");
	feather = loadImage("images/feather.png");

	// sounds
	ding = loadSound("sounds/ding.mp3");
	splat = loadSound("sounds/splat.mp3");
}

function setup() {
	// canvas
	createCanvas(800,500);
	background(sky);

	// set kiwi location
	kiwiX = 200;
	kiwiY = 200;

	// initial kiwi location
	image(kiwi, kiwiX, kiwiY);

	// initial feather location
	featherY = Math.random()*350;
	featherX = Math.random()*(700-200) + 200;
	
	// Feather
	image(feather, featherX, featherY);

	// set play to false
	play = false;
	click_counter = 0;

	// slider
	showSlider();

}


function draw() {

	// reset background
	background(sky);

	// show menu
	if (play == false & click_counter == 0) {
		menu();
	}

	// check if playing, otherwise pause
	if (play == true) {

		// check slider value for speed of tree
		if (treeSpeed == 1) {
			if (timer % 750 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// check slider value for speed of tree
		if (treeSpeed == 2) {
			if (timer % 370 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// check slider value for speed of tree
		if (treeSpeed == 3) {
			if (timer % 265 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// check slider value for speed of tree
		if (treeSpeed == 4) {
			if (timer % 190 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// check slider value for speed of tree
		if (treeSpeed == 5) {
			if (timer % 160 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}
		
		
		// check slider value for speed of tree
		if (treeSpeed == 6) {
			if (timer % 140 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}
		
		// check slider value for speed of tree
		if (treeSpeed == 7) {
			if (timer % 120 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// check slider value for speed of tree
		if (treeSpeed == 8) {
			if (timer % 100 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}
		
		// check slider value for speed of tree
		if (treeSpeed == 9) {
			if (timer % 90 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}
		
		// check slider value for speed of tree
		if (treeSpeed == 10) {
			if (timer % 70 == 0) {
				// Tree Positions
				treeY = Math.random()*350; // choose a random y position for the tree to spawn
				treeX = 650;
			}
		}

		// Tree
		image(tree, treeX, treeY);

		// constantly moving kiwi
		image(kiwi, kiwiX, kiwiY);

		// feather
		image(feather, featherX, featherY);

		// collision borders
		var feather_bot = featherY + 77;
		var feather_top = featherY;
		var feather_left = featherX;
		var feather_right = featherX + 100;

		// Kiwi Left
		if (keyIsDown && (key == 'a')) {
			if (kiwiX <= 0) {
				kiwiX = 0;
			} else {
				kiwiX -= 5;
			}
		}

		// Kiwi Right
		if (keyIsDown && (key == 'd')) {
			if (kiwiX >= 700) {
				kiwiX = 700;
			} else {
				kiwiX += 5;
			}
		}

		// Kiwi Up
		if (keyIsDown && (key == 'w')) {
			if (kiwiY <= -40) { // accounting for extra padding on kiwi img
				kiwiY = -40;
			} else {
				kiwiY -= 5;
			}
		}

		// Kiwi Down
		if (keyIsDown && (key == 's')) {
			if (kiwiY >= 340) {
				kiwiY = 340;
			} else {
				kiwiY += 5;
			}
		}

		// Collisions Math
		// kiwi
		var kiwi_bot = kiwiY+100;
		var kiwi_top = kiwiY+50;
		var kiwi_left = kiwiX+20;
		var kiwi_right = kiwiX+70;

		// tree
		var tree_bot = treeY+150;
		var tree_top = treeY;
		var tree_left = treeX;
		var tree_right = treeX+130;

		// points
		textAlign(LEFT);
		drawWords(width * .75);

		// increase timer
		timer += 1;
		
		// move the tree to the left
		treeX -= treeSpeed;

		// Feather Collision Condition
		if (!(kiwi_bot < feather_top ||
			kiwi_top > feather_bot ||
			kiwi_left > feather_right-30 ||
			kiwi_right-20 < feather_left+30)) {

			// increase points
			points += 1;

			// move feather randomly
			featherY = Math.random()*350;
			featherX = Math.random()*(600-200) + 200;

			// ding noise
			ding.play();
		}

		// Collision - end game
		if (!(kiwi_bot < tree_top ||
			kiwi_top > tree_bot ||
			kiwi_left > tree_right-40 ||
			kiwi_right-30 < tree_left+40)) {

			// splat noise
			splat.play();

			// end the game
			play = false;
			click_counter = 0;

			// reset tree
			treeY = Math.random()*350; // choose a random y position for the tree to spawn
			treeX = 650;
			// reset kiwi
			kiwiX = 200;
			kiwiY = 200;
			// update high score
			if (points > high_score) {
				high_score = points;
			}
			// reset points
			points = 0;

			// reset timer
			timer = 0;
		}
	} // end of play

}

function mouseClicked() {
	if ((mouseX <= width && mouseX >= 0) && (mouseY >= 0 && mouseY <= height)) {
		// Easy
		if ((mouseX >= 350 && mouseX <= 420) && (mouseY >= 230 && mouseY <= 255)) {
			if (click_counter == 0) {
				click_counter += 1;
				play = true;
				treeSpeed = 2;
			}
		}
		// Medium
		if ((mouseX >= 350 && mouseX <= 455) && (mouseY >= 305 && mouseY <= 330)) {
			if (click_counter == 0) {
				click_counter += 1;
				play = true;
				treeSpeed = 5;
			}
		}

		// Hard
		if ((mouseX >= 350 && mouseX <= 425) && (mouseY >= 375 && mouseY <= 405)) {
			if (click_counter == 0) {
				click_counter += 1;
				play = true;
				treeSpeed = 8;
			}
		}

		// custom
		if ((mouseX >= 350 && mouseX <= 460) && (mouseY >= 450 && mouseY <= 475)) {
			if (click_counter == 0) {
				click_counter += 1;
				play = true;
				treeSpeed = slider.value();
			}
		}

	
	}
}

// text function
function drawWords(x) {
	fill(0);
	text("Points: " + points, 20, 20);
	text("High Score: " + high_score, 20, 40);
}

// menu
function menu() {
	fill(0);
	textSize(50);
	noStroke();
	text("KIWI GAME", 270, 150);
	textSize(25);
	noStroke();
	text("EASY", 350, 250);
	text("MEDIUM", 350, 325);
	text("HARD", 350, 400);
	text("CUSTOM", 350, 475);

}

// slider to change tree speed
function showSlider() {
	createP("Custom Slider");

	// slider for cheat
	slider = createSlider(1, 10, 5);
}










