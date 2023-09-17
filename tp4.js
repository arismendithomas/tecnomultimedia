//Arismendi Thomas
//tp4 Comisión 1
// URL del video: https://youtu.be/AoMEBm6B_0A

//imagenes
let copas, imgB, imgBot, imgF, imgS;
let cantdepantallas = 6;
let cantdecorazones = 4;
let cantdemessi = 2;
let pantallas = [];
let corazones = [];
let messi = [];
let pantallaencurso = 0;
let coraencurso = 0;
let messiencurso = 0;
let px = [];
let py = [100, 135, 175, 215, 250, 280];

// variables para el funcionamiento del juego
let teclaD, teclaA, disparo = false;
let velocidad = 4;
let velocidadbalony = 10;
let velocidadbalon = 4;
let xmessi = 0;
let ybalon = 530;
let xbalon = xmessi+120;
let direccion = [];
let ancho = 60;
let largo = 118;
let score = 0;


function preload() {
  for (let i=0; i<cantdepantallas; i++) {
    pantallas[i] = loadImage('data/escena'+i+'.png');
  }
  for (let i=0; i<cantdecorazones; i++) {
    corazones[i] = loadImage('data/cora'+i+'.png');
  }
  for (let i=0; i<cantdemessi; i++) {
    messi[i] = loadImage('data/sinti'+i+'.png');
  }

  copas = loadImage('data/copita.png');
  imgS = loadImage('data/score.png');
  imgB = loadImage('data/balo.png');
  imgBot = loadImage('data/botons.png');
  imgF = loadImage('data/flechita.png');
}

function setup() {
  createCanvas(600, 600);
  background(150);
  reset();
}

function draw() {
  if (pantallaencurso===0) { //pantalla de inicio
    image(pantallas[pantallaencurso], 0, 0);
    image(imgBot, width/3, height/4*2.8);
  }
  if (pantallaencurso===1) { //pantalla de reglas
    image(pantallas[pantallaencurso], 0, 0);
    image(imgF, 450, height-130);
  }
  if (pantallaencurso===2) { //pantalla del juego

    if (teclaD) {
      xmessi += velocidad;
    }
    if (teclaD && disparo===false) {
      xbalon += velocidadbalon;
    }

    if (teclaA) {
      xmessi -= velocidad;
    }
    if (teclaA && disparo===false) {
      xbalon -= velocidadbalon;
    }

    if (disparo) {
      ybalon -= velocidadbalony;
    }
    if (disparo===true) {
      messiencurso=1;
    } else {
      messiencurso=0;
    }
    image(pantallas[pantallaencurso], 0, 0);
    messiconbalon(xmessi, 420, xbalon, ybalon);
    image(corazones[coraencurso], 30, 30);
    image(imgS, width/2-40, 30);
    for (let i=0; i<7; i++) {
      image(copas, px[i], py[i], ancho, largo);
      px[i]+= direccion[i];
      if (px[i]>550 || px[i]<0) {
        direccion[i] *= -1;
      }
      if (impacto(xbalon, ybalon, px[i], py[i], ancho, largo)) {
        score++;
        py[i]+=1000;
        ybalon = 530;
        xbalon = xmessi+120;
        disparo=false;
      }
    }

    if (ybalon===0 && coraencurso>=0) {
      coraencurso += 1;
    }
    fill(255, 255, 0);
    textSize(35);
    text(score, 330, 65);
  }
  if (score===6) {
    pantallaencurso=4;
    image(pantallas[pantallaencurso], 0, 0);
  }
  if (pantallaencurso===3) { //pantalla de perdiste
    coraencurso=0;
    score=0;
    xmessi = 0;
    ybalon = 530;
    xbalon = xmessi+120;
    disparo=false;
    px = [];
    py = [100, 135, 175, 215, 250, 280];
    image(pantallas[pantallaencurso], 0, 0);
  }
  if (coraencurso===3) {
    pantallaencurso=3;
  }
  if (pantallaencurso===4) {  //pantalla de ganaste 
    coraencurso=0;
    score=0;
    xmessi = 0;
    ybalon = 530;
    xbalon = xmessi+120;
    disparo=false;
    px = [];
    py = [100, 135, 175, 215, 250, 280];
    image(pantallas[pantallaencurso], 0, 0);
  }
  if (score===3) {
    pantallaencurso=4;
  }
  if (pantallaencurso===5) {
    image(pantallas[pantallaencurso], 0, 0);
  }
}
function impacto(xbalon, ybalon, px, py, ancho, alto) {
  if (xbalon>px && xbalon<px+ancho && ybalon>py && ybalon<py+alto) {
    return true;
  } else {
    return false;
  }
}

function messiconbalon(xmessif, ymessif, xbalonf, ybalonf) {
  image(messi[messiencurso], xmessif, ymessif);
  if (xmessi > width) {
    xmessi = -150;
    xbalon = -30;
  }
  if (xmessi < -150) {
    xmessi = width;
    xbalon = width+120;
  }
  push();
  imageMode(CENTER);
  image(imgB, xbalonf, ybalonf);
  pop();
  if (xmessi > width) {
    xmessi = -150;
    xbalon = -110;
  }
  if (xmessi < -150) {
    xmessi = width;
    xbalon = width +120;
  }
}



function accionboton(x, y, ancho, alto) {
  if (mouseX>x &&mouseY>y &&mouseX<ancho+x &&mouseY<alto+y) {
    return true;
  } else {
    return false;
  }
}


function mousePressed() {
  if (accionboton(width/3, height/4*2.8, 240, 92)) {
    if (pantallaencurso===0) {
      pantallaencurso=1;
    }
  }
  if (accionboton(450, height-130, 100, 50)) {
    if (pantallaencurso===1) {
      pantallaencurso=2;
    }
  }
  if (accionboton(125, 452, 138, 46)) {
    if (pantallaencurso===3) {
      reset();
    }
  }
  if (accionboton(137, 471, 138, 46)) {
    if (pantallaencurso===4) {
      reset();
    }
  }
  if (accionboton(286, 452, 176, 46)) { //creditos en perdiste
    if (pantallaencurso===3) {
      pantallaencurso=5;
    }
  }
  if (accionboton(300, 471, 176, 46)) { //creditos en ganaste
    if (pantallaencurso===4) {
      pantallaencurso=5;
    }
  }
  if (accionboton(231, 505, 138, 46)) { //reinicio en creditos
    if (pantallaencurso===5) {
      reset();
    }
  }
}


function reset() {
  pantallaencurso=0;
  for (let i=0; i<7; i++) {
    image(copas, px[i], py[i], ancho, largo);
  }
  for (let i=0; i<6; i++) {
    px[i]=random(0, 550);
  }

  for (let i=0; i<7; i++) {
    if (i/2===0) {
      direccion[i] = 1;
    } else {
      direccion[i] = -1;
    }
  }

  for (let i=0; i<2; i++) {
    messi[i].resize(100, 150);
  }
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    teclaA = true;
  }
  if (key === 'd' || key === 'D' ) {
    teclaD = true;
  }
  if (key === 'p' || key === 'P') {
    disparo = true;
  } else if  (ybalon<0 && key === 'r' || key === 'R') {
    ybalon = 530;
    xbalon=xmessi+120
      disparo = false;
  }
}

function keyReleased() {
  if (key === 'a' || key === 'A') {
    teclaA = false;
  }
  if (key === 'd' || key === 'D') {
    teclaD = false;
  }
}
