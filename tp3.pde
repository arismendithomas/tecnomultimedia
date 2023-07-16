//Arismendi Thomas
//tp3 Comisión 1
// URL del video:
//Perdon profe, las ilustraciones salieron bien feas jajaja


void setup() {

  for (int i=0; i<cantEscenas; i++) {
    pantallas[i] = loadImage("escena"+i+".jpeg");
    pantallas[i].resize(600, 600);
  }
  pantallas[0].resize(600, 600);
  background(pantallas[0]);
  size(600, 600);
}

void draw() {

  image(pantallas[fotito], 0, 0);
  if (fotito==0) {
    textSize(25);
    boton(width/2-50, height-50, 100, 50, "INICIO");
  }
  if (fotito==1) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 0);
  }
  if (fotito==2) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 1);
  }
  if (fotito==3){
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 2);
  }
  if (fotito==4) {
  boton(0,height/2-25, 50, 50, "dejar");
  boton(width-50, height/2-25, 50, 50, "No\ndejar");
  textosfinales(25, 25, 550, 150, 3);
  
  }
    if (fotito==5) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 4);
  
  }
      if (fotito==6) {
  boton(0,height/2-25, 50, 50, "No\n hacer \n caso");
  boton(width-50, height/2-25, 50, 50, "hacer \n caso");
  textosfinales(25, 25, 550, 150, 6);
  }
   if (fotito==7) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 7);
   }   
 if (fotito==8) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 9);
}
if (fotito==9) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 10);  
}
 if (fotito==10) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 11);
 }
 
 if (fotito==11) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 12);
    
 } if (fotito==12) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 13);
    
 } if (fotito==13) {
    boton(width-50, height/2-25, 50, 50, "Next");

    
 } if (fotito==14) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 5);
 }
  if (fotito==15) {
    boton(width-50, height/2-25, 50, 50, "Next");
    textosfinales(25, 25, 550, 150, 8);
  } 

}  
    
    
    
    
    
    
    
