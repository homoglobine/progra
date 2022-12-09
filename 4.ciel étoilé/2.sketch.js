/*recréer une autre variable*/
let dégradé

function setup() {
  createCanvas(windowWidth,windowHeight)
  /* globalement, on a créer quelque chose qui nous sert à faire 
  un dégradé, c'est la fonction linearGradiant qui contient notre code*/
  dégradé = linearGradiant ( width, height, 25, 25, 112, 255, 69, 0);    /*largeur du canvas et heuteur du canvas */

}




function draw() {
  background(255);
  /* non de l'image à afficher, */
  image(dégradé, 0, 0, width, height);  
  stroke(255); // couleur des étoiles

  let counter=0; /*ça compte jusqu'à 1000, en boucle infinie*/
  while(counter < 1990){
    /*
    tant que cette question a pour repénse TRUE on va exécuter le contenue du
    code à l'infini
    */
    MOULISTAR(
      //Définition fonction noise -> https://www.geeksforgeeks.org/p5-js-noise-function/
      noise(1, counter) * width,
      noise(2, counter) * height,
      5,
      5,
      counter ++);
    /*
      Il faut changer la valeur parce que 
      si on copie colle ça va aller au même endroits, donc il faut changer la valeur x et y.
      On tire un nombre entre zero et un que je multiplie par la largeur de l'ecran
    */
  }
}




//fonction//


/*CREER UNE FONCTION*/
/*effet étoile qui s'intille*/
function MOULISTAR(x,y,w,h){         /*position sur l'horizontale, vertical, largeur, hauteur*/
  /*translate(mouseX,mouseY); l'étoile suit la souris*/
  /*translate(random(windowWidth),random(windowHeight)); étoile qui cintille partout*/
  push();
  translate(x,y)
  if (frameCount%5 == 0) {
    line(-w/2, 0, w/2, 0); /*ligne verticale*/
  }
  else {
    line(0, -h/2, 0, h/2); /*ligne horizontale*/
  }
  pop();
}


//


/*CREER UNE AUTRE FONCTION linéaire*/
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