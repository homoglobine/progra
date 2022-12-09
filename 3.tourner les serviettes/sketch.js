function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER); //centrer un élément 
  
}

function draw() {
  background(0);
  translate(width/2, height/2); //déplacer le "point central"

//soleil
  push(); //modification du centre, revenir à l'enregristrement du départ, avant les modifications
  rotate(millis()/1000) //on peu mettre aussi PI/4,ou faire millis/1000 pour que ça tourne lentement,faire la rotation, il faut le mettre après le translate et avant le création du rectangle ;)
  fill(255,255,0);
  rect(0,0,400,400);
  pop(); //modification du centre ""
  
//terre
  push(); //push et pop permettent de séparer la roation de la terre et de la lune par ex
  rotate(millis()/1500);
  translate(300,0); //décale le point zero
  rotate(millis()/1000); //faire la rotation autour de lui même
  fill(0,128,100);
  rect(0,0,100,100);

//lune
  translate(200,0);
  rotate(millis()/1000);
  fill(128);
  rect(0,0,50,50);

  pop();

}