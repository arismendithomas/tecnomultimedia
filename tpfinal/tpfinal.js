let claseprincipal;

function setup() {
  createCanvas(700, 700);
  claseprincipal = new principal();
}


function draw() {
  claseprincipal.display();
}

function mousePressed() {
  claseprincipal.funcionaboton();
}
