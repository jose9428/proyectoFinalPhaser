import { RestartButton } from '../componentes/RestartButton.js';

export class GameInicio extends Phaser.Scene {

    constructor() {
        super({ key: 'game_inicio' });
    }

    preload() {
        this.load.image('titulo_inicio_1', 'images/titulo.png');
        this.load.image('fondo_inicio_1', 'images/fondo.jpg');
        this.load.image('imagen_inicio_1', 'images/guacamayo_1.png');
        this.load.image('imagen_inicio_2', 'images/guacamayo_2.png');
        this.load.audio('sonido_hakuna','sonidos/fondo_hakuna_matata.mp3');
        this.load.spritesheet('button_jugar', 'images/boton_jugar.png', { frameWidth: 218, frameHeight: 60 });
    }

    create() {
        this.add.image(410, 250, 'fondo_inicio_1');
        this.add.image(400, 150, 'titulo_inicio_1');
        this.add.image(100, 260, 'imagen_inicio_1');
        this.add.image(710, 260, 'imagen_inicio_2');

        this.startButton = this.add.sprite(400, 350, 'button_jugar').setInteractive();

        this.music = this.sound.add('sonido_hakuna');
        this.music.loop = true;
        this.music.volume = 1.0; 
        this.music.play(); 

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => {
            localStorage.setItem('puntos', 0);
            localStorage.setItem('vidas', 4);
            this.scene.start('game1');
            this.music.stop();
        });

        this.texto = this.add.text(15,460,'Creado by: Jose Castro',{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'verdana, arial, sans-serif'
        });
    }
}