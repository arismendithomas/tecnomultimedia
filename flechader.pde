void flechad(){
triangulo2 (18,90);
cuadrado2 (7,110, 22,18);
}

void cuadrado2(float x, float y, float ancho, float alto){
//22 de largo
//18 de alto
  for(float i=1; i<cant2; i=i+8.7){
    for(float l=1; l<altura; l=l+0.542){
    noStroke();
    rectMode(CENTER);
    rect(x*i,y*l,ancho,alto);
    }
  }
}

void triangulo2 (float x, float y){
float altura= 22; //altura de triangulo
float base= 42; //base del triangulo
for(float i=1; i<cant; i=i+3.3598){
  for(float l=1; l<1.8; l=l+0.653){
  noStroke();
  triangle(x*i, y*l, x*i, (l*y+base), ((x*i)+altura), (l*y+(base/2)));
    }
  }
}

void flechadsola(){
cuadradosolo(7,363,22,18);
triangulosolo(18, 343);
}
void cuadradosolo(float x, float y, float ancho, float alto){
    for(float i=1; i<cant2; i=i+8.7){
    noStroke();
    rectMode(CENTER);
    rect(x*i,y,ancho,alto);
    }
  }
void triangulosolo(float x, float y){
  float altura= 22; //altura de triangulo
float base= 42; //base del triangulo
for(float i=1; i<cant; i=i+3.3598){
  noStroke();
  triangle(x*i, y, x*i, (y+base), ((x*i)+altura), (y+(base/2)));
    }
  }
