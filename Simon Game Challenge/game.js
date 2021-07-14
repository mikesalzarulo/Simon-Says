let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

var level = 0;

var started = false;

$(".btn").click(function () {

  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level++;

  $("#level-title").text("Level " + level);
};

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

};

function animatePress(currentColor) {

  
  $("#" + currentColor).addClass("pressed");

  
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
  if (!started) {

  
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
