function generateMap(level, content, disposition){

  for (var i = 0; i < disposition.length; i++) {

    for (var key = 0; key < disposition[i].length; key++) {
        var index = disposition[i][key].elmt;
        if(!!content[index]){/* "!!" verificateur de !undefined */
          var block = JSON.parse(content[index]);
          console.log(block.objPath);
        }

        //debugger;
    }
    console.log("fin de ligne");
  }

};
