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

## Mettre un site en ligne (GitHub Pages)

Dans le dépôt : Settings, Pages, puis choisir la branche `main` et le dossier `/ (root)`.

## Compléter le site pendant le BUT

**Remplir un emplacement « À compléter »** : chercher `todo(` dans `js/data.js` et `js/views.js`, puis remplacer le bloc par le futur contenu.

**Ajouter un projet** : dans `js/data.js`, copier le premier objet de `D.projets` (celui de la chatière), le coller à la suite et remplacer ses textes. Tous les projets garderont donc le même format.

**Ajouter une image ou une vidéo** : déposer le fichier dans `assets/img/` ou `assets/video/`, puis insèrer dans le texte d’une rubrique (par exemple à la place d’un `todo(...)`) :

```html
<figure>
  <img src="assets/img/catlock-3d.png" alt="Conception 3D de la chatière CatLock">
  <figcaption>Vue 3D de la chatière</figcaption>
</figure>
```

**Ajouter une rubrique** (par exemple « Compétences » ou « Veille technologique ») :
1. Dans `js/data.js`, ajouter une entrée à `D.menu` : `{id:"competences",n:"Compétences",t:"Compétences"}`.
2. Dans `js/views.js`, ajouter dans l’objet `V` une fonction du même nom, qui renvoie le HTML de la rubrique :

```js
competences:()=>`<h1>Compétences</h1><p>Mon texte.</p>`,
```

La rubrique apparaît d’elle-même dans le menu GRUB et dans la barre de navigation.

**Remplacer l’entrée « Advanced options for BUT 2 »** : dans `D.menu`, retirer `soon:1` et lui donner un `id`, un `n` et une fonction dans `V`.

**Changer les couleurs** : modifier les variables au début de `css/style.css` (`--acc` pour l’orange, `--bg` et `--ink` pour le fond et le texte, `--g-*` pour l’écran GRUB).

## Raccourcis

Sur l’écran GRUB : flèches haut et bas pour choisir, Entrée pour démarrer. Dans le site : Échap ou le bouton « ‹ GRUB » pour revenir au menu. Chaque rubrique a aussi une adresse directe (par exemple `index.html#projets`).
