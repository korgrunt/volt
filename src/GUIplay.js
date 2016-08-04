"use strict";

function GUIplay(){

  var btnForward= document.createElement('img');
  btnForward.src= "assets/guiStart0.png";
  btnForward.id= "moveForward";
    if (btnForward.addEventListener){
      btnForward.addEventListener('click', moveForward, false);
    } else if (btnForward.attachEvent) {
      btnForward.attachEvent('onclick', moveForward);
    }

  var btnBackward= document.createElement('img');
  btnBackward.src= "assets/guiStart0.png";
  btnBackward.id= "moveBackward";
    if (btnBackward.addEventListener){
      btnBackward.addEventListener('click', moveBackward, false);
    } else if (btnBackward.attachEvent) {
      btnBackward.attachEvent('onclick', moveBackward);
    }


  var btnRight= document.createElement('img');
  btnRight.src= "assets/guiStart0.png";
  btnRight.id= "moveRight";
    if (btnRight.addEventListener){
      btnRight.addEventListener('click', moveRight, false);
    } else if (btnRight.attachEvent) {
      btnRight.attachEvent('onclick', moveRight);
    }

  var btnLeft= document.createElement('img');
  btnLeft.src= "assets/guiStart0.png";
  btnLeft.id= "moveLeft";
    if (btnLeft.addEventListener){
      btnLeft.addEventListener('click', moveLeft, false);
    } else if (btnLeft.attachEvent) {
      btnLeft.attachEvent('onclick', moveLeft);
    }


    document.body.appendChild(btnForward);
    document.body.appendChild(btnBackward);
    document.body.appendChild(btnRight);
    document.body.appendChild(btnLeft);

}
