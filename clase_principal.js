
class clasePrincipal {

  constructor() {
    this.orden = 0;
    this.numescenas = 0;
    this.botones = new botones();
    this.escena = new escenas();
    this.balax=28;
    this.balay=473;
    this.bala = new bala(this.balax, this.balay);
    this.mamax=0;
    this.mamay=460;
    this.mama = new mama(this.mamax, this.mamay);
    this.teclaA = false;
    this.teclaD = false;
    this.disparo = false;
    this.velocidad = 4;
    this.velocidadbala = 4;
    this.velocidadbalay = 10;
    this.numbala =0;
    this.direccion = [];
    //cosas que pueden ir en reset
    for (let i=0; i<6; i++) {
      if (i/2===0) {
        this.direccion[i] = 1;
      } else {
        this.direccion[i] = -1;
      }
    }
    this.alienx = [];
    for (let i=0; i<6; i++) {
      this.alienx[i]=random(0, 600);
    }
    //cosas que pueden ir en reset
    this.alieny = [100, 148, 195, 242, 290, 338];
    this.alien = new alien();
    this.ancho=99;
    this.alto=95;
    this.num=0
      this.contador = new contador(this.num);
    this.numcora=3;
    this.vida = new vidas (this.numcora);
  }

  display() {
    this.mostrar();
  }

  accionbotones() {
    if (this.orden===0 && this.botones.accionboton(45, 500, 238, 90)) {
      this.orden=1;
    }
    if (this.orden===1 && this.botones.accionboton(250, 598, 210, 72)) {
      this.orden=2;
    }
  }

  aliens() {
    for (let i=0; i<6; i++) {
      this.alien.dibujaralien(this.alienx[i], this.alieny[i]);
      this.alienx[i]+= this.direccion[i];
      if (this.alienx[i]>610 || this.alienx[i]<0) {
        this.direccion[i] *= -1;
      }
      if (this.impacto()) {
        this.alieny[i]+=1000;
        this.disparo=false;
        this.bala.balax = this.mama.mx+28;
        this.bala.balay = 473;
        this.contador.num++;
      }
    }
  }

  impacto() {
    if (this.bala.balax>this.alien.alienx && this.bala.balax<this.alien.alienx+this.ancho && this.bala.balay>this.alien.alieny && this.bala.balay<this.alien.alieny+this.alto) {
      return true;
    } else {
      return false;
    }
  }

  pierdevida () {
    if (this.bala.balay <= 0 ) {
        return true;
      } else {
        return false;
      }
    }
  
  condividas() {

    if (this.pierdevida() === true && this.vida.numcora <= 3) {
      this.vida.numcora -=1;
    }
  }

  balaymujer() {
    this.bala.dibujarbala();
    if (this.mama.mx > width) {
      this.mama.mx = -90;
      this.bala.balax = -62;
    }
    this.mama.dibujarmujer();
    if (this.mama.mx < -90) {
      this.mama.mx = width;
      this.bala.balax = width +62;
    }
  }

  mostrar() {
    if (this.orden===0) {
      this.escena.ponerescena(this.numescenas);
    }
    if (this.orden===1) {
      this.escena.ponerescena(this.numescenas=1);
    }
    if (this.orden===2) {
      this.escena.ponerescena(this.numescenas=2);

      if (this.teclaD) {
        this.mama.mx += this.velocidad;
      }
      if (this.teclaD && this.disparo===false) {
        this.bala.balax += this.velocidadbala;
      }

      if (this.teclaA) {
        this.mama.mx -= this.velocidad;
      }
      if (this.teclaA && this.disparo===false) {
        this.bala.balax -= this.velocidadbala;
      }

      if (this.disparo) {
        this.bala.balay -= this.velocidadbalay;
      }

      this.balaymujer();
      this.aliens();
      this.contador.dibujarcontador();
      this.vida.dibujarcorazon();
      this.condividas();


      if (this.orden===3) { //perder
        this.escena.ponerescena(this.numescenas = 3);
      }
      if (this.orden===4) { //ganar
        this.escena.ponerescena(this.numescenas = 4);
      }
      if (this.orden===5) { //creditos
        this.escena.ponerescena(this.numescenas = 5);
      }
    }
  }


  /*
  condicorazones() {
   this.corazones.dibujarvidas();
   
   if (this.bala.balay===0 && this.coraencurso===0) {
   this.coraencurso +=1;
   
   
   
   if (this.orden === 3) {
   this.coraencurso=0;
   this.contador.num=0;
   this.mama.mx = 0;
   this.bala.balay = 473;
   this.bala.balax = this.mama.mx+28;
   this.disparo = false;
   this.alienx=[];
   this.alieny=[100, 148, 195, 242, 290, 338];
   this.orden = 0;
   }
   if (this.coraencurso===3) {
   this.orden=3;
   }
   if (this.orden===4) {
   this.coraencurso=0;
   this.contador.num=0;
   this.mama.mx = 0;
   this.bala.balay = 473;
   this.bala.balax = this.mama.mx+28;
   this.disparo = false;
   this.alienx=[];
   this.alieny=[100, 148, 195, 242, 290, 338];
   this.orden = 0;
   }
   if (this.contador.num === 6) {
   this.orden = 4;
   }
   }
   */

  accionteclas() {

    if (key === 'a' || key === 'A') {
      this.teclaA = true;
    }
    if (key === 'd' || key === 'D' ) {
      this.teclaD = true;
    }
    if (key === 'p' || key === 'P') {
      this.disparo = true;
    } else if  (this.bala.balay<0 && key === 'r' || key === 'R') {
      this.bala.balay = 473;
      this.bala.balax = this.mama.mx+28;
      this.disparo = false;
    }
  }
  noaccionteclas() {

    if (key === 'a' || key === 'A') {
      this.teclaA = false;
    }
    if (key === 'd' || key === 'D') {
      this.teclaD = false;
    }
  }
}
