class principal {

  constructor() {
    this.boton = new boton();
    this.pantallas = new pantallas();
    this.asigno = 0;
    this.numasigno = 0;
    this.juego = new juego();
  }

  funcionaboton() {
    if (this.asigno===0) { //boton start
      if (this.boton.accionboton(238, 415, 200, 59)) {
        this.asigno = 1;
      }
    }
    if (this.asigno===4) { //boton hablar
      if (this.boton.accionboton(17, 227, 235, 81)) {
        this.asigno = 5;
      }
    }
    if (this.asigno===4) { //boton callarse
      if (this.boton.accionboton(452, 225, 235, 81)) {
        this.asigno = 9;
      }
    }
    if (this.asigno===15) { //boton disfrutar
      if (this.boton.accionboton(269, 218, 153, 51)) {
        this.asigno = 16;
      }
    }
    if (this.asigno===15) { //boton venganza
      if (this.boton.accionboton(273, 389, 153, 51)) {
        this.asigno = 17;
      }
    }
    if (this.asigno === 25) { //boton inicio del juego
      if (this.boton.accionboton(225, 530, 220, 65)) {
        this.asigno = 26;
      }
    }
    if (this.asigno === 24) { //boton a creditos
      if (this.boton.accionboton(248, 600, 200, 59)) {
        this.asigno = 27;
      }
    } else if (this.asigno === 27) { //boton creditos a inicio
      if (this.boton.accionboton(242, 467, 213, 57)) {
        this.juego.reset();
        this.asigno = 0;
      }
    }
    if (this.boton.accionboton(560, 587, 129, 94)) {  //botones next
      if (this.asigno===1) {
        this.asigno = 2;
      } else if (this.asigno === 2) {
        this.asigno = 3;
      } else if (this.asigno === 3) {
        this.asigno = 4;
      } else if (this.asigno === 5) {
        this.asigno = 6;
      } else if (this.asigno === 6) {
        this.asigno = 7;
      } else if (this.asigno === 7) {
        this.asigno = 8;
      } else if (this.asigno === 9) {
        this.asigno = 10;
      } else if (this.asigno === 10) {
        this.asigno = 11;
      } else if (this.asigno === 11) {
        this.asigno = 12;
      } else if (this.asigno === 13) {
        this.asigno = 14;
      } else if (this.asigno === 14) {
        this.asigno = 15;
      } else if (this.asigno === 17) {
        this.asigno = 18;
      } else if (this.asigno === 19) {
        this.asigno = 20;
      } else if (this.asigno === 20) {
        this.asigno = 21;
      } else if (this.asigno === 21) {
        this.asigno = 22;
      } else if (this.asigno === 16) { //final
        this.asigno = 24;
      } else if (this.asigno === 22) { //final
        this.asigno = 24;
      } else if (this.asigno === 8) {//final
        this.asigno = 24;
      } else if (this.asigno === 18) {//final
        this.asigno = 24;
      } else if (this.asigno === 12) { //juego
        this.asigno = 25;
      }
    }
  }

  display() {
    this.condiasigno(0);
    this.condiasigno(1);
    this.condiasigno(2);
    this.condiasigno(3);
    this.condiasigno(4);
    this.condiasigno(5);
    this.condiasigno(6);
    this.condiasigno(7);
    this.condiasigno(8);
    this.condiasigno(9);
    this.condiasigno(10);
    this.condiasigno(11);
    this.condiasigno(12);
    this.condiasigno(13);
    this.condiasigno(14);
    this.condiasigno(15);
    this.condiasigno(16);
    this.condiasigno(17);
    this.condiasigno(18);
    this.condiasigno(19);
    this.condiasigno(20);
    this.condiasigno(21);
    this.condiasigno(22);
    this.condiasigno(23);
    if (this.asigno === 24) {   //pantalla fin
      this.pantallas.pantallafin();
    }
    if (this.asigno === 25) {  //instrucciones
      this.pantallas.pantallainstrucciones();
    }
    if (this.asigno === 27) {  //creditos
      this.pantallas.pantallacreditos();
    }
    if (this.asigno === 26) {
      this.juego.mostrar();
      if (this.juego.timer>0) {
        if (this.juego.llavesrestantes === 0) {
          this.pantallas.ponerpantalla(this.asigno=13);
        }
      }
      if (this.juego.timer === 0) {
        if (this.juego.llavesrestantes > 0) {
          this.pantallas.ponerpantalla(this.asigno=19);
        }
      }
    }
  }

  condiasigno(numasigno) {
    this.numasigno = numasigno;
    if (this.asigno === numasigno) {
      this.pantallas.ponerpantalla(numasigno);
    }
  }
}
