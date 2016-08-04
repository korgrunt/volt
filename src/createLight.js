
function createLight(){
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set( 1.4, 1.3, 1.9 );
  directionalLight.castShadow = true;
  return directionalLight;
}
