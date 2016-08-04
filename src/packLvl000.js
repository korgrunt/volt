/******GENERATION DYNAMIQUE DE MAP ************/
/*
LISTE DES ELEMENT EXISTANT DANS LE JEU AVEC LEUR INDEX CORRESPONDANT ##### OPTIMISATION #####
cette liste est vouer a grossire au fil de la construction du jeu et des mise a jour si le jeu est un jour publié

potar_1 ----> elmt 1
potar_2 ----> elmt 2
potar_3 ----> elmt 3

led_1 ------> elmt 4
led_2 ------> elmt 5

condens_1 --> elmt 6
condens_2 --> elmt 7
condens_3 --> elmt 8

plus -------> elmt 9
moins ------> elmt 10

conduc -----> elmt 11
isolate ----> elmt 12
*/

var level = ["level 0", 1, 5, 2];
/* var level = ["nom du niveau", volt de la pile du joueur, amplitude camera sur axe x, amplitude camera sur axe y]; */
/* l'amplitude de la camera (si != 0) permet le mouvement de la camera si le niveau est plus grand que l'écran,
pour garder la même taille des cubes tout au long des niveaux*/

var content = {
  "1":  '{"elmt" : 1, "objPath":"/dir/potar_1.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "2":  '{"elmt" : 2, "objPath":"/dir/potar_2.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "3":  '{"elmt" : 3, "objPath":"/dir/potar_3.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "4":  '{"elmt" : 4, "objPath":"/dir/led_1.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "5":  '{"elmt" : 5, "objPath":"/dir/led_2.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "6":  '{"elmt" : 6, "objPath":"/dir/condens_1.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "7":  '{"elmt" : 7, "objPath":"/dir/condens_2.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "8":  '{"elmt" : 8, "objPath":"/dir/condens_3.obj", "mtlPath":"/dir/material.mtl", "type":1}',
    "9":  '{"elmt" : 9, "objPath":"plus", "mtlPath":"/dir/material.mtl", "type":1}',
    "10": '{"elmt" : 10, "objPath":"moins", "mtlPath":"/dir/material.mtl", "type":1}',
    "11": '{"elmt" : 11, "objPath":"conduc", "mtlPath":"/dir/material.mtl", "type":1}',
    "12": '{"elmt" : 12, "objPath":"isolate", "mtlPath":"/dir/material.mtl", "type":1}'
};
/* ICI On donne un premier tableau d'objet qui comporte la liste et le chemin des élément présent sur la carte, chaque élément peut être
présent sur la carte en 1 ou plusieur exemplaire instancié*/

var disposition = [
    [
      {"elmt" :1,"orientation":1},
      {"elmt" :5,"orientation":2},
      {"elmt" :2,"orientation":3},
      {"elmt" :3,"orientation":3},
      {"elmt" :6,"orientation":1},
      {"elmt" :5,"orientation":1}
    ],
    [
      {"elmt" :10,"orientation":1},
      {"elmt" :5,"orientation":2},
      {"elmt" :4,"orientation":3},
      {"elmt" :2,"orientation":3},
      {"elmt" :3,"orientation":1},
      {"elmt" :5,"orientation":1}
    ],
    [
      {"elmt" :11,"orientation":1},
      {"elmt" :5,"orientation":2},
      {"elmt" :8,"orientation":3},
      {"elmt" :2,"orientation":3},
      {"elmt" :7,"orientation":1},
      {"elmt" :5,"orientation":1}
    ],
    [
      {"elmt" :1,"orientation":1},
      {"elmt" :5,"orientation":2},
      {"elmt" :6,"orientation":3},
      {"elmt" :2,"orientation":3},
      {"elmt" :9,"orientation":1},
      {"elmt" :5,"orientation":1}
    ],
    [
      {"elmt" :1,"orientation":1},
      {"elmt" :5,"orientation":2},
      {"elmt" :5,"orientation":3},
      {"elmt" :2,"orientation":3},
      {"elmt" :3,"orientation":1},
      {"elmt" :5,"orientation":1}
    ],
    [
      {"elmt" :11,"orientation":1},
      {"elmt" :8,"orientation":2},
      {"elmt" :7,"orientation":3},
      {"elmt" :12,"orientation":3},
      {"elmt" :3,"orientation":1},
      {"elmt" :5,"orientation":1}
    ]
];

/* Et ici, On donne un "tableau de tableau d'objet"; "objet" = elmt, "tableau d'objet" = ligne de elmt et "tableau de tableau d'objet" = map entiere
chaque elmt est relier a un élément, qui se trouve dans le tableau content. il comporte aussi son orientation, sa position est defini par sa place dans le tableau
l'orientation corespond au sens dans lequel le elmt est orienté, devant, dérriere, a gauche, a droite, il a 4 orientation possible
*/
