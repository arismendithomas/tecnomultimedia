class contador {

  constructor(num) {
    this.num=num;
    this.contador=loadImage("data/contador.png");
    this.dibujarcontador();
  }

  dibujarcontador() {
    image(this.contador, 385, 25);
    fill(0,255,0);
    textSize(48);
    text(this.num, 465, 70);
  }
}
