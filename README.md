# morpion

## introduction
Le jeu est simple ; un morpion appelé en englais TIc Tac Toe.

## options

### timer 
Le temps d'un match est configuré à 3min qu'on peut modifier facielement dans fichier index , au niveau du script.

### score 
il y a un affichage du score au dessus de la grille, à la fin de chaque partie (dès quelqu'un gagne une partie)

### multiplayer
Pour le player 1 ou player X ainsi que pour le player 2 ou dit player O.

### IHM
#### couleurs
J'ai fait en sorte de mettre deux couleurs differente pour aider niveau interface, afin de distinguer plus facilement les cases choisies, tout en respectant l'accessibilité niveau couleur en prenant deux couleurs: jaune= une chaude et bleu = froide. Qui seront visible au niveau test monochrone pour les daltoniens.
#### boutton 
Pour ce qui est du bouton reset, il permet de mettre une partie et d el'annuler sans pour autant permettre de recuperer le temps passé.
#### affichage
ça affiche le winner à la fin de chaque partie.

Je pourrais aussi afficher le winner sur tout le match (lensemble des parties en prenant en compte le scrore le plus grand parmi les deux )
#### bip (audio)
chaque fin de partie en succès, fait un bip sonore

#### changement
j'ai remplaé l'idée de la flèche par un message qui signale a à qui le tour, avec Player's X ou O turn