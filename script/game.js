let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2','button3', 'button4'],
}

function newGame(){
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

function showScore() {
    document.getElementById('score').innertext= game.score;
}
//must export {if there are more that 1 object} check line 10 in test.js
module.exports = {game, newGame};