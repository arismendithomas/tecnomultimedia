class clasemargot {

  constructor(mx, my,anm,alm) {
    this.mx = mx;
    this.my = my;
    this.imgmargot = [];
    this.num = 0;
    this.alm=alm; //alto de imagen de margot
    this.anm=anm; //ancho de imagen de margot
    //carga de las imagenes usando arreglos
    for (let i=0; i<6; i++) {
      this.imgmargot.push(loadImage('data/camina'+i+'.png'));
    }
   
  }

  dibujamargot() {
    //condicional de avance de fotogramas
    if (frameCount%18==0) {
      if (this.num<5) {
        this.num++;
      } else {
        this.num=0;
      }
    }
    for (let i=0; i<6; i++) {
      image(this.imgmargot[this.num], this.mx, this.my);
    }
  }
  
    //movimiento margot
  movmargot(tecla) {
    this.tec=tecla;
    if (keyIsDown(RIGHT_ARROW) && this.mx<width-100/2) {
      this.mx+=5;
    }
    if (keyIsDown(LEFT_ARROW) && this.mx>120/2) {
      this.mx-=5;
    }
    if (keyIsDown(UP_ARROW) && this.my>430/2) {
      this.my-=5;
    }
    if (keyIsDown(DOWN_ARROW ) && this.my<height-100) {
      this.my+=5;
    }
  }
  
}
