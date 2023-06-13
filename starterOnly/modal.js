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

let form = document.forms.reserve;
let modalBody = document.querySelector("modal-body");

//Fonction closeModal
//display du div contenant le form à 
function closeModal() {
  modalbg.style.display = "none";
  modalBody.appendChild(".formData");
}

function validate(event) {
  let first = form.elements.first.value;
  let last = form.elements.last.value;
  let email = form.elements.email.value;
  let birthdate = form.elements.birthdate.value;
  let quantity = form.elements.quantity.value;
  let location = form.elements.location;
  let conditions = form.elements.conditions.checked;

  // 1/ Vérification de la longueur minimale du nom entré de l'input first / prénom
  if (first.length < 2) {
    document.getElementById("first-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    return false;
  } else {
    document.getElementById("first-error-message").innerHTML = "";
  }

  // 2/ Vérification de la longueur minimale du nom entré de l'input last / prénom
  if (last.length < 2) {
    document.getElementById("last-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  } else {
    document.getElementById("last-error-message").innerHTML = "";
  }

  // 3/ Vérification de l'email 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error-message").innerHTML = "Veuillez entrer un email valide.";
    return false;
  } else {
    document.getElementById("email-error-message").innerHTML = "";
  }

  // 4/ Vérification du champs birthdate 
  if (isNaN(Date.parse(birthdate))) {
    document.getElementById("birthdate-error-message").innerHTML = "Vous devez entrer votre date de naissance.";
    return false;
  } else {
    document.getElementById("birthdate-error-message").innerHTML = "";
  }

  // 5/ Vérification de la quantité de tournois joués
  if (quantity === '') {
    document.getElementById("quantity-error-message").innerHTML = "Vous devez saisir une valeur numérique.";
    return false;
  } else {
    document.getElementById("quantity-error-message").innerHTML = "";

  }

  // 6/ Vérification du nombre de case cochée minimum pour la location
  let locationChecked = false;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      locationChecked = true;
      break;
    }
  }
  if (!locationChecked) {
    document.getElementById("location-error-message").innerHTML = "Vous devez choisir une option.";
    return false;
  } else {
    document.getElementById("location-error-message").innerHTML = "";
  }

  // 7/ Vérification que la case conditions est checkée
  if (!conditions) {
    document.getElementById("conditions-error-message").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  } else {
    document.getElementById("conditions-error-message").innerHTML = "";
  }

  //    alert("Merci ! Votre réservation a été reçue.");
 document.querySelector(".modal-body").innerHTML = "Merci ! Votre réservation a été reçue.";

// setTimeout(function() {
//  history.go(0)
//  }, 3000); 

}