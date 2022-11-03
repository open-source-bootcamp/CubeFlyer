var score = 0;
var scoreText;

var createHud = function() {
    var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    // Create a Text Block that can display the current score
    scoreText = new BABYLON.GUI.TextBlock();
    scoreText.fontFamily = "Comic Sans, Comic Sans MS";
    scoreText.color = "white";
    scoreText.fontSize = 48;
    scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
    scoreText.width = .5;
    scoreText.height = .15;

    updateScoreText();

    hudTexture.addControl(scoreText);
}

var updateScoreText = function() {
    scoreText.text = "Score: " + score;
}

var resetScore = function() {
    console.log("Score reset at: " + score);
    score = 0;
    updateScoreText();
}

var addScore = function(points) {
    score += points;
    updateScoreText();
}