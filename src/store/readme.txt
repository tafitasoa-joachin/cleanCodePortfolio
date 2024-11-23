Le rôle du reducer dans le flux d'exécution :

Lorsque l'application envoie une action (par exemple via dispatch), celle-ci est envoyée au store Redux.
Le store passe l'action au reducer.
Le reducer examine l'action et met à jour l'état de l'application en fonction du type d'action reçue.
Le store met à jour l'état, ce qui provoque un re-rendu des composants qui sont abonnés à cet état, via useSelector ou connect.