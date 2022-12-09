let dégradé 

function setup() {
  createCanvas(windowWidth,windowHeight)
  /* globalement, on a créer quelque chose qui nous sert à faire 
  un dégradé, c'est la fonction linearGradiant qui contient notre code*/
  dégradé = linearGradiant ( width, height, 15, 5, 102, 223, 109, 90);    /*largeur du canvas et heuteur du canvas */
}



//



function draw() {
  background(255);
  /* nom de l'image à afficher, */
  image(dégradé, 0, 0, width, height);

translate(0, frameCount);

  /*compte boucle infinie*/
  let counter=0;
  while(counter < 1000){
    NEIGE(
      noise(1, counter) * width,
      noise(2, counter) * height,
    );
    counter++;
  }

}



//




/*Fonction dégradé*/
function linearGradiant (w, h, r1, v1, b1, r2, v2, b2){

  let graphic = createGraphics(w,h);
  for(let compteur=0 ; compteur < height ; compteur++ ){

  let red = map(compteur, 0, height,    r1, r2);
  let green = map(compteur, 0, height,  v1, v2);
  let blue = map(compteur, 0, height,   b1, b2);


  graphic.stroke(red, green, blue); /*couleur de la ligne, (=à l'intérieur du graphics, j'aimerais appellé la fonction stroke)*/
  graphic.line( 0, compteur, width, compteur); /*ligne au dessus*/
}
  return graphic;
}




//





/*fonction boule de neige*/
function NEIGE(x,y){
  push();
  translate(x, y);

  //boule de noël

  fill(255,255,255);
  circle(0,0,30,30);
  pop();
}