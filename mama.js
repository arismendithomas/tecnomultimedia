class mama {

  constructor(mx,my) {
    this.mx = mx;
    this.my = my;
    this.mama = [];
    this.nummama = 0;
    this.cargadeImagenes();
  }

  cargadeImagenes() {
    for (let i = 0; i < 4; i++) {
      this.mama[i] = loadImage("data/mujer" + i + ".png");
    }
  }

  dibujarmujer() {
    if (frameCount%12==0) {
      if (this.nummama<3) {
        this.nummama++;
      } else {
        this.nummama=0;
      }
    }
    for (let i=0; i<4; i++) {
      image(this.mama[this.nummama], this.mx, this.my);
    }
  }
}
