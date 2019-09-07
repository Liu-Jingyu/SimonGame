var userClickedPattern=[];
var gamePattern = [];
var buttomColors = ["red","blue","green","yellow"];
var started = false;
var level =0;

function nextSequence(){
level++;
$("h1").text("Level "+level);
var  randomNumber = Math.floor(Math.random()*4);
var randomChosenColor=buttomColors[randomNumber];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);

}




$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  //console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");},100);}



$(document).keypress(function(){
  if(!started){
    $("h1").text("Level "+0);
    started=true;
    nextSequence();
  }
});

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    if(currentLevel===gamePattern.length-1){
     userClickedPattern=[];
      setTimeout(function () {
        nextSequence();
      },1000);

   }
  }
    else{
      playSound("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over,Press Any Key to Restart");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);

      StartOver();
    }
  }

function StartOver(){
  gamePattern=[];
  userClickedPattern=[];
  level =0;
  started=false;
  }
