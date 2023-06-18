//Arismendi Thomas
//tp1 Comision 1
// URL del video: 

PImage ilusion; //nombre de la imagen
int cant;
int cant2;
float espacio;
float colores;
color fondo;
float altura;
float alturat;
float cantc;

void setup(){
  size(800,400);//tamaño de la ventana
  ilusion = loadImage("ilusionoptica.jpeg"); //cargar la imagen al programa
  ilusion.resize(400,400); //ajustar imagen
  background(255); //color del fondo
  cant=22;
  espacio=6;
  colores=255;
  cant2=90;
  altura =2;
  alturat=7;
  cantc=1.1;
}
void draw(){
  println(mouseX,mouseY);
  image(ilusion, 0,0,400,400); // posición de la imagen 
  pushMatrix();
  translate(400,0);
 

  fill(fondo);
  rectMode(CORNER);
  rect(0,0,400,400);


  colores = map(mouseX,400,width,255,50);
  fill(212, 242, 8, colores);
  flechai();
  flechad();
  flechadsola();
  flechaisola();
    popMatrix();

rectMode(CENTER);
fill(0,0,0,100);
rect(200,200, 200, 150);
textAlign(CENTER);
fill(255);
textSize(15);
text("mover maouse de izquierda \n a derecha, tambien dar click \n izquierdo en la pantalla",200,190);
}

void mousePressed(){
  if (mousePressed){
    fondo=color(random(50,120),random(0,10),random(70,180));
  }
}
