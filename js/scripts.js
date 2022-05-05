//Business Logic 

//Player Constructor 
function Player(yourTurn, rollCount, totalScore, turnScore, rollValue, winner) {
  this.yourTurn = yourTurn;
  this.rollCount = rollCount; 
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
  this.winner = winner;
}
//Prototype rolls a number between 1-6
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

};

Player.prototype.checkWinner = function() {
  if (this.totalScore >= 100) {
    this.winner = true;
  }
}

Player.prototype.hold = function() {
  this.yourTurn = false;
  this.rollCount = 0;
  this.totalScore += this.turnScore
  this.turnScore = 0;
};

//User Interface Logic 

$(document).ready(function() {
  //initialize player 1 and player 2
  let player1 = new Player(true, 0, 0, 0, 0);
  let player2 = new Player(false, 0, 0, 0, 0);


    $("#rollPlayer1").on("click", function() {  // This handles when player 1 rolls
      player1.rollDice();
      $("#player1Score").text(player1.totalScore);
      $("#player1TurnScore").text(player1.turnScore);
      $("#player1RollResult").text(player1.rollValue);
      $("#player1RollCount").text(player1.rollCount);
    })

$("#holdPlayer1").on("click", function() {  //This handles the player 1 hold 
  player1.hold();
  player2.yourTurn = true;

  if (player1["yourTurn"] === false ) {  // This shows and hides controllers based on turn
    $("#show-controller1").hide(1000);
    $("#show-controller2").show(1000);
  }
  $("#player1Score").text(player1.totalScore);
  $("#player-turn").text("Player 2, You're up!");
  player1.checkWinner();

  if (player1.winner === true) {  //Checks for player 1 winner
    $(".youWin").show(200).html("Player one wins!!!");
    $("#player-turn").hide();
  }

})
  
  $("#rollPlayer2").on("click", function() {
    player2.rollDice();
    $("#player2Score").text(player2.totalScore);
    $("#player2TurnScore").text(player2.turnScore);
    $("#player2RollResult").text(player2.rollValue);
    $("#player2RollCount").text(player2.rollCount);
  })

  $("#holdPlayer2").on("click", function() {
    player2.hold();
    player1.yourTurn = true;

    if (player2["yourTurn"] === false ) {
      $("#show-controller1").show(1000);
      $("#show-controller2").hide(1000);
    }
    $("#player2Score").text(player2.totalScore);
    $("#player-turn").text("Player 1, You're next!");
    player2.checkWinner();
    if (player2.winner === true) {
      $(".youWin").show(200).html("Player two wins!!!");
      $("#player-turn").hide();
    }
  })
  
});



