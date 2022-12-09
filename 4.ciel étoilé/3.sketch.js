function setup() {
    createCanvas(windowWidth, windowHeight)
  }
  
  
  
  
  function draw() {
    background(13, 5, 45);  // Couleur du ciel
    stroke(255); // couleur des étoiles
  
    let counter=0; /*ça compte jusqu'à 1000, en boucle infinie*/
    while(counter < 1000){
      /*
      tant que cette question a pour repénse TRUE on va exécuter le contenue du
      code à l'infini
      */
      MOULISTAR(
        //Définition fonction noise -> https://www.geeksforgeeks.org/p5-js-noise-function/
        noise(1, millis()*400, counter) * width,
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
  
  
  /*CREER UNE FONCTION*/
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
  
  
  
  
    /*ETAPES*/
    /*si cette question est "oui", ce qu'il y a entre les premières lignes va s'afficher
    et si c'est "non", la ligne en dessous va s'afficher.
    shine=!shine; /*si c'est pas shine c'est l'inverse de shine*/
  
    /*après avoir fini les conditions, il faut aller dans la console en appuyant sur f12 et
    écrire "frameRate()"
    puis il faut écrire "frameCount"
    puis remplacer shine dans "if" et mettre "framecount%2==0" (deux "egales" c'est pour
    poser des question). 
    On va demander "tout ce qui n'est pas divisible par cinq peut rentrer"
    */
  
    /*reste de la division entière (%5==0)= histoire avec les chameaux*/
  
    /*on va utiliser TRANSLATE pour pouvoir positionner plus facilement l'étoile sur le Canvas,
    ainsi que sa longueur et sa largeur
    Mettre push et pop pour dire que le centre de l'autre étoile qu'on veut mettre ne sera
    pas la même que celle d'avant*/