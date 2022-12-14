export class Vidas{
    constructor(scene){
        this.escena = scene;
        this.vidas = 3;
    }

    create(){
        this.texto = this.escena.add.text(660,2,'VIDAS: '+this.getVidas(),{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'verdana, arial, sans-serif'
        });
    }

    disminuirVidas(vida){
        this.vidas-= vida;
        this.setVidas();
        this.texto.setText('VIDAS: '+this.getVidas());
        
    }

    tieneVidas(){
        return this.vidas > 0;
    }
    setVidas(){
        localStorage.setItem('vidas', this.vidas);
    }
    getVidas(){
        var vidas =  localStorage.getItem('vidas');

        if(vidas == undefined ||  vidas == null){
            this.vidas = 3;
        }else{
            this.vidas = parseInt(vidas);
        }
        return this.vidas;
    }
}