  "use strict";

createStartMenu();

function addEvent(element, evnt, funct){
  if (element.attachEvent){
   return element.attachEvent('on'+evnt, funct);
 }else{
   return element.addEventListener(evnt, funct, false);
   }
}

function createStartMenu(){
  // creation du menu et des bouton

  var menuStart= document.createElement('main');
  menuStart.id = "startMenu";

  var img= document.createElement('img');
  var imgHandle= document.createElement('div');
  img.src= "assets/guiStart0.png";
  img.id= "player";

  var img1= document.createElement('img');
  var imgHandle1= document.createElement('div');
  img1.src= "assets/guiStart1.png";
  img1.id= "arcade";

  var img2= document.createElement('img');
  var imgHandle2= document.createElement('div');
  img2.src= "assets/guiStart2.png";
  img2.id= "multi";

  var img3= document.createElement('img');
  var imgHandle3= document.createElement('div');
  img3.src= "assets/guiStart3.png";
  img3.id= "option";

  imgHandle.appendChild(img);
  imgHandle1.appendChild(img1);
  imgHandle2.appendChild(img2);
  imgHandle3.appendChild(img3);

  menuStart.appendChild(imgHandle);
  menuStart.appendChild(imgHandle1);
  menuStart.appendChild(imgHandle2);
  menuStart.appendChild(imgHandle3);

  document.body.appendChild(menuStart);

  addEvent(
      document.getElementById('player'),
      'click',
      function test() { chooseMode("OnePlayer"); }
  );
  addEvent(
      document.getElementById('arcade'),
      'click',
      function test() { chooseMode("Arcade"); }
  );
  addEvent(
      document.getElementById('multi'),
      'click',
      function test() { chooseMode("Multi"); }
  );
  addEvent(
      document.getElementById('option'),
      'click',
      function test() { chooseMode("Option"); }
  );
}
