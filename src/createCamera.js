function createCamera(){

  var camera = new THREE.PerspectiveCamera( 5, window.innerWidth/window.innerHeight, 0.1, 1000 );

  return camera;
};

function createCameraTarget(){
  var cameraTarget = new THREE.Mesh( new THREE.CubeGeometry(0,0,0));

  return cameraTarget;
}
