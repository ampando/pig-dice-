# Pig Dice Game



## #Tec#hno#l ogies Usedy
 * _JavaScript_
 * _CSS_
 * _Bootstrap_
 * _Jquery_
 
## License 

MIT

Copyright (c) _May 3, 2022_ 

Describe Player1()

Test: "It should return an object that defines a player with score"
Code: Player(score);
Expected Output: 
Player1(score) 
  this.score = score;



Describe rollDice();

Test: "Return and random number between 1 and 6."
Code: rollDice(6);
Expected Output: int value of 1,2,3,4,5 or 6

Test: "If a player rolls a 1 it should return a zero to the turn total. "
Code: rollDice(1)
Expected Output: Turn Total = 0 

Test: "If 2,3,4,5, or 6 is rolled that number is added to the turn total."
Code: rollDice(2,3,4,5,6)
Expected Output: 

Test: "If a player decides to hold, their turn score is added to their total score."
Code:
Expected Output: 