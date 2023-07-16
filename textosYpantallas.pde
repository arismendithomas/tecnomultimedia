int cantEscenas = 16;
PImage [] pantallas = new PImage[cantEscenas];
int fotito;


String [] textos = {"En un mundo futurista, la diversión de los niños era absoluta, los jardines de las casas eran poblados con chicos y chicas corriendo, saltando, gritando y riendo. en donde se encontraba un grupo de amigos en el que pertenecía una chica llamada Mink de 7 años.","Aun así los autos-escarabajo viajaban sobre los niños, a estos no les importaba. Cuando de repente entró muy agitada y sucia a la casa, donde su mamá, la señora Morris, se preocupó por la exaltación de su hija.","Mink sin decir mucho, solo buscaba unas cucharas, cuchillos y atizadores, en ese momento se le hizo raro a Morris, por lo que le fue oportuno preguntar ¿Qué estaban jugando?. A lo que Mink respondió tajante –se llama la invasión y salió de la casa a lo que por lo visto, no levantó ninguna sospecha en la mamá.","Es así como Milik, enfocada totalmente en su juego, empezó a dar instrucciones a los amigos enérgicamente, como si de vida o muerte se tratase cuando de repente llega Joseph, un chico mayor, a preguntar si podía jugar. ¿Debería Mink dejarlo jugar?","Mink responde con firmeza que no por lo fastidioso que es. Por lo que siguieron contruyendo algo que parecería un artefacto.","Era una trampa por parte de Joseph para destruir su progreso, por lo que todos terminaron dándole una paliza.","La hora del almuerzo había llegado, por lo que Morris decide salir a buscar a su hija para que comieran. Mink molesta porque se encuentran en una situación crítica del JUEGO ¿Debería hacerle caso a la mamá?","Mink entra a tomarse la sopa, ahí le comenta de la existencia del nuevo chico llamado Drill.","La mamá castiga a Mink no dejándola salir, a lo que entra en una gran depresión en su cuarto.","A lo que la mamá le hace varias preguntas para intentar conocerlo, pero Mink de la prisa respondió -Es un marciano que invade la tierra y va a matar a todos, de hecho me tengo que ir porque ya casi es la hora cero.","La mamá le dio poca importancia a la situación pensando que es el típico juego que ella jugaba de pequeña, por lo que mejor empezó a hablar con sus amigos por medio del audiovisor.","Pasó el tiempo y la HORA CERO había llegado, justo Henry, el papá de Mink había llegado del trabajo, cuando de repente un sonido muy agudo del lugar donde estaban jugando todos los niños de la ciudad y del mundo se expandió.","La mamá cae en cuenta de que todo lo que ocurría no era únicamente un juego, es así que le gritó al Henry que se escondan rápidamente en el altillo, pero en el instante empezaron a escuchar explosiones en la calle.","Extrañamente la perilla de la puerta del altillo se derritió, a lo que Mink entro al altillo de manera que detrás de ella espantosamente perseguían a la niña unas sombras gigantes azules, diciendo únicamente Cucú."};
void textosfinales(int x, int y, int ancho, int largo, int numerot) {
  if(fotito>0){
  fill(0, 0, 0, 150);
  rect(x, y, ancho, largo, 50);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(textos[numerot], x+15, y+15, ancho-15, largo-15);
}
}
