"use strict"
function createComponent(){
  var geometry = new THREE.BoxGeometry( 0.9, 0.9, 0.9 );
  var material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  var cube = new THREE.Mesh( geometry, material );


  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.geometry.dynamic = true;
  return cube;
}
