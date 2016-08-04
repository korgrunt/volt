/* *****************************___VOLT*GAME___************************************************__removeStartMenujs__***************************************************************FR_Kill_le_mennu_d'entrer_du_jeu_pour_Liberer_la_memoire_****************************EN_Kill_all_gui_of_the_start_of_the_game_for_free_memory_**********************************************************************************
 */
 "use strict";
function chooseMode(gameMode){

// retire tous les enfants d'un élément
var element = document.getElementById("startMenu");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

  if (gameMode == "OnePlayer" ){
    console.log("jeu en mode OnePlayer");
  }else if (gameMode == "Arcade" ){
    lauchArcade();
  }else if (gameMode == "Multi" ){
    console.log("jeu en mode Multi");
  }else if (gameMode == "Option" ){
    console.log("lance le menu Option");
  }else{
  console.log("tu vien de hacker le menu ! bravo, tu a bien meriter un nouveu mode de jeu !!!");
  }
};
