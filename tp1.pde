// Arismendi Thomas
// tp1 Comisión 1

PImage Inicio, Pueblito, Medio, PaseoCaballo, Acampar;//imagenes
PFont FuenteT, FuenteS;//fuentes
int px, py, iy, ix, tx1, tx2; //coordenadas
float ty; //coordenada de colombia inicio
float segundos; // reloj
float transp1, transp2, transp3, transp4, transp5; //transparencia
float tamaño; //tamaño de letra

void setup() {
  size(640, 480);
  FuenteT = loadFont("letraTitulo.vlw");
  FuenteS = loadFont("letraSecundaria.vlw");
  tamaño = 0; 
  textAlign(CENTER, CENTER);
// posiciones
  px = 640;
  py = 0;
  ty = 500;
  ix = 0;
  iy = 0;
  tx1 = 660;
  tx2= 0;
// imagenes
  Inicio = loadImage("tay1.jpeg");
  Inicio.resize(640, 480);
  Pueblito = loadImage("ciudadp.jpeg");
  Pueblito.resize(640, 480);
  Medio = loadImage("otra.jpeg");
  Medio.resize(640, 480);
  PaseoCaballo = loadImage("caballos.jpeg");
  PaseoCaballo.resize (154, 122);
  Acampar = loadImage("carpas1.jpeg");
  Acampar.resize (154,122);
// transparencias
  transp1 = 255;
  transp2 = 200;
  transp3 = 255;
  transp4 = 255;
  transp5 = 0;
}

void draw() {
  background(Inicio);
  if (frameCount%60==0.0) {
    segundos++;
  }
   
  fill(255, 255, 0);
  textSize(70);
  textFont(FuenteT);
  text("Parque Nacional", px, py);
  if (px>width/2) {
    px = px-1;
    if (px==width/2){
      px=width/2;
      }
  if (py<height/2){
    py = py+1;
    if (py==height/2){
      py=height/2;
      }
    }
  }
  fill(0, 0, 230);
  textSize(50);
  textFont(FuenteT);
  text("Tayrona",ix,iy);
  if (ix<width/2) {
    ix = ix+1;
    }
  if (iy<290) {
    iy = iy+1;
    }
  fill(230, 0, 0);
  textSize(40);
  textFont(FuenteT);
  text("COLOMBIA", width/2, ty);
  if(ty>330) {
    ty=ty-0.5;
    }
    println(segundos);
  noStroke();
  fill(0, 0, 0, transp1); 
  rect(0, 0, 640, 480);
  if (segundos>0) {
    transp1--;
  }
  if (segundos>=8) {
    background (Medio);
    fill(0, 0, 0, transp2);
    rect(10,10, 620,150);
    fill(255, 255, 255, transp3);
    textFont(FuenteS);
    textSize(25);
    text("Es un parque natural ubicado en la ciudad de \n Santa Marta en la costa pacífica Colombiana, \n conocido por ser el paradero de muchos turistas \n por su riqueza natural y multiples actividades \n acompañadas de gran variedad playas.", width/2, 83);
    if (segundos>=13) {
      transp2= transp2-3;
      transp3 = transp3-5;
    }
   if (transp3<=30) {
     fill(255,255,255,150);
     rect(133, 187, 362, 108);
     textSize(50);
     fill(0,0,230,transp4);
     text("ACTIVIDADES \n COMO", width/2, height/2);
   if(transp3<=0) {
     tint(190);
     image(PaseoCaballo, 60, 20, 150, 150);
     tint(190);
     image(Acampar, 365, 320, 150, 150);
     fill(220,220,0);
     text("Cabalgar por \n las montañas", tx1, 100);
     if (tx1>390){
       tx1--;
     }
     fill(220,0,0);
     text("Acampar en \n zonas naturales", tx2, 380);
     if (tx2<190) {
       tx2++;
     }
     if (segundos>=19){
      noStroke();
      fill(0, 0, 0, transp5); 
      rect(0, 0, 640, 480);
      transp5++;
     }
     if (transp5>=255){
       fill(255);
       textSize(tamaño);
       tamaño=tamaño+0.5;
       text("PERO TAMBIÉN",width/2, height/2);
      }
    }
  }
     if (segundos>25) {
       background(Pueblito);
       fill(0, 0, 0, 150);
       rect(8, 110, 620, 260);
       fill(255);
       textSize(40);
       text("LA CIUDAD PERDIDA \n Se encuentra dentro del parque donde \n la cual fue creada por tribus \n indigenas sobre el año \n 700 D.c", width/2, height/2); 
     }
   }
   if (segundos>28){
     if(mouseX>220&&mouseX<400&&mouseY>390&&mouseY<430){
       fill(220,0,0,200);
     }
       else {
         fill(230,230,0);
       }
     stroke(20);
     rect(220, 390, 180, 40);
     fill(0);
     textSize(20);
     text("REPETIR", 310, 410);
   }
  println(mouseX, mouseY);
}

void mousePressed() {
  if(mouseX>220&&mouseX<400&&mouseY>390&&mouseY<430){
    segundos = 0;
    px = 640;
  py = 0;
  ty = 500;
  ix = 0;
  iy = 0;
  tx1 = 660;
  tx2= 0;
  
    Inicio = loadImage("tay1.jpeg");
  Inicio.resize(640, 480);
  Pueblito = loadImage("ciudadp.jpeg");
  Pueblito.resize(640, 480);
  Medio = loadImage("otra.jpeg");
  Medio.resize(640, 480);
  PaseoCaballo = loadImage("caballos.jpeg");
  PaseoCaballo.resize (154, 122);
  Acampar = loadImage("carpas1.jpeg");
  Acampar.resize (154,122);
  transp1 = 255;
  transp2 = 200;
  transp3 = 255;
  transp4 = 255;
  transp5 = 0;
    }
  }
