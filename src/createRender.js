function createRender(render, camera, sceneChildren,scene, renderer){


  requestAnimationFrame( render );

  /* mise en place du raycast depuis a camera vers la souris */
  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects( sceneChildren );
  for ( var i = 0; i < intersects.length; i++ ) {
    intersects[ i ].object.material.color.set( 0xff0000 );
  }
  renderer.render(scene, camera);
};
  /*
  var animationPack = {
    render    : function(){},
    camera    : function(){},
    renderer  : function(){}
  }
  */
