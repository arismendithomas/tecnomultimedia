class pantallas {
  constructor() {
    this.cargadeImagenes();
    this.fin = loadImage("data/fin.jpg");
    this.creditos = loadImage("data/creditos.png");
    this.instrucciones = loadImage("data/instrucciones.png");
    this.fondojuego = loadImage("data/fondojuego.png");
  }

  cargadeImagenes() {
    this.pantallas = [];
    for (let i = 0; i < 23; i++) {
      this.pantallas[i] = loadImage("data/pantalla" + i + ".png");
    }
  }

  ponerpantalla(numescena) {
    this.numescena=numescena;
    image(this.pantallas[this.numescena], 0, 0)
  }

  pantallafin() {
    image(this.fin, 0, 0);
  }
  pantallainstrucciones() {
    image(this.instrucciones, 0, 0);
  }
  pantallajuego(){
    image(this.fondojuego, 0, 0);
  }
  pantallacreditos(){
  image(this.creditos, 0, 0);
  }
}
