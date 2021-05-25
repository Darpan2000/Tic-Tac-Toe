class TicTacToe{
    constructor(){
        this.activePlayer = "X";
        this.boardState = [["","",""],["","",""],["","",""]];
        this.winner = "NONE";

    }
    implementTurn(ele){
        const id = ele.id;
        if(ele.innerText.trim(" ")===""){

            ele.innerText=this.activePlayer;
            let [row,col] = this.getIndexFromId(id);
            this.boardState[row][col] = this.activePlayer;
            this.changeActivePlayer();
            let end = this.checkEndGame();
            console.log(this.boardState);
            console.log(end);
            if(end){
                alert(this.winner);
            }
        }
    }
    changeActivePlayer(){
        this.activePlayer = this.activePlayer==="X"? "0" : "X"; 
        document.getElementById("activePlayer").innerText=this.activePlayer;
    }
    getIndexFromId(id){
        return [parseInt((id-1)/3) , parseInt((id-1)%3)];
    }
    checkEndGame(){
        const board = this.boardState; 
        
        let end = true;
        //row
        for(let i=0 ; i<3 ; i++){
            end = true;
            for(let j=1 ; j<3 ; j++){
                if(board[i][j]!=board[i][j-1]||board[i][j]===""){
                    end = false;
                }
            }
            if(end){
                this.winner = board[i][0];
                return true;
            }
        }
        //column
        for(let j=0 ; j<3 ; j++){
            end = true;
            for(let i=1 ; i<3 ; i++){
                if(board[i][j]!=board[i-1][j]||board[i][j]===""){
                    end = false;
                }
            }
            if(end){
                this.winner = board[0][j];
                return true;
            }
        }
        //primary diagonal
        if(board[0][0]===board[1][1]&& board[1][1]===board[2][2]){
            if(board[1][1]!=""){
                this.winner = board[1][1];
                return true;
            }
        }
        //secondary diagonal
        if(board[0][2]===board[1][1]&& board[1][1]===board[2][0]){
            if(board[1][1]!=""){
                this.winner = board[1][1];
                return true;
            }
        }
        let draw = true;
        for(let i=0 ; i<3 ; i++){
            for(let j=0 ; j<3 ; j++){
                if(board[i][j]===""){
                    draw = false;
                }
            }
        }
        if(draw){
            return true;
        }
        return false;

    }
}
 
let currentGame = new TicTacToe();
function implementTurn(ele){
    currentGame.implementTurn(ele);
} 