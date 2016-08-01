function removeStartMenu(){
  // On récupère le container de base :
  var container = document.getElementById("startMenu");
  // On supprime tous les éléments qu'il contient :
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
};
