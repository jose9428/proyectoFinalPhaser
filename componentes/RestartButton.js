export class RestartButton {

    constructor(scene) {
        this.escena = scene;
    }

    preload() {
        this.escena.load.spritesheet('button', 'images/boton_jugar.png', { frameWidth: 218, frameHeight: 60 });
    }

    create(music) {
        this.startButton = this.escena.add.sprite(400, 350, 'button').setInteractive();

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => {
            this.escena.scene.start('game1');
            // Apagar la musica del GameOver
            music.stop();
        });
    }
}