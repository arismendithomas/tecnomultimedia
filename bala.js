class bala {

  constructor(xb, yb) {
    this.balax=xb;
    this.balay=yb;
    this.bala=loadImage("data/bala.png");
    this.dibujarbala();
  }

  dibujarbala() {
    image(this.bala, this.balax, this.balay);
  }
}
