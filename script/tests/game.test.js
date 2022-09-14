/**
 * @jest-environment jsdom
 */

//type in terminal:
// npm init (type jest as test command) 
// npm install --save-dev jest
// npm install -D jest-environment-jsdom

//mandatory

const {
    game
} = require('../game');

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