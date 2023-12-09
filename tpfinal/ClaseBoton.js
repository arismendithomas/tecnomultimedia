class boton {
  constructor() {
  }

  accionboton(bx, by, ancho, alto) {
    if (mouseX>bx &&mouseY>by &&mouseX<ancho+bx &&mouseY<alto+by) {
      return true;
    } else {
      return false;
    }
  }
}
