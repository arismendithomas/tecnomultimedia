//Arismendi Thomas
//tp5 comisión1
//URL video:

let claseprincipal;

function setup() {
    createCanvas (700, 700);  
  claseprincipal = new clasePrincipal();

}


function draw() {
  
  background(0);
  claseprincipal.display();

}

function mousePressed() {
  claseprincipal.accionbotones();
}

function keyPressed(){
claseprincipal.accionteclas();
}

function keyReleased() {
claseprincipal.noaccionteclas();
}
