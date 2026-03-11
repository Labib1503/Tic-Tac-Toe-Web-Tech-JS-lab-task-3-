var board = ["","","","","","","","",""];
var player = "X";
var gameOver = false;

function play(i){

if(board[i] != "" || gameOver){
return;
}

board[i] = player;
document.getElementById("c"+i).innerHTML = player;

checkWin();

if(!gameOver){

if(player == "X"){
player = "O";
}
else{
player = "X";
}

document.getElementById("status").innerHTML = "Current Player: " + player;

}

}

function checkWin(){

var wins = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

for(var i=0;i<wins.length;i++){

var a = wins[i][0];
var b = wins[i][1];
var c = wins[i][2];

if(board[a] != "" && board[a] == board[b] && board[a] == board[c]){

document.getElementById("status").innerHTML = "Player " + player + " Wins!";
gameOver = true;
return;

}

}

var draw = true;

for(var j=0;j<9;j++){
if(board[j] == ""){
draw = false;
}
}

if(draw){
document.getElementById("status").innerHTML = "It's a Draw!";
gameOver = true;
}

}

function resetGame(){

board = ["","","","","","","","",""];
player = "X";
gameOver = false;

for(var i=0;i<9;i++){
document.getElementById("c"+i).innerHTML = "";
}

document.getElementById("status").innerHTML = "Current Player: X";

}
