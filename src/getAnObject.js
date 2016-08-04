function getAnObject(objMesh){
  scene.updateMatrixWorld(true);
  var position = new THREE.Vector3();
  position.getPositionFromMatrix( objMesh.matrixWorld );
  alert(position.x + ',' + position.y + ',' + position.z);
  return objMesh;
}
