// <reference path="player.ts" />
// <reference path="game.ts" />

import { Player } from './player';
import { Game } from './game';

import * as Helpers from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');
    // player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));
    
    // const problemCount: number = Number(Utility.getInputValue('problemCount'));
    // const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
  });
  
  // add click handler to the calculate score button
  document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
  });

// function startGame() {
//     // test

//     let playername: string | undefined = getInputValues('playername');
    
//     logPlayer(playername);

//     postScore(100, playername);
//     postScore(-5, playername);
    
// }

// function logPlayer(name : string = 'MultiMath Player') : void {
//     console.log(`New game starting for player: ${name}`);
// }

// // function getInputValues(elementID: string) : string | undefined {
// //     const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    
// //     if (inputElement.value == '') {
// //         return undefined;
// //     }
// //     else {
// //         return inputElement.value;
// //     }
    
// // }

// function postScore(score: number, playerName: string = 'MultiMath Player') : void {
    
//     let logger: (value: string) => void;

//     if (score < 0) {
//         logger = logError;
//     } else {
//         logger = logMessage;
//     }
    
//     const scoreElement:HTMLElement | null = document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} - ${playerName}`;

//     logger(`Score: ${score}`);

    
// }



// document.getElementById('startGame')!.addEventListener('click', startGame);


// const logMessage = (message: string) => console.log(message);

// // logMessage('arrow function');

// function logError(err: string): void {
//     console.error(err);
// }

// // let myResult: Result = {
// //     playerName: 'Marie',
// //     score: 5,
// //     problemCount: 5,
// //     factor: 7
// // };

// // let player: Person = {
// //     name: 'Daniel',
// //     formatName: () => 'Dan'
// // };

// const firstPlayer: Player = new Player();
// firstPlayer.name = 'Lanier';
// console.log(firstPlayer.formatName());