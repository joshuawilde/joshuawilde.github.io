var PLAYER = {
    NONE : 0, 
    P1 : 1, 
    P2: 2 
};

var ticTacToeBoard = [
[0,0,0],
[0,0,0],
[0,0,0]
];

var playerTurn = PLAYER.P1;

function takeTurnAtTile(x, y)
{
    
    if (ticTacToeBoard[x][y] != PLAYER.NONE)
    {
        return;
    }
    
    ticTacToeBoard[x][y] = playerTurn;
    var result = checkForWinAt(x, y);
    
    if (playerTurn == PLAYER.P1)
    {
        document.getElementById("tile" + x + y).style.backgroundColor = "red";
    }
    else {
        document.getElementById("tile" + x + y).style.backgroundColor = "black";
    }
    
    if (result)
    {
        document.getElementById("turn-title").innerHTML = "Player " + playerTurn + " won!";
        return;
    }
    
    if (playerTurn == PLAYER.P1)
    {
        document.getElementById("tile" + x + y).style.backgroundColor = "red";
        playerTurn = PLAYER.P2;
    }
    else {
        document.getElementById("tile" + x + y).style.backgroundColor = "black";
        playerTurn = PLAYER.P1;
    }
    
    document.getElementById("turn-title").innerHTML = "Player " + playerTurn + " turn";
}

function checkForWinAt(x, y)
{
    //check for straight lines
    if ((ticTacToeBoard[x][y] == playerTurn && ticTacToeBoard[(x + 1) % 3][y] == playerTurn && ticTacToeBoard[(x + 2) % 3][y] == playerTurn) || (ticTacToeBoard[x][y] == playerTurn && ticTacToeBoard[x][(y + 1) % 3] == playerTurn && ticTacToeBoard[x][(y + 2) % 3] == playerTurn))
    {
        return true;
    }
    //check for diagonal lines
    else if ((x == y || (x != 1 && y != 1)) && ((ticTacToeBoard[x][y] == playerTurn && ticTacToeBoard[(x + 1) % 3][(y + 1) % 3] == playerTurn && ticTacToeBoard[(x + 2) % 3][(y + 2) % 3] == playerTurn) || (ticTacToeBoard[x][y] == playerTurn && ticTacToeBoard[(x + 1) % 3][(y - 1 + 3) % 3] == playerTurn && ticTacToeBoard[(x + 2) % 3][(y - 2 + 3) % 3] == playerTurn)))
    {
        return true;
    }
    
    return false;
    
}