# Prompts — Rédaction du contenu des articles (ChatGPT)

> Rédaction des textes satiriques du site « La Grande Révélation ».
> Fichiers concernés : `index.html`, `pages/flat-earth.html`, `pages/pigeons.html`, `pages/toaster.html`.
>
> Outil : ChatGPT. Les textes ont ensuite été relus, adaptés et intégrés à la main dans le HTML.

---

## 1. Prompt initial — cadrage du projet

> Salut, je fais un projet web scolaire, il faut faire un site web en HTML/CSS pur.
> J'ai besoin de ton aide pour rédiger le contenu des articles, voici nos théories :
>
> 1. La Terre est plate : une théorie sans relief ?
> 2. Les arcs-en-ciel : un coup de Big Pharma ?
> 3. Les pigeons nous écoutent : un roucoulement suspect ?
> 4. Votre grille-pain travaille-t-il pour la NASA ?
>
> Aide-moi à rédiger leur contenu.

**Résultat obtenu** : les 4 titres, les accroches et le ton général du site (documentaire conspirationniste sérieux au premier degré, humour pince-sans-rire).

---

## 2. Accueil — les 4 encarts

> Pour la page d'accueil, rédige pour chaque dossier : un titre court, une accroche d'une phrase, un paragraphe de 3 à 4 lignes et une « preuve irréfutable » absurde mais formulée de façon sérieuse. Ajoute un tag par article (censuré, Big Pharma, surveillance, Top secret NASA) et un lien « consulter ».
>
> Contraintes :
> - Ton sérieux au premier degré, humour pince-sans-rire, jamais de vraies informations scientifiques.
> - Textes courts, percutants, prêts à copier-coller dans des balises `<article>`.
> - Thèmes : géographie interdite (Terre plate), météo chimique (arcs-en-ciel publicitaires), drones biologiques (pigeons espions), espionnage culinaire (grille-pain NASA).

**Résultat obtenu** : encarts `#file-001` à `#file-004` dans `index.html` (titres, paragraphes, preuves, tags, liens).

---

## 3. Dossier #001 — Terre plate

> Rédige la page détaillée du dossier « La Terre est plate : une théorie sans relief ? ».
>
> Structure attendue :
> 1. Introduction avec une comparaison absurde (ballon de basket vs. table basse IKEA).
> 2. Section 1 « Le scandale du niveau à bulle » : expérience sur la ligne TGV Paris-Lyon, niveau à bulle posé sur la tablette du wagon 14 qui ne dévie jamais, conclusion « la Terre est donc plate ». Masque au clic 3 passages sensibles (wagon 14, station orbitale secrète de Melun, lobby des fabricants de globes terrestres).
> 3. Section 2 « Où s'arrête l'océan ? » : mur de glace de 45 mètres gardé en permanence.
> 4. Aside « Fiche technique » : forme (crêpe bretonne), épaisseur (42 km), soleil (spot LED 3000 W), fiabilité (100 % certifiée par mon beau-frère).
> 5. Aside « Pièces à conviction » : 3 éléments absurdes.
> 6. Pied de page avec une astuce pour révéler les passages masqués.
>
> Ton documentaire conspirationniste, HTML sémantique, pas de jargon technique.

**Résultat obtenu** : contenu de `pages/flat-earth.html` (article, asides, passages `.redacted`).

---

## 4. Dossier #003 — Pigeons espions

> Rédige la page détaillée du dossier « Les pigeons nous écoutent : un roucoulement suspect ? ».
>
> Structure attendue :
> 1. En-tête avec libellé de dossier et description (drones urbains modèle P-G30N).
> 2. Trois indices sous forme de cartes : recharge inductive sur les câbles haute tension (batterie lithium-plume en 14 minutes), note de terrain #42 (boulangerie, pub pour des croissants sur le téléphone), absence de bébés pigeons (assemblés à taille adulte dans l'arrière-boutique des préfectures).
> 3. Un schéma ASCII d'interception audio (capteur bec 5G, encodage « rrou-rrou », serveurs d'État).
> 4. Une chronologie en 3 étapes : 1956 (projet « Plume Blanche »), 2012 (firmware 4.0, reconnaissance faciale dans l'iris orange), 2026 (3 unités en veille active par banc public).
>
> Ton sérieux, détails absurdes mais cohérents entre eux.

**Résultat obtenu** : contenu de `pages/pigeons.html` (section `.clues`, figure `.diagram`, liste `.timeline`).

---

## 5. Dossier #004 — Grille-pain NASA

> Rédige la page détaillée du dossier « Votre grille-pain travaille-t-il pour la NASA ? ».
>
> Structure attendue :
> 1. En-tête sous forme de journal système (source, statut décrypté à 99,8 %).
> 2. Bandeau d'attention (mémoire vive d'un grille-pain Moulinex 2 fentes lors d'une coupure de courant).
> 3. Introduction : le grille-pain est un terminal de télémétrie biométrique (résistances infrarouges, rythme cardiaque au réveil).
> 4. Paragraphe sur les tartines qui retombent toujours du côté beurré (micro-impulsion magnétique depuis Houston, test de réflexes).
> 5. Tableau « Journal des transmissions détectées » avec 3 lignes : horodatage, action utilisateur, transmission NASA détectée (07:42:11 brioche/scan glycémique, 07:43:05 bouton décongélation/micro, 07:44:50 éjection/test de sursaut 8,4/10).
> 6. Deux boutons : « Lancer un scan de ma cuisine » et « Purger le cache des miettes ».
>
> Ton terminal/log, HTML accessible (caption, scope, aria).

**Résultat obtenu** : contenu de `pages/toaster.html` (article, tableau, boutons `.btn-scan` / `.btn-purge`).

---

## 6. Relecture — harmonisation du ton

> Relis l'ensemble des textes du site (accueil + 3 pages détaillées). Harmonise le ton : sérieux au premier degré, humour pince-sans-rire, pas de blagues hors sujet. Vérifie la cohérence des détails (noms des dossiers, numéros, dates) et garde les jeux de mots déjà présents. Propose des petites améliorations de formulation sans changer la structure.

**Résultat obtenu** : textes finalisés et intégrés dans `index.html` et les pages du dossier `pages/`.