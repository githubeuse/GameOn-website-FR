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
//correspond à la div qui contient le formulaire d'inscription
const modalbg = document.querySelector(".bground");

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


