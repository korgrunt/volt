function persoso(){
  console.log("MY PERSO IS LOADED YEAHHHH");
};

var atest = function persoso(){
  console.log("MY TESTTESTTESTTESTTESTE OKOKOKOK");
};

function createBox(StartCoordonate){
  var geometry = new THREE.BoxGeometry( 0.9, 0.9, 1.8 );
  var material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  var cube = new THREE.Mesh( geometry, material );

  cube.position.x = StartCoordonate[0];
  cube.position.y = StartCoordonate[1];
  cube.position.z = 1.4;
  cube.castShadow = true;
  cube.receiveShadow = true;
  return cube;

}

function generatePlayer(StartCoordonate, volt){

  var power = volt;

var test = createBox(StartCoordonate);
return test;
};
