var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
};

var buttonColours = ["red", "blue", "green", "yellow"];

gamePattern.push(randomChosenColour);

$("#randomChosenColour").