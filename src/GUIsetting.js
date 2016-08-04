"use strict";

function GUIsetting(){


  var btnSetting= document.createElement('img');
  btnSetting.src= "assets/guiStart0.png";
  btnSetting.id= "gui-setting";
    if (btnSetting.addEventListener){
      btnSetting.addEventListener('click', moveLeft, false);
    } else if (btnSetting.attachEvent) {
      btnSetting.attachEvent('onclick', moveLeft);
    }


    document.body.appendChild(btnSetting);

}
