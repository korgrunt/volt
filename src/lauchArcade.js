/* *****************************___VOLT*GAME___************************************************__launchArcade.js__*******************************************************************FR_Gere_le_deroulement_complet_du_jeu_en_mode_OnePlayer****************************EN_Manage_all_the_step_of_the_game_in_OnePlayer_Mode_**************************************************************************************
 */
 "use strict";


function lauchArcade(){

  /* creation de l'interface pour le jeu */
  GUIplay();
  /* creation de l'interface pour les setting */
  GUIsetting();

  /* Creation de la scene*/
  /***********************************************/

    var scene = new THREE.Scene();
    var increm = -5;
    var ligne = -5;

    while (ligne <= 5){
      while (increm <= 5){
        var component = createComponent();
        component.position.x = increm;
        component.position.y = ligne;
        component.position.z = 0;
        scene.add( component );
        increm++;
      }
      increm = -5;
      ligne++;
    }

  /* Creation de la camera et de sa cible*/
	var camera = createCamera();
  var cameraTarget = createCameraTarget();

  /* Creation de la lumiere, declaration de sa position et des shadows*/
  var directionalLight = createLight();
  scene.add( directionalLight );

  /*position initiale du joueur */
  var startPosX = -5;
  var startPosY = 5;

  var myPerso = generatePlayer([startPosX, startPosY], 3.5);
	scene.add( myPerso );

  /* Creation du moteur de rendu, declaration de sa taille (viewer3d)*/
  var renderer = createRenderer();
  /* Ajout du viewer au DOM, */
  document.body.appendChild( renderer.domElement );

  /*genere une map dans la console qui correspond au jeu. content est le contenue des divers ibjet de la map, et disposition et la repartition des objet (objet contenue dans content, en un seul exemplaire) sur la map*/
  generateMap(level, content, disposition);



  camera.position.z = 50;
  camera.position.x = 0;
  camera.position.y = -90;
  camera.lookAt( cameraTarget.position );
  scene.rotation.z = 40;

  var preRender = function(){};
  var render = createRender(preRender, camera, scene.children, scene, renderer);
  renderer.render( scene, camera);

  window.addEventListener( 'mousemove', onMouseMove, false );

  simulateMovePerso();
};
