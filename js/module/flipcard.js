// on choppe le boutton
const btn = document.querySelector(".js-flipbutton");
const allCards = document.querySelectorAll(".js-card");

/**
 * Attacher un écouter d'event sur le bouton
 * Quand un clik est entendu, executer une fonction anonyme (sans nom) qui toggle une classe sur la carte
 */
function init() {
  allCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      card.classList.toggle("is-flipped");
    });
  });
}

export { init };
