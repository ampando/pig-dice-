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
    player1.winner = "Player 1 Wins!";
  } else if (player2.totalScore >= 100) {
      player2.winner = "Player 2 Wins!";
    }
}

Player.prototype.hold = function() {
  this.yourTurn = false;
  this.rollCount = 0;
  this.totalScore += this.turnScore
  this.turnScore = 0;
};

//User Interface Logic 

function showController () {
  if (Player["yourTurn"] === true) {
    $(".show-controller").show();
  } else {
    $(".show-controller").hide();
  }
}

$(document).ready(function() {

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
    })

$("#holdPlayer1").on("click", function() {
  player1.hold();
  $("#player1Score").text(player1.totalScore);
})
  
  $("#rollPlayer2").on("click", function() {
    player2.rollDice();
    $("#player2Score").text(player2.totalScore);
    $("#player2TurnScore").text(player2.turnScore);
    $("#player2RollResult").text(player2.rollValue);
    $("#player2RollCount").text(player2.rollCount);
    console.log(player2);
  })

  $("#holdPlayer2").on("click", function() {
    player2.hold();
    $("#player2Score").text(player2.totalScore);
  })
  player1.checkWinner();
  player2.checkWinner();
  $(".youWin").html(player1.winner);
  $(".youWin").html(player2.winner);
  $(".youWin").show();
});

