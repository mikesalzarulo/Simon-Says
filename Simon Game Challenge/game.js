
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];


$(".btn").click(function(){
alert("hi");

});

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();


};



   
