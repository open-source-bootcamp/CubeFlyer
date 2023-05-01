var currentScreen; // enum to track game state (main menu, playing)
var newGameObjects = []; // collection of new game objects to be created at end of frame
var currentGameObjects = []; // collection of all game objects in the scene

var createObject = function (gameObject) {
	newGameObjects.push(gameObject);
};

var destroyObject = function (gameObject) {
	gameObject.destroyed = true;
};

var destroyMatchingObjects = function (predicate) {
	currentGameObjects.forEach((gameObject) => {
		if (predicate(gameObject)) {
			destroyObject(gameObject);
		}
	});
};

var testMatchingObjects = function (objectMatch, predicate) {
	var result = false;
	currentGameObjects.forEach((gameObject) => {
		if (objectMatch(gameObject)) {
			if (predicate(gameObject)) {
				result = true;
			}
		}
	});
	return result;
};

var updateGameState = function () {
	// Delta Time is used to track how much time has passed since the last update
	// We use this instead of a fixed value to account for changes in frame rate (lag)
	// This means the game will play similarly at different frame rates.
	let deltaTime = scene.deltaTime / 1000;

	currentGameObjects.forEach((gameObject) => {
		gameObject.update(deltaTime);
	});

	// Object Creation Queue
	newGameObjects.forEach((gameObject) => {
		currentGameObjects.push(gameObject);
		gameObject.init(); // Initialize newly created objects
	});

	for (let index = currentGameObjects.length - 1; index >= 0; index--) {
		if (currentGameObjects[index].destroyed) {
			currentGameObjects[index].onDestroy();
			currentGameObjects.splice(index, 1);
		}
	}

	// Reset create/destroy sets
	newGameObjects = [];
};
