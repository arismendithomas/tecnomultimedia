void flechai(){

  cuadrado(29,236,22,18);
  triangulo(18,258);
  
}

void cuadrado(float x, float y, float ancho, float alto){
//22 de largo
//18 de alto
  for(float i=1; i<cant; i=i+2.0804){
    for(float l=1; l<1.5; l=l+0.25){
    noStroke();
    rectMode(CENTER);
    rect(x*i,y*l,ancho,alto);
    }
  }
}
void triangulo (float x, float y){
float altura= 22; //altura de triangulo
float base= 42; //base del triangulo
for(float i=1; i<cant; i=i+3.3598){
  for(float l=1; l<1.31; l=l+0.225){
  noStroke();
  triangle(x*i, y*l, x*i, (l*y-base), ((x*i)-altura), (l*y-(base/2)));
    }
  }
}

void flechaisola(){
  trianguloisolo(18,64);
  cuadradoisolo(29,42,28,18);
}

void trianguloisolo(float x, float y){
float altura= 22; //altura de triangulo
float base= 42; //base del triangulo
for(float i=1; i<cant; i=i+3.3598){
  noStroke();
  triangle(x*i, y, x*i, (y-base), ((x*i)-altura), (y-(base/2)));
  }
}
void cuadradoisolo(float x, float y, float ancho, float alto){
  for(float i=1; i<200; i=i+2.0804){
    noStroke();
    rectMode(CENTER);
    rect(x*i,y,ancho,alto);
    }
  }
