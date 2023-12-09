class llaves {

  constructor(x,y,ancho,alto) {
    this.aleatorio = [];
    this.ancho = ancho;
    this.alto = alto;
    this.imgkey = loadImage('data/key.png');
    this.x = x;
    this.y = y;
  }

muestra() {
image(this.imgkey, this.x, this.y);
  }
}
