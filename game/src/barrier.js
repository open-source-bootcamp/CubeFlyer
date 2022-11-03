var obstacleSpeed = 1.5; // Changing this will impact how quickly obstacles in the game move.
var gapSize = 3;  // This determines the size of the gap to create between the floor and ceiling.


class Barrier extends GameObject {
    constructor() {
        super();
    }

    init() {
        // This is hardcoded for now - should be some location off the right side of the screen
        this.location = 15;

        // Creates 2 boxes which will be used for the top and bottom obstacles,
        // the floor will obscure the height of the object so we don't need to modify this much.
        const boxOptions = {width: 1, height: 10, depth: 1};
        this.ceilingBox = BABYLON.MeshBuilder.CreateBox("ceilingObstacle", boxOptions, scene);
        this.floorBox = BABYLON.MeshBuilder.CreateBox("floorObstacle", boxOptions, scene);
        // Materials impact how an object is rendered like color, texture etc.
        let barrierMaterial = new BABYLON.StandardMaterial("Barrier Material", scene);
        barrierMaterial.diffuseColor = BABYLON.Color3.Green();
        this.ceilingBox.material = barrierMaterial;
        this.floorBox.material = barrierMaterial;
        this.assignLocations();
    }

    onDestroy() {
        // Remember when destroying an object to remove all meshes it creates from the scene!
        scene.removeMesh(this.ceilingBox);
        scene.removeMesh(this.floorBox);
    }

    update(deltaTime) {

        this.location -= deltaTime * obstacleSpeed;

        // Update the players physics:
        this.ceilingBox.position.x = this.location;
        this.floorBox.position.x = this.location;

        if (this.location < -25) {
            destroyObject(this);
        }
    }

    assignLocations() {
        // Pick a random center point
        let height = -gameHeight + (gapSize/2) + (Math.random() * (gameHeight-(gapSize/2)) * 2);
        this.ceilingBox.position.y = height + gapSize/2 + 5;
        this.floorBox.position.y = height - gapSize/2 - 5;
        this.ceilingBox.position.x = this.location;
        this.floorBox.position.x = this.location;
    }

    testCollision(playerHeight) {
        if (this.location > -1 && this.location < 1) { // In the same location as the player
            if (playerHeight + 5.5 > this.ceilingBox.position.y || // 5.5 is the half the height of the box + half the height of the player
                playerHeight - 5.5 < this.floorBox.position.y) {
                    return true;
            }
        }
        return false;
    }
}
