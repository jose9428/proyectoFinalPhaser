import { RestartButton } from '../componentes/RestartButton.js';

export class EndGame extends Phaser.Scene {

    constructor() {
        super({ key: 'endGame' });
        this.reiniciarBoton = new RestartButton(this);
    }

    preload() {
        this.load.image('fondo_inicio_1', 'images/fondo.jpg');
        this.load.image('endGame', 'images/ganador.png');
        this.load.image('imagen_inicio_1', 'images/guacamayo_1.png');
        this.load.image('imagen_inicio_2', 'images/guacamayo_2.png');
        this.load.audio('sonido_win','sonidos/win.mp3');
        this.reiniciarBoton.preload();
    }

    create() {
        this.add.image(410, 250, 'fondo_inicio_1');
        this.add.image(100, 260, 'imagen_inicio_1');
        this.add.image(710, 260, 'imagen_inicio_2');

        this.congratsImage = this.add.image(400, 180, 'endGame');

        this.musicWin = this.sound.add('sonido_win');
        this.musicWin.loop = true;
        this.musicWin.volume = 1.0; // Volumen normal 
        this.musicWin.play(); 

        this.reiniciarBoton.create(this.musicWin);
    }
}