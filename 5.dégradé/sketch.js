/*recréer une autre variable*/
let dégradé 

function setup() {
  createCanvas(windowWidth,windowHeight)
  /* globalement, on a créer quelque chose qui nous sert à faire 
  un dégradé, c'est la fonction linearGradiant qui contient notre code*/
  dégradé = circularGradiant ( width, height, 50, 250, 100, 220, 50, 200);    /*largeur du canvas et heuteur du canvas */

}




///



function draw() {
  background(255);
  /* non de l'image à afficher, */
  image(dégradé, 0, 0, width, height);

}






/*CREER UNE FONCTION*/
function linearGradiant (w, h, r1, v1, b1, r2, v2, b2){      /*largeur, hauteur, rvb (couleurs)*/

  /* faire la boucle "for" pour compter
  le nombre de fois qu'on execute le code
  1. le premier élément est une variable qui va compter le nombre de fois,
  2. le deuxième va dire "oui" ou "non" tu peux rentrer
  (=est-ce que compteur est plus petit que la valeur de l'écran?),
  3. le troisième élément va rajouter une valeur à chaque fois.
  */
  let graphic = createGraphics(w,h);
  for(let compteur=0 ; compteur < height ; compteur++ ){

  /*variable qui va servir à donner la couleur au stroke
  il peut évoluer de 0 à height (=hauteur de l'écran)
  la couleur sera de 0 (blanc) à 255 (noir)*/
  let red = map(compteur, 0, height,    r1, r2);
  let green = map(compteur, 0, height,  v1, v2);
  let blue = map(compteur, 0, height,   b1, b2);


  graphic.stroke(red, green, blue); /*couleur de la ligne, (=à l'intérieur du graphics, j'aimerais appellé la fonction stroke)*/
  graphic.line( 0, compteur, width, compteur); /*ligne au dessus*/
}
  return graphic;
}




//




/*CREER UNE AUTRE FONCTION circulaire*/
function circularGradiant (w, h, r1, v1, b1, r2, v2, b2){      /*largeur, hauteur, rvb (couleurs)*/

  /* faire la boucle "for" pour compter
  le nombre de fois qu'on execute le code
  1. le premier élément est une variable qui va compter le nombre de fois,
  2. le deuxième va dire "oui" ou "non" tu peux rentrer
  (=est-ce que compteur est plus petit que la valeur de l'écran?),
  3. le troisième élément va rajouter une valeur à chaque fois.
  */
  let graphic = createGraphics(w,h);
  
  graphic.translate(graphic.width/2,graphic.height/2);
  h = h * 2;
  for(let compteur=0 ; compteur < height ; compteur++ ){
    graphic.rectMode(CENTER);
    /*variable qui va servir à donner la couleur au stroke
    il peut évoluer de 0 à height (=hauteur de l'écran)
    la couleur sera de 0 (blanc) à 255 (noir)*/
    let red = map(compteur, 0, height,    r1, r2);
    let green = map(compteur, 0, height,  v1, v2);
    let blue = map(compteur, 0, height,   b1, b2);

    graphic.fill(red, green, blue);     /*couleur de la ligne, (=à l'intérieur du graphics, j'aimerais appellé la fonction stroke)*/
    graphic.noStroke();                 /*il n'y a pas de ligne, enlever les contours*/
    graphic.ellipse( 0, 0, h-compteur, h-compteur); /*ellipse au dessus*/
  }
  return graphic;
}