import { GameInicio } from "./escenas/GameInicio.js";
import { Game1 } from "./escenas/Game1.js";
import { Game2 } from "./escenas/Game2.js";
import { Game3 } from "./escenas/Game3.js";
import { Game4 } from "./escenas/Game4.js";
import { GameOver } from './escenas/GameOver.js';
import { EndGame } from './escenas/EndGame.js';
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
   scene: [GameInicio , Game1, Game2,Game3,Game4,GameOver,EndGame],
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y: 400},
            debug: false
        }
    }
}

var game = new Phaser.Game(config)