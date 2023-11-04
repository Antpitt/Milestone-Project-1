
//players of the game
var playerRed = "R";
var playerYellow = "Y";

//determines who is the current player
var currentPlayer = playerYellow;

var gameOver = false;

var board;

var currentColumns;

var rows = 6;
var columns = 7;

var redScore = 0;
var yellowScore = 0;

//board load on window load
window.onload = function (){
    setGame()
}

//setting board for the game
function setGame(){
    board =[];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];


        for(let r = 0; r < rows; r++){
        let row = [];
    
        for(let c = 0; c < columns; c++){
        row.push(' ');

        let tile = document.createElement('div');
        tile.id = r.toString() + "-" + c.toString();
        tile.classList.add("tile");
        tile.addEventListener("click", setPiece)
        document.getElementById("board").append(tile)

        }
        
        board.push(row);
    
    }
}

function setPiece(){
if (gameOver) {
    return
}

let coords = this.id.split("-");
let r = parseInt(coords[0]);
let c = parseInt(coords[1]);
r = currentColumns[c];
if(r < 0 ){
    return;
}

board[r][c] = currentPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString() );
    if(currentPlayer == playerYellow) {
        tile.classList.add("yellow-piece");
        currentPlayer = playerRed;
        }
    else{
        tile.classList.add("red-piece");
        currentPlayer = playerYellow;
    }

    r -= 1;
    currentColumns[c] = r
    

    checkWinner()
}

// code used from  Title: Connect 4 * Author:(Kenny, Yip) * Date: (2022) * Code version:(v1) * Availability: (https://github.com/ImKennyYip/Connect4/tree/master)
function checkWinner() {
    //horizontal check winner

    
    for (let r = 0; r < rows; r++){
        for(let c = 0; c < columns - 3; c++){
            if(board[r][c] != ' '){
                if(board[r][c] == board[r][c+1] && board[r][c+1] == board [r][c+2] && board[r][c+2] == board[r][c+3]){
        
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
//vert check winner
    
    for (let c = 0; c < columns; c++){
        for(let r = 0; r < rows-3; r++){
            if(board[r][c] != ' '){
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board [r+2][c] && board[r+2][c] == board[r+3][c]){
                    
                    setWinner(r, c);
                    return;
                 }
            }
         }
    }

 
//antidiag check winner
    for (let r = 0; r < rows-3; r++){
        for (let c=0; c < columns-3; c++){
            if (board[r][c] != ' ') {
                if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board [r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                    
                setWinner(r, c);
                return;
             }

        }
    }
}


//diagnoal check for winner
    for (let r = 3; r < rows; r++){
        for (let c=0; c < columns-3; c++){
            if (board[r][c] != ' ') {
                if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board [r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
                    
                setWinner(r, c);
                return;
             }

        }
    }
}



}

//determines winner of the game
function setWinner(r, c){
    let winner = document.getElementById("winner");
    if(board[r][c] == playerRed) {
        winner.innerText = "Red Wins";
        redScore += 1;
    }  else {
        winner.innerText = "Yellow Wins";
        yellowScore += 1;
    }

    gameOver =true;
    console.log("gameOver");

    document.getElementById("red-score").innerText = redScore;
    document.getElementById("yellow-score").innerText = yellowScore;
}


//resets game

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", () => {
    console.log("restart");

});








