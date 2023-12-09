class clasecontadores {
  constructor() {
    this.fuente = loadFont('data/pixel.otf');
  }

  tiempo(timer, xtiempo, ytiempo) {
    fill(255);
    textSize(70);
    textFont(this.fuente);
    text(timer, xtiempo, ytiempo);
  }

  llavesrestantes(cantllaves, xrestante, yrestante) {
    fill(255);
    textSize(70);
    textFont(this.fuente);
    text(cantllaves, xrestante, yrestante);
  }
}
