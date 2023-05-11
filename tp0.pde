// Arismendi Thomas
// tp0 comisión 1

PImage faro; 
size(800, 400);
background(146, 195, 209);

//nubes
fill(239, 239, 239);
noStroke();
circle(450, 55, 150);
circle(527, 108, 90);
circle(760, 85, 205);
circle(670, 145, 46);
circle(670, 14, 90);

faro = loadImage("paisaje tp.jpeg");
image(faro, 0, 0, 400, 400);

//mar
fill(40, 70, 74);
noStroke();
quad(400, 240, 800, 212, 800, 400, 400, 400);
quad(725, 192, 800, 191, 800, 213, 765, 216);

//faro
fill(143, 43, 27);
rect(585, 122, 17, 35);
rect(586, 62, 16, 29);

fill(227, 217, 208);
rect(586, 91, 16, 31);

fill(30, 34, 28);
rect(589, 48, 10, 14);
triangle(588, 48, 595, 40, 600, 48);

//montaña 
fill(112, 106, 102);
beginShape();
vertex(400, 165);
vertex(445, 169);
vertex(535, 168);
vertex(400, 140);
endShape();

beginShape();
vertex(609, 157);
vertex(680, 186);
vertex(728, 194);
vertex(800, 194);
vertex(800, 170);
vertex(711, 173);
vertex(663, 159);
endShape();

//nieve de la montaña
fill(225, 215, 206);
quad(400, 129, 492, 118, 535, 170, 400, 140);
triangle(520, 157, 546, 144, 560, 153);

triangle(609, 157, 637, 144, 663, 159);
triangle(663, 159, 687, 157, 711, 173);
triangle(711, 173, 768, 157, 800, 170);

//isla (parte clara)
fill(116, 98, 65);
beginShape();
vertex(400, 246);
vertex(443, 238);
vertex(568, 232);
vertex(644, 231);
vertex(690, 223);
vertex(768, 218);
vertex(733, 193);
vertex(711, 208);
vertex(636, 204);
vertex(492, 195);
vertex(400, 212);
endShape();

//isla (parte sombreada)
fill(236, 193, 101);
beginShape();
vertex(400, 212);
vertex(492, 200);
vertex(636, 204);
vertex(711, 208);
vertex(733, 193);
vertex(688, 183);
vertex(624, 156);
vertex(604, 154);
vertex(586, 153);
vertex(550, 150);
vertex(538, 156);
vertex(516, 149);
vertex(477, 160);
vertex(445, 164);
vertex(400, 157);
endShape();
