/*il faut stocker l'image dans une variable*/
let myFav


function preload(){  
  /*pour optimiser la page pour qu'elle ne charge pas à l'infini*/
  myFav = loadImage("nebula.jpg");
}




function setup() {
  createCanvas( windowWidth, windowHeight);
}



function draw() {
  background(0,0,0);
  /*demander à la fonction draw de dessiner l'image*/
  image(myFav,5,5); 
  /*les deux premiers servent à la disposition et les deux autres 
  la grandeur de l'image en pixel*/
}