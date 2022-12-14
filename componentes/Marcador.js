export class Marcador{
    constructor(scene){
        this.escena = scene;
        this.puntos = 0;
    }

    create(){
        this.texto = this.escena.add.text(30,2,'PUNTOS: '+this.getPuntos(),{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'verdana, arial, sans-serif'
        });
    }

    incrementarPuntos(punto){
        this.puntos+= punto;
        this.setPuntos();
        this.texto.setText('PUNTOS: '+this.getPuntos());
       
    }

    setPuntos(){
        localStorage.setItem('puntos', this.puntos);
    }

    getPuntos(){
        debugger
        var punto =  localStorage.getItem('puntos');

        if(punto == undefined ||  punto == null){
            this.puntos = 0;
        }else{
            this.puntos = parseInt(punto);
        }
        return this.puntos;
    }
}