var playerRed = "R";
var playerYellow = "Y";

var currentPlayer = playerYellow;

var gameOver = false;
var board;
var currentColumns

var rows = 6;
var columns = 7;

window.onload = function (){
    setGame()
}

function setGame(){
    board =[];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];


    for(let r = 0; r < rows; r++){
        let row = []
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


function checkWinner() {
    //horixontlll

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
//vert
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

 
//antidiag
for (let r = 0; r < rows-3; r++){
    for (let c=0; c , columns-3; c++){
        if (board[r][c] != ' ') {
            
        }
    }
}




}


function setWinner(r, c){
    let winner = document.getElementById("winner");
    if(board[r][c] == playerRed) {
        winner.innerText = "Red Wins";
    }  else {
        winner.innerText = "Yellow Wins";
    }

    gameOver =true;
}