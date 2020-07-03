var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const player1_button = document.getElementById('player-1');
const player2_button = document.getElementById('player-2');
console.log(player1_button);

player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_2);

var player1 = ['Prograd', 0, 1000];
var player2 = ['FACEprep', 0, 1000];

function rollDice_1() {
    var position1 = Math.floor(Math.random() * 6) + 1;
    console.log(position1);
    changePosition_1(player1[1], position1);
}
function rollDice_2() {
    var position2 = Math.floor(Math.random() * 6) + 1;
    console.log(position2);
    changePosition_2(player2[1], position2);
}

function changePosition_1(old, current) {
    var newPos1 = old + current;
    player1[1] = newPos1;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}
function changePosition_2(old, current) {
    var newPos2 = old + current;
    player2[1] = newPos2;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_1(p1) {
    if (p1 < board.length) {
        var updateMoney = 0;
        updateMoney = player1[2] - board[p1 - 1];
    }
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
}
function updateMoney_2(p2) {
    if (p2 < board.length) {
        var updateMoney = 0;
        updateMoney = player2[2] - board[p2 - 1];
    }
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
}