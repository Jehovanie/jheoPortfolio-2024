# Captures d'écran des projets

Un dossier par projet, nommé avec le `slug` déclaré dans
`src/components/projet/Project.jsx` (`ticketUp`, `mySchool`, `ebookShare`, ...).

Il suffit de déposer les captures (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`)
dans le dossier correspondant : elles sont chargées automatiquement par
`import.meta.glob` et affichées dans le carrousel de la modal, **triées par
ordre alphanumérique du nom de fichier**.

Nommer les fichiers avec un préfixe numérique pour maîtriser l'ordre :

```
ticketUp/
  01-accueil.png
  02-liste-evenements.png
  03-paiement.png
```

L'image de couverture (celle de la card) reste déclarée dans `Project.jsx`
via la propriété `image` et s'affiche toujours en premier dans le carrousel.

## Compresser les captures avant de commiter

Une capture d'écran retina pèse facilement 1 à 3 Mo, pour un affichage qui ne
dépasse jamais ~800 px de large dans la modal. Passer les captures en WebP
redimensionné à 1600 px divise le poids par ~20 sans perte visible :

```bash
# depuis ce dossier, pour un projet donné
for f in ticketUp/*.png; do
  magick "$f" -resize 1600x\> -strip -quality 82 "${f%.png}.webp"
done
rm ticketUp/*.png
```

(`magick` = ImageMagick, `brew install imagemagick`.)
