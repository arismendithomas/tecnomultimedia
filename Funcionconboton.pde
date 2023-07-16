boolean accionboton(int x, int y, int ancho, int alto) {
  if (mouseX>x &&mouseY>y &&mouseX<ancho+x &&mouseY<alto+y) {
    return true;
  } else {
    return false;
  }
}

void boton(int x, int y, int ancho, int alto, String texto) {
  if ((mouseX>x &&mouseY>y &&mouseX<ancho+x &&mouseY<alto+y)) {
    fill(0, 235, 0, 150);
  } else {
    fill(235, 235, 0, 150);
  }
  rect(x, y, ancho, alto);
  fill(0);
  textAlign(CENTER, CENTER);
  text(texto, ((ancho/2)+x), ((alto/2)+y));
}

void mousePressed() {
  if (accionboton(width/2-50, height-50, 100, 50)) {
    if (fotito==0) {
      fotito=fotito+1;
    }
  }
  if (accionboton(width-50, height/2-25, 50, 50)) {
    if (fotito>=1){
      fotito++;
      } 
     if (fotito==14){
      fotito=0;
      }
      }
      
 if(accionboton(0, height/2-25, 50, 50)){
   if(fotito==4){
   fotito=14;
   }else if(fotito==6){
   fotito=15;
 }
 }
 
 if(accionboton(width-50, height/2-25, 50, 50)){
   if(fotito==14){
     fotito=13;
   }else if(fotito==16){
   fotito=13;
   
 
 
 }
 }
 
 }
 
 
 
  

      
      
      
      /*
  if(fotito==4){
        fotito=5;
     }else if(accionboton(0, height/2-25, 50, 50)&&fotito==4){
      fotito=14;
     }
  } 
 
     
 if (accionboton(width-50, height/2-25, 50, 50)) {
    if (fotito==5){
      fotito=6;
      }
  }if(accionboton(width-50, height/2-25, 50, 50)&&fotito==5){
        fotito=7;
     }if(accionboton(0, height/2-25, 50, 50)){
      fotito=15;
     }

   if (accionboton(width-50, height/2-25, 50, 50)) {
    if (fotito>=7){
      fotito++;
  }
     if(accionboton(width-50, height/2-25, 50, 50)&&fotito==13){
        fotito=13;
     }if(accionboton(0, height/2-25, 50, 50)){
      fotito=14;
     }

   }
}
     
   
   */
   
   
   
   

  






/*
boolean dentrodelboton(int x, int y, int ancho, int alto){
 boolean cosita   ;                 //funcion que detecta que está dentro del botón
 if (mouseX>x &&mouseY>y &&mouseX<ancho+x &&mouseY<alto+y){
 cosita= true;
 }else {
 cosita= false;
 }
 return cosita;
 }
 
 void boton(int x, int y, int ancho, int alto, String texto){
 if (mouseX>x &&mouseY>y &&mouseX<ancho+x &&mouseY<alto+y){
 if(dentrodelboton(x,y,ancho,alto)){
 fill(0, 235, 0, 200);
 }else {
 fill(235, 235, 0, 200);
 }
 rect(x, y, ancho, alto);
 fill(0);
 textAlign(CENTER, CENTER);
 text(texto, ((ancho/2)+x), ((alto/2)+y));
 }
 }
 
 void mousePressed(){
 if(dentrodelboton(width/2-75, height-100, 150, 50)){
 
 numero += 1;
 numerot += 1;
 }
 }
 */
