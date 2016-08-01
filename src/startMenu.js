createStartMenu();
function createStartMenu(){

  var menuStart= document.createElement('main');
  menuStart.id = "startMenu"; 
  var img= document.createElement('img');
  var imgHandle= document.createElement('div');
  img.src= "assets/guiStart0.png";
  img.id= "player";
    if (imgHandle.addEventListener){
      imgHandle.addEventListener('click', lauchPlayer, false);
    } else if (imgHandle.attachEvent) {
      imgHandle.attachEvent('onclick', lauchPlayer);
    }

  var img1= document.createElement('img');
  var imgHandle1= document.createElement('div');
  img1.src= "assets/guiStart1.png";
    img.id= "arcade";
  if (imgHandle1.addEventListener){
    imgHandle1.addEventListener('click', lauchArcade, false);
  } else if (imgHandle1.attachEvent) {
    imgHandle1.attachEvent('onclick', lauchArcade);
  }

  var img2= document.createElement('img');
  var imgHandle2= document.createElement('div');
  img2.src= "assets/guiStart2.png";
    img.id= "multi";
  if (imgHandle2.addEventListener){
    imgHandle2.addEventListener('click', lauchMulti, false);
  } else if (imgHandle2.attachEvent) {
    imgHandle2.attachEvent('onclick', lauchMulti);
  }

  var img3= document.createElement('img');
  var imgHandle3= document.createElement('div');
  img3.src= "assets/guiStart3.png";
    img.id= "option";
  if (imgHandle3.addEventListener){
    imgHandle3.addEventListener('click', lauchOption, false);
  } else if (imgHandle3.attachEvent) {
    imgHandle3.attachEvent('onclick', lauchOption);
  }

  imgHandle.appendChild(img);
  imgHandle1.appendChild(img1);
  imgHandle2.appendChild(img2);
  imgHandle3.appendChild(img3);

  menuStart.appendChild(imgHandle);
  menuStart.appendChild(imgHandle1);
  menuStart.appendChild(imgHandle2);
  menuStart.appendChild(imgHandle3);

  document.body.appendChild(menuStart);
}
