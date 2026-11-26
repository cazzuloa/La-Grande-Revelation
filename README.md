# La Grande Révélation

<!-- Y a rien à voir ici, pas besoin de regarder le code source, c'est pas beau -->
<!-- J'espère avoir une bonne note pour ce projet -->

![GitHub repo size](https://img.shields.io/github/repo-size/cazzuloa/La-Grande-Revelation)
![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/cazzuloa/La-Grande-Revelation)
![GitHub contributors](https://img.shields.io/github/contributors/cazzuloa/La-Grande-Revelation)
![GitHub issues](https://img.shields.io/github/issues/cazzuloa/La-Grande-Revelation)
![GitHub pull requests](https://img.shields.io/github/issues-pr/cazzuloa/La-Grande-Revelation)

Site web statique réalisé dans le cadre du cours **Développement d'interfaces Web** (BUT Informatique, 1re année — Aix-Marseille Université, IUT d'Aix-en-Provence).

Le site est une parodie satirique sur les théories du complot : chaque page démonte un « dossier » (Terre plate, pigeons, grille-pain…) avec un ton humoristique.

## Informations académiques

- **Cours** : Développement d'interfaces Web
- **Enseignant responsable** : Pierrick Delamotte (pierrick.delamotte@gmail.com)
- **Sujet** : https://www.mickael-martin-nevot.com/univ-amu/iut/but-informatique/developpement-d-interfaces-web/?:s18-projet.pdf
- **Jalons** :
  - Maquette (Figma)
  - Rendu du projet
  - Présentation orale

## Liens utiles

- **Site déployé (GitHub Pages)** : https://cazzuloa.github.io/La-Grande-Revelation/
- **Repo GitHub** : https://github.com/cazzuloa/La-Grande-Revelation
- **Maquette Figma** : [Figma](https://www.figma.com/site/aBnsPn0E7NXZi2SjuXow4C/Sans-titre?node-id=0-1&t=lNh8kenXYwGpCIGX-1)

## Structure du projet

```
La-Grande-Revelation/
├── index.html
├── assets/
│   ├── images/
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-32.png
│   │   ├── favicon-192.png
│   │   ├── leprechaun.webp
│   │   └── og-image.jpg
│   └── videos/
│       ├── evidence-poster.jpg
│       ├── evidence.fr.vtt
│       └── evidence.mp4
├── css/
│   ├── contact.css / contact.min.css
│   ├── dark.css / dark.min.css
│   ├── flat-earth.css / flat-earth.min.css
│   ├── global.css / global.min.css
│   ├── index.css / index.min.css
│   ├── pigeons.css / pigeons.min.css
│   ├── rainbow.css / rainbow.min.css
│   ├── toaster.css / toaster.min.css
│   └── white.css / white.min.css
├── js/
│   ├── contact-form.js
│   ├── redacted-text.js
│   ├── theme-changer.js
│   └── toaster-actions.js
├── pages/
│   ├── contact.html
│   ├── flat-earth.html
│   ├── pigeons.html
│   └── toaster.html
├── docs/
│   ├── prompts/
│   │   ├── historique-des-prompts.md
│   │   ├── prompts-gifs-video.md
│   │   └── script-voix-off-oeil-du-bunker.md
│   └── skill/
│       └── audit-projet/
│           └── SKILL.md
├── tools/
│   ├── assemble-video.sh
│   └── minify.sh
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
├── CONTRIBUTING.md
├── README.md
├── robots.txt
└── sitemap.xml
```

## Fonctionnalités

- Page d'accueil présentant les 4 dossiers classifiés.
- Pages détaillées par dossier (`pages/`).
- Changement de thème (clair/sombre) via JavaScript et feuilles de style alternatives.
- Design responsive (smartphone, tablette, ordinateur).
- Formulaire de contact/avis avec génération d'e-mail.

## Outils

Dans le dossier **tools** :

- **minify.sh** : génère les fichiers CSS minifiés du site.
- **assemble-video.sh** : assemble les 8 GIFs du dossier `assets/videos/clips/` en une vidéo MP4 (`assets/videos/evidence.mp4`), avec muxage optionnel de la voix off. Script généré avec l'aide d'Opencode (IA). Voir aussi `docs/prompts/prompts-gifs-video.md` (prompts des GIFs) et `docs/prompts/script-voix-off-oeil-du-bunker.md` (script voix off).

## Sources et crédits

- Icônes : [Heroicons](https://heroicons.com/)
- Polices : [Google Fonts](https://fonts.google.com/) (Courier Prime, Noto Serif, Space Mono)
- Bouton transparent : [StackOverflow — j08691](https://stackoverflow.com/a/22672444) (CC BY-SA 4.0)
- Variables CSS : [W3Schools](https://www.w3schools.com/css/css3_variables.asp)
- Référence HTML/CSS : [MDN Web Docs](https://developer.mozilla.org/fr/)
- Gist utile : https://gist.github.com/whitingx/3840905

_Toute source utilisée doit être citée (obligation juridique)._

## Historique des prompts IA

L'historique intégral des prompts utilisés avec des systèmes d'aide à la décision (IA/SAAD) est disponible dans le dossier `docs/prompts/`.

## Gestion de projet

- Issues et pull requests : https://github.com/cazzuloa/La-Grande-Revelation/issues
- Conventions de contribution : voir [CONTRIBUTING.md](CONTRIBUTING.md)
- Templates d'issues/PR : `.github/ISSUE_TEMPLATE/` et `.github/PULL_REQUEST_TEMPLATE.md`

## Installation locale

1. Cloner le dépôt : `git clone https://github.com/cazzuloa/La-Grande-Revelation.git`
2. Ouvrir `index.html` dans un navigateur, ou lancer un serveur local :
   ```bash
   python3 -m http.server 8000
   ```
3. Accéder à `http://localhost:8000`

## Validation

- HTML5 : https://validator.w3.org/nu/
- CSS3 : https://jigsaw.w3.org/css-validator/
- Accessibilité : WAVE / axe DevTools
- Performances : Google Lighthouse

## Licence

Ce projet est distribué sous licence **Creative Commons Attribution - NonCommercial - ShareAlike (CC BY-NC-SA 4.0)**, conformément au sujet du cours.

## Contact

Pour toute question concernant ce projet, vous pouvez contacter les membres de l'équipe :

- Anthony Cazzulo : anthony.cazzulo [at] etu.univ-amu.fr
- Lucas Boucq : lucas.boucq [at] etu.univ-amu.fr
- Clément Coutellier : clement.coutellier [at] etu.univ-amu.fr
- Thomas Tolsa : thomas.tolsa [at] etu.univ-amu.fr
