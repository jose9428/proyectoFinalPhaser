import { RestartButton } from '../componentes/RestartButton.js';

export class GameOver extends Phaser.Scene {

    constructor() {
        super({ key: 'game_over' });
    }

    preload() {
        this.load.image('fondo_inicio_1', 'images/fondo.jpg');
        this.load.image('immagen_gameover', 'images/gameover.png');
        this.load.image('imagen_inicio_1', 'images/guacamayo_1.png');
        this.load.image('imagen_inicio_2', 'images/guacamayo_2.png');
        this.load.audio('sonido_game_over','sonidos/gameover.mp3');
        this.load.spritesheet('button_jugar', 'images/boton_jugar.png', { frameWidth: 218, frameHeight: 60 });
    }

    create() {
        this.add.image(410, 250, 'fondo_inicio_1');
        this.add.image(100, 260, 'imagen_inicio_1');
        this.add.image(710, 260, 'imagen_inicio_2');
        this.add.image(400, 180, 'immagen_gameover');

        this.startButton = this.add.sprite(400, 350, 'button_jugar').setInteractive();

        this.musicGame = this.sound.add('sonido_game_over');
        this.musicGame.loop = true;
        this.musicGame.volume = 1.0; 
        this.musicGame.play(); 

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => {
            localStorage.setItem('puntos', 0);
            localStorage.setItem('vidas', 3);
            this.scene.start('game1');
            this.musicGame.stop();
        });

        this.texto = this.add.text(15,460,'Creado by: Jose Castro',{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'verdana, arial, sans-serif'
        });
    }
}