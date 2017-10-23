TP Sass

1. Installer Gulp pour compiler les fichiers SCSS
	- Installer NodeJS
		https://nodejs.org/en/download/
	- Installer Gulp:
		npm install gulp --save-dev
	- Ajouter gulp et ses package en tant que d�pendance � son projet (� executer � la racine du projet)
		npm install gulp-sass gulp-autoprefixer gulp-sourcemaps --save-dev
	- Renommer "global.css" en "global.scss"
	- Lancer la commande "gulp" dans le terminal (� la racine du projet)
	- V�rifier que le fichier "global.css" � bien �t� cr�e

2. Font-Awesome (gestion des icones)
	- Importer Font Awesome
	- Modifier le HTML pour ajouter les 8 icones appropri�es

3. Nesting
	Refactoriser le code global.css pour tirer parti des "nesting selectors" et "parent selectors"

4. CSS3
	Remarquer (sans coder) comment une bordure grise est ajout�e � droite de tous les �l�ments du menu, sauf le dernier (pseudo-classe CSS :last-child)
	Ajouter une ombre sur le titre principal et le titre des articles pour qu'ils soient plus lisibles
	Afficher le texte du menu en majuscules (en CSS)

5. Variables
	Cr�er 3 variables, les stocker dans un fichier s�par� et les importer sous forme de partial :
		- primary-color (utilis� pour le survol du menu, le bouton upload, le survol des boutons like & comments)
		- article-width
		- users (tableau de noms de fichiers des utilisateurs pour la colonne de droite)

6. Commentaires
	Expliquer tr�s bri�vement le r�le des variables dans des commentaires non export�s en CSS
	Convertir les commentaires existants dans la feuille de style principale en commentaires non export�s en CSS

7. Mixins
	A. Cr�er une mixin pour les boutons
		La couleur du bouton et du texte est configurable
		Par d�faut :
			- La couleur du bouton = la variable "primary-color"
			- La couleur du texte = blanc

	B. Cr�er une mixin pour tracer des lignes horizontales
		La couleur, la taille et l'�paisseur sont configurables
		Utiliser la mixin pour les 2 lignes du design (dans le slider et dans la colonne de droite)

	C. Cr�er une mixin pour afficher les photos de profil
		La taille est configurable

	D. Cr�er une mixin pour afficher des points
		La taille est la couleur des points sont configurables

	Tous les arguments des mixins ont des valeurs par d�faut

8. Couleurs
	Utiliser les fonctions de couleur pour les boutons :
		- La bordure est 10% plus sombre
		- Au survol, l'ensemble du bouton s'assombrit
		- Au clic, il s'assombrit encore davantage
		L'assombrissement tient compte de la couleur utilis�e en argument

9. Directives
	Utiliser la variable "users" pour afficher les utilisateurs dans la colonne de droite
	Utiliser une boucle pour afficher les images des articles
	Utiliser des conditions pour g�rer la pr�sentation altern�e des articles (point, fleche, marge)

10. Fonction
	Utiliser une fonction pour d�terminer la hauteur des articles en respectant un ratio 3/2

11. Extend
	Utiliser l'h�ritage pour que le bouton de commentaire h�rite du bouton like dans le slider

12. Bonus
	Convertir votre fichier en SASS pour utiliser une syntaxe plus l�g�re
	Rendre le code compatible avec les 10 derni�res versions du navigateur (gulpfile.js)