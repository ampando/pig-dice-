//Business Logic 

function Player(yourTurn, rollCount, totalScore, turnScore, rollValue, winner) {
  this.yourTurn = yourTurn;
  this.rollCount = rollCount; 
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
  this.winner = winner;
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
let player1 = new Player(false, 0, 0, 0, 0);
let player2 = new Player(true, 0, 0, 0, 0);

function showController () {
  if (player1["yourTurn"] === false) {
    $("#show-controller1").show();
  } else {
    $("#show-controller1").hide();
    $("#show-controller2").show();
  }
  if (player2["yourTurn"] === true) {
    $("#show-controller2").show();
  } else {
    $("#show-controller2").hide();
    $("#show-controller1").show();
  }
}



$(document).ready(function() {

  // let player1 = new Player(true, 0, 0, 0, 0);
  // let player2 = new Player(false, 0, 0, 0, 0);

  showController()
    
    $("#rollPlayer1").on("click", function() {
      player1.rollDice();
      $("#player1Score").text(player1.totalScore);
      $("#player1TurnScore").text(player1.turnScore);
      $("#player1RollResult").text(player1.rollValue);
      $("#player1RollCount").text(player1.rollCount);
    })

$("#holdPlayer1").on("click", function() {
  player1.hold();
  $("#player1Score").text(player1.totalScore);
  $("#player-turn").text("Player 2, You're up!");
  player1.checkWinner();

  if (player1.winner === true) {
    $(".youWin").show().html("Player one wins!!!");
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
    $("#player2Score").text(player2.totalScore);
    $("#player-turn").text("Player 1, You're next!");
    player2.checkWinner();
    if (player2.winner === true) {
      $(".youWin").show().html("Player two wins!!!");
      $("#player-turn").hide();
    }
    //showController();
  })
  
});



