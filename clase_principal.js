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
    this.direccion = [];
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
    textSize(20);
    text(this.orden, 50, 50);
  }

  accionbotones() {
    if (this.orden===0) { // inicio a instrucciones
      if (this.botones.accionboton(45, 500, 238, 90)) { // portada a intrucciones
        this.orden=1;
      }
    }
    if (this.orden===1) { // instrucciones a juego
      if (this.botones.accionboton(258, 593, 183, 70)) { //instrucciones a juego
        this.orden=2;
      }
    }

    if (this.orden===3) {//perdiste a creditos
      if (this.botones.accionboton(397, 560, 180, 50)===true) {
        //this.orden=5;
        this.creditos();
        fill(255);
        rect(400,400,200,200);
      }
    }
    
    if (this.orden===3) { //perdiste a inicio
      if (this.botones.accionboton(415, 465, 135, 50)===true) {
        this.reseteo();
      }
    }


    if (this.orden===4) {// ganaste a creditos
      if (this.botones.accionboton(471, 604, 177, 49)===true) {
        this.orden=5;
        fill(255);
        rect(400,400,200,200);
      }
    }
    
    if (this.orden===4) { //ganaste a inicio
      if (this.botones.accionboton(49, 602, 136, 51)=== true) {
        this.reseteo();
      }
    }


    if (this.orden===5) { //creditos a inicio
      if (this.botones.accionboton(277, 592, 134, 50)=== true) {
        this.reseteo();
      }
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
      if (this.pierdevida()) {
        this.disparo=false;
        this.bala.balax = this.mama.mx+28;
        this.bala.balay = 473;
        this.vida.numcora -=1;
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

  balaymujer() {
    this.bala.dibujarbala();
    if (this.mama.mx > width) {
      this.mama.mx = -90;
      this.bala.balax = -62;
    }
    this.mama.dibujarmujer();
    if (this.mama.mx < -90) {
      this.mama.mx = width;
      this.bala.balax = width +28;
    }
  }

  mostrar() {
    
    if (this.orden===0) {
      this.escena.ponerescena(this.numescenas = 0);
    }
    if (this.orden===1) {
      this.escena.ponerescena(this.numescenas=1);
    }
    if (this.orden===2) {
      this.escena.ponerescena(this.numescenas=2);
      this.balaymujer();
      this.aliens();
      this.contador.dibujarcontador();
      this.vida.dibujarcorazon();
      this.condimov();
    }
    if (this.contador.num === 6) {
      this.orden =4;
    }
    if (this.vida.numcora === 0) {
      this.orden=3;
    }
    if (this.orden===3) { //perder
      this.escena.ponerescena(this.numescenas=3);
    }

    if (this.orden===4) { //ganar
      this.escena.ponerescena(this.numescenas=4);
    }

    if (this.orden===5) { //creditos
      this.escena.ponerescena(this.numescenas= 5);
    }
  }
creditos(){
rect(400,600, 650, 200);
}
  reseteo() {
    this.orden=0;
    this.balax=28;
    this.balay=473;
    this.mamax=0;
    this.mamay=460;
    this.disparo = false;
    this.alienx = [];
    this.alieny = [100, 148, 195, 242, 290, 338];
    this.contador.num=0;
    this.vida.numcora=3;
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
  }

  condimov() {
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
  }


  accionteclas() {

    if (key === 'a' || key === 'A') {
      this.teclaA = true;
    }
    if (key === 'd' || key === 'D' ) {
      this.teclaD = true;
    }
    if (key === 'p' || key === 'P') {
      this.disparo = true;
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
