class escenas {
  constructor() {
    this.cargadeImagenes();
  }

  cargadeImagenes() {
    this.escenas = [];
    for (let i = 0; i < 6; i++) {
      this.escenas[i] = loadImage("data/escena" + i + ".png");
    }
  }

  ponerescena(numescena) {
    this.numescena=numescena;
    image(this.escenas[this.numescena], 0, 0)
  }
}
