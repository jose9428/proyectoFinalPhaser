import { Marcador } from "../componentes/Marcador.js";
import { Vidas } from "../componentes/Vidas.js";

export class Game1 extends Phaser.Scene{
    constructor(){
        super({key: 'game1'});
    }

    init(){
        this.objMarcador = new Marcador(this);
        this.objVidas = new Vidas(this);
        this.tiempo = 0;
    }

    preload(){
        this.load.image('fondo_nivel_1', 'images/fondo_nivel_1.jpg');
        this.load.image('bloque', 'images/guacamayo_salvar.jpg');
        this.load.image('bomba', 'images/bomba.png');
        this.load.image('casa', 'images/casa.png');
        this.load.spritesheet('jugador', 'images/sprite_mario.png', 
            { frameWidth: 32, frameHeight: 44 }
        );
   

        this.load.audio('sonido_principal_1','sonidos/principal_1.mp3');
    }

    crearBloques(){
        for(var i = 0; i<3;i++){
            let x = Phaser.Math.Between(10, 700);
            let y = Phaser.Math.Between(40, 300);
            this.bloques.create(x, y, 'bloque');
        }
    }


    agregarVelocidadBomba(){
        let velocity = 100 * Phaser.Math.Between(1.3 , 2);
        if(Phaser.Math.Between(0,10) > 5){
            velocity = 0 - velocity;
        }
        this.bomba.setVelocity(velocity , 10); 
    }

    create(){ 
        this.physics.world.setBoundsCollision(true,true,true,true);
        this.add.image(400 , 250, 'fondo_nivel_1');

        this.add.text(350,2,'NIVEL 1',{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'verdana, arial, sans-serif'
        });

        this.objMarcador.create();
        this.objVidas.create();

        this.musicGame = this.sound.add('sonido_principal_1');
        this.musicGame.loop = true;
        this.musicGame.volume = 1.0; 
        this.musicGame.play(); 

        this.bloques = this.physics.add.staticGroup();
        this.crearBloques();

        this.jugador = this.physics.add.image(400,480,'jugador').setImmovable(); // Agregar que sea inmovible
        this.jugador.body.allowGravity = false; 
        this.jugador.setCollideWorldBounds(true);
        this.jugador.setFrame(2); 

        this.casa = this.physics.add.image(500,30,'casa').setImmovable();;
        this.casa.body.allowGravity = false; 
        this.casa.setCollideWorldBounds(true);
        this.casa.visible = false;

        this.bomba = this.physics.add.image(780,0,'bomba');
        this.bomba.setCollideWorldBounds(true);
        this.bomba.setBounce(1);
        this.agregarVelocidadBomba();

        this.cursors = this.input.keyboard.createCursorKeys();


        // Colision
        this.physics.add.collider(this.jugador, this.bloques, this.colisionJugadorBloque, null, this);
        this.physics.add.collider(this.jugador, this.bomba, this.colisionJugadorBomba, null, this);
        this.physics.add.collider(this.jugador, this.casa, this.colisionJugadorCasa, null, this);
   
    }

    crearReiniciar(){
        this.jugador.x = 400;
        this.jugador.y = 480;
        this.jugador.setFrame(2); 
        this.bomba.x = 780;
        this.bomba.y = 0;
        
        this.agregarVelocidadBomba();
    }

    colisionJugadorBloque(jugador,bloque){
        bloque.disableBody(true, true);
        this.objMarcador.incrementarPuntos(10);

        if (this.bloques.countActive() === 0) {
            this.casa.visible = true;
        }
    }

    colisionJugadorCasa(jugador,casa){
        if(this.casa.visible){
            this.nextNivel();
        }
        
    }

    colisionJugadorBomba(jugador , bomba){
        this.objVidas.disminuirVidas(1);
        this.crearReiniciar();
    }

    update(){
        if(this.cursors.left.isDown){ // IZQUIERDA
            this.jugador.setVelocityX(-200); 
            this.jugador.setFrame(0);
        }else if(this.cursors.right.isDown){ // DERECHA
            this.jugador.setVelocityX(200); 
            this.jugador.setFrame(1);
        }else if(this.cursors.up.isDown){ // ARRIBA
            this.jugador.setVelocityY(-200); 
            this.jugador.setFrame(2);
        }else if(this.cursors.down.isDown){ // ABAJO
            this.jugador.setVelocityY(200); 
            this.jugador.setFrame(3);
        }else{
            this.jugador.setVelocityX(0); 
            this.jugador.setVelocityY(0); 
        }

        if(!this.objVidas.tieneVidas()){
            this.gameOver();
        }
    }

    gameOver(){
        this.musicGame.stop(); 
        this.scene.start('game_over');      
    }

    nextNivel(){
        this.musicGame.stop(); 
        this.scene.start('game1');      
    }
}