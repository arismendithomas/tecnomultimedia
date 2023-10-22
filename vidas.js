class vidas {

  constructor(numcora) {
    this.numcora=numcora;
    this.corazon=loadImage("data/cora.png");
    this.dibujarcorazon();
  }

  dibujarcorazon() {
    image(this.corazon, 170, 25);
    fill(255,0,0);
    textSize(48);
    text(this.numcora, 280, 70);
  }
}
