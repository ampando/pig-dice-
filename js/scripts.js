//Business Logic 

function Player(yourTurn, rollCount, totalScore, turnScore, rollValue) {
  this.yourTurn = yourTurn;
  this.rollCount = rollCount; 
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
}

Player.prototype.rollDice = function() {
  this.rollValue = Math.floor(Math.random() * 6) + 1;

  if (this.rollValue === 1) {
    this.turnScore = 0;
    this.rollCount = 0;
    this.yourTurn = false;
  
  } else {
    this.turnScore += this.rollValue;
    this.rollCount ++;
    this.yourTurn = true;
  } 

  if (this.totalScore >= 100) {
    console.log("YOU WIN!!!");
  }
};


Player.prototype.hold = function() {
  this.yourTurn = false;
  this.rollCount = 0;
  this.totalScore += this.turnScore
  this.turnScore = 0;
};

//User Interface Logic 

/*let pigDice = new PigDice();

function displayRollCount(rollCountToDisplay) {
  
}*/
function showController () {
  if (Player["yourTurn"] === true) {
    $(".show-controller").show();
  } else {
    $(".show-controller").hide();
  }
}

$(document).ready(function() {
  //showController();

  let player1 = new Player(false, 0, 0, 0, 0);
    console.log(player1);
  let player2 = new Player(true, 0, 0, 0, 0);
    console.log(player2);

    $("#rollPlayer1").on("click", function() {
      player1.rollDice();
      $("#player1Score").text(player1.totalScore);
      $("#player1TurnScore").text(player1.turnScore);
      $("#player1RollResult").text(player1.rollValue);
      $("#player1RollCount").text(player1.rollCount);
      console.log(player1);
    })

$("#holdPlayer1").on("click", function(){
  player1.hold();
  $("#player1Score").text(player1.totalScore);
})
  
  $("#rollPlayer2").on("click", function() {
    player2.rollDice();
    $("#player2Score").text(player2.score);
    $("#player2RollCount").text(player2.rollCount);
    console.log(player2);
  })

});