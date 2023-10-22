class alien {

  constructor(){

    this.alien=loadImage("data/ovni.png");
    this.dibujaralien();  
  }

dibujaralien(x,y){
  this.alienx=x;
  this.alieny=y;
  image(this.alien, this.alienx, this.alieny, 99, 95);
}

}
