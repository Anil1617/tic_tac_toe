#An awesome tic tac toe game!

*  Languages used:-HTML
                  -CSS
			  -BOOTSTRAP
			  -JQUERY
 
* We're going to be creating a tic-tac-toe board using an HTML    table with three rows and each row containing three cells which creates a 9x9 board for us. The styling for it will be in our style CSS file. We'll also include a link to jQuery because our game logic we'll require some jQuery functions.

*   A tic-tac-toe game can have at most 9 moves. We'll maintain a variable for this and also a variable to check if the game is still going on and hasn't been won by any player yet.
 
*   After either player goes we increment the move variable by 1 and we do this until it hits 9, then the board is filled completely. Player 1 goes when move is equal to 1, 3, 5, 7 and 9. Player 2 goes when move is equal to 2, 4, 6 and 8. If you'll notice, player 1 goes when move is an odd number - we can write this the following way: if ((move%2)==1) then it is player 1's turn, otherwise it is player 2's turn. When either player presses on an empty space, that respective player places either an X or O on the board. For our implementation, player 1 places X's and player 2 places O's. We'll use the jQuery append function to place X's and O's onto the board.

*  Now we just need to stop the game if there is a winner and notify the players who won or else It will show draw message. This is the end of our game logic!

##Some features:
* can play against other people online.
* real time notifications when someone joins a game you're in (or challenges you)
* real time notifications when someone wins or draws a game you're in
* (real time notifications thanks to pubnub!)
* Our board will have some pretty basic colors and fonts.
* challenge a player right from their stats page (or when creating a game)
* create open games that anyone can join.

##instructions:

* Just unzip the file and extract the TIC-TAC-TOE folder.
* There you will find files viz. game.html,script.js,style.css
* Look out for the html file with the name game.html
* Open that file with chrome.
* play the TIC-TAC-TOE game displayed.
* Internet connection is recommended to load the bootstrap and jquery.
* No need of any libraries to be included or downloaded.
* Please contact me for any other queries.