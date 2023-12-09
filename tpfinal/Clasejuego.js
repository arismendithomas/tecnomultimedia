class juego {

  constructor() {
    this.margot = new clasemargot(600, 200, 40, 70);
    this.contador = new clasecontadores();
    //asignacion de valores
    this.keys = [];
    this.cantllaves = 15;
    this.timer = 10;
    this.llavesrestantes = 15;
    this.llavesrandom();
    this.pantallas = new pantallas();
  }
  mostrar() {
    this.pantallas.pantallajuego();
    this.generallaves();
    this.margot.dibujamargot();
    this.margot.movmargot(keyCode);
    //llamado de la colisión
    this.contacto();
    //dibuja contador de tiempo
    this.contador.tiempo(this.timer, 500, 95);
    //condicional para cuenta regresiva
    if (frameCount % 60 == 0 && this.timer>0) {
      this.timer--;
    }
    //dibuja contador de llaves restantes
    this.contador.llavesrestantes(this.llavesrestantes, 200, 95);
    //condicional ganar o perder
  }

  //carga y generacion de las llaves en posicion random
  llavesrandom() {
    for (let i=0; i<this.cantllaves; i++) {
      this.keys[i] = new llaves(random(50, 650), random(190, 650), 45, 42);
    }
  }

  generallaves() {
    for (let i=0; i<this.cantllaves; i++) {
      this.keys[i].muestra();
    }
  }

  //Parámetros para la colision
  conditoca(xllave, yllave, anchollave, mx, my, mancho, malto) {
    return xllave+anchollave>mx && xllave<mx+mancho && yllave+anchollave/2>my && yllave<my+malto;
  }

  contacto() {
    for (let i=0; i<this.cantllaves; i++) {
      if (this.conditoca(this.keys[i].x, this.keys[i].y, this.keys[i].ancho, this.margot.mx, this.margot.my, this.margot.anm, this.margot.alm)) {
        this.keys[i].x = 800;
        this.keys[i].y = 800;
        this.llavesrestantes--;
      }
    }
  }

  //metodo de reseteo
  reset() {
    this.asigno = 0;
    this.timer = 10;
    this.llavesrestantes = 15;
    this.num = 0;
    this.margot.mx = 600;
    this.margot.my = 200
    this.llavesrandom();
    this.generallaves();
  }
}
