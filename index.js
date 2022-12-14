import { GameInicio } from "./escenas/GameInicio.js";
import { Game1 } from "./escenas/Game1.js";
import { GameOver } from './escenas/GameOver.js';
import { EndGame } from './escenas/EndGame.js';
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
   // scene: [GameInicio , Game1 , GameOver, EndGame],
   scene: [ GameInicio , Game1, GameOver],
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y: 400},
            debug: false
        }
    }
}

var game = new Phaser.Game(config)