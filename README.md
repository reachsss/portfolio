# Portfolio d’Alexandre Antunes, BUT Informatique

Site statique (HTML, CSS, JavaScript) sans dépendance ni outil de build. Il s’ouvre sur un faux menu de démarrage GRUB qui sert de navigation.

## Arborescence

```
portfolio-alexandre/
├── index.html        Squelette de la page : écran GRUB, en-tête, zone de contenu
├── css/
│   └── style.css     Couleurs (variables dans :root), écran GRUB, mise en page du site
├── js/
│   ├── data.js       Menu GRUB (D.menu) et liste des projets (D.projets)
│   ├── views.js      Contenu de chaque rubrique (À propos, Passions, Parcours...)
│   └── main.js       Moteur : navigation clavier/tactile, thème clair/sombre
├── assets/
│   ├── img/          Tes images (captures 3D, photo, schémas)
│   └── video/        Tes vidéos de démonstration
└── README.md
```

## Voir le site en local

Ouvre `index.html` dans un navigateur. Pour un rendu identique à un vrai hébergement, lance dans le dossier :

```
python3 -m http.server 8000
```

puis va sur http://localhost:8000.

## Mettre le site en ligne (GitHub Pages)

1. Crée un dépôt GitHub et envoie-y le contenu du dossier (`index.html` à la racine du dépôt).
2. Dans le dépôt : Settings, Pages, puis choisis la branche `main` et le dossier `/ (root)`.
3. Le site est disponible à l’adresse affichée par GitHub au bout d’une minute ou deux.

## Compléter le site pendant le BUT

**Remplir un emplacement « À compléter »** : cherche `todo(` dans `js/data.js` et `js/views.js`, puis remplace le bloc par ton contenu.

**Ajouter un projet** : dans `js/data.js`, copie le premier objet de `D.projets` (celui de la chatière), colle-le à la suite et remplace ses textes. Tous les projets gardent ainsi le même format.

**Ajouter une image ou une vidéo** : dépose le fichier dans `assets/img/` ou `assets/video/`, puis insère dans le texte d’une rubrique (par exemple à la place d’un `todo(...)`) :

```html
<figure>
  <img src="assets/img/catlock-3d.png" alt="Conception 3D de la chatière CatLock">
  <figcaption>Vue 3D de la chatière</figcaption>
</figure>
```

**Ajouter une rubrique** (par exemple « Compétences » ou « Veille technologique ») :
1. Dans `js/data.js`, ajoute une entrée à `D.menu` : `{id:"competences",n:"Compétences",t:"Compétences"}`.
2. Dans `js/views.js`, ajoute dans l’objet `V` une fonction du même nom, qui renvoie le HTML de la rubrique :

```js
competences:()=>`<h1>Compétences</h1><p>Mon texte.</p>`,
```

La rubrique apparaît d’elle-même dans le menu GRUB et dans la barre de navigation.

**Remplacer l’entrée « Advanced options for BUT 2 »** : dans `D.menu`, retire `soon:1` et donne-lui un `id`, un `n` et une fonction dans `V`.

**Changer les couleurs** : modifie les variables au début de `css/style.css` (`--acc` pour l’orange, `--bg` et `--ink` pour le fond et le texte, `--g-*` pour l’écran GRUB).

## Raccourcis

Sur l’écran GRUB : flèches haut et bas pour choisir, Entrée pour démarrer. Dans le site : Échap ou le bouton « ‹ GRUB » pour revenir au menu. Chaque rubrique a aussi une adresse directe (par exemple `index.html#projets`).
