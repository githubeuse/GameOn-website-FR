// Création de la fonction editNav
function editNav() {
  //Création d'une variable x 
  //qui correspond à l'id myTopnav soit la barre haute de l'entête
  var x = document.getElementById("myTopnav");

  //Si la propriété className de cet élément 
  //correspond en valeur et en nature à topnav
  if (x.className === "topnav") {

    //alors ajouter responsive au nom de la classe
    x.className += " responsive";

    //sinon, 
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

// Création d'une constante modalbg
// correspond à bground
// la div qui contient le formulaire d'inscription
const modalbg = document.querySelector(".bground");



//Création d'une constante modalBtn
//correspond au bouton je m'inscris
const modalBtn = document.querySelectorAll(".modal-btn");

//Ajout de de la méthode forEach sur le bouton je m'inscris
//Pour chaque click sur le btn, on lance la fonction launchModal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Fonction launchModal
//display du div contenant le form à block
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Création d'une constante closeButton
//correspond à la croix dessinée dans le css
const closeModalBtn = document.querySelectorAll(".close");

//Ajout de la méthode forEach sur l'élément close
//Pour chaque click sur le close, on lance la fonction closeModal
// close modal event
closeModalBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

//Fonction closeModal
//display du div contenant le form à 
function closeModal() {
  modalbg.style.display = "absolute";
  modalbg.style.width = 0;
  modalbg.style.width = 0;
} 
