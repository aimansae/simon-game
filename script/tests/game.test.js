/**
 * @jest-environment jsdom
 */

//type in terminal:
// npm init (type jest as test command) 
// npm install --save-dev jest
// npm install -D jest-environment-jsdom

//mandatory


const { game, newGame} = require('../game');

beforeAll(() => {
    //setting DOM mock always like this!

    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

describe('game object contains correct keys', () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame key exists', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves key exists', () => {
        expect('playerMoves' in game).toBe(true);
    })
    test('choices key exists', () => {
        expect('choices' in game).toBe(true);
    })
    test('choices contains the correct ID', () => {
        expect(game.choices).toEqual(['button1', 'button2','button3', 'button4']);
    })

});

describe('new game works correctly', () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ['button1', 'button2']
        game.currentGame = ['button1', 'button2']
        document.getElementById('score').innertext= '42'
        newGame()
    });
    test('should set the game score to 0',()=>{
        expect(game.score).toEqual(0);
    });
    test('should reset the player move array',()=>{
        expect(game.playerMoves.length).toBe(0);
    });
    test('should reset the pc move array',()=>{
        expect(game.currentGame.length).toBe(0);
    });
    test('should display 0 on the score element',()=>{
        expect(document.getElementById('score').innertext).toBe(0);
    });

})