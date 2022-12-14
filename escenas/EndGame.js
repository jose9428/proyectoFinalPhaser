import { RestartButton } from '../componentes/RestartButton.js';

export class EndGame extends Phaser.Scene {

    constructor() {
        super({ key: 'endGame' });
        this.reiniciarBoton = new RestartButton(this);
    }

    preload() {
        this.load.image('endGame', 'images/ganador.png');
        this.load.audio('sonido_win','sonidos/win.mp3');
        this.reiniciarBoton.preload();
    }

    create() {
        this.add.image(410, 250, 'background');
        this.congratsImage = this.add.image(400, 120, 'endGame');

        this.musicWin = this.sound.add('sonido_win');
        this.musicWin.loop = true;
        this.musicWin.volume = 1.0; // Volumen normal 
        this.musicWin.play(); 

        this.reiniciarBoton.create(this.musicWin);
    }
}