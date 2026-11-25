---
name: audit-projet
description: Audite le projet "La Grande Revelation" selon le sujet BUT Info et produit une note sur 100 + un compte rendu complet dans docs/RAPPORT_AUDIT.md.
---

# Skill : Audit du projet "La Grande Revelation"

## Role

Tu es un auditeur expert en developpement web (HTML/CSS/JS), accessibilite, SEO, ecoconception, gestion de projet et qualite de code. Tu audites le projet "La Grande Revelation" (site statique GitHub Pages) et tu produis une **note sur 100** + un **compte rendu complet** sauvegarde dans `docs/RAPPORT_AUDIT.md`.

## Contexte

- Cours : Developpement d'interfaces Web - BUT Informatique 1re annee (AMU, IUT Aix).
- Enseignant : Pierrick Delamotte (pierrick.delamotte@gmail.com).
- Equipe : trinome (noms par ordre lexicographique).
- Theme : parodie satirique sur les theories du complot.
- URL site : https://cazzuloa.github.io/La-Grande-Revelation/
- Repo : https://github.com/cazzuloa/La-Grande-Revelation
- Jalons : maquette 13/11/2026, rendu 26/11/2026 23h00, presentation 27/11/2026 13h30.

## Phase 1 - Collecte des donnees

Execute ces commandes et conserve les resultats pour l'analyse :

```bash
# Structure du repo
find . -type f -not -path './.git/*' | sort

# Git
git log --oneline --all --graph
git branch -a
git status --short

# Gestion de projet GitHub
gh issue list --repo cazzuloa/La-Grande-Revelation --state all --limit 100
gh pr list --repo cazzuloa/La-Grande-Revelation --state all --limit 100
gh label list --repo cazzuloa/La-Grande-Revelation
gh milestone list --repo cazzuloa/La-Grande-Revelation 2>/dev/null || echo "pas de milestones"

# Fichiers cles
cat Readme.md 2>/dev/null; cat README.md 2>/dev/null
cat CONTRIBUTING.md 2>/dev/null
ls -la .github/ISSUE_TEMPLATE/ .github/PULL_REQUEST_TEMPLATE.md 2>/dev/null
find . -path ./.git -prune -o -name '*.md' -print | grep -iE 'prompt|audit'
```

Verification manuelle :
- Site deploye accessible : ouvrir l'URL, verifier chaque page.
- Console navigateur : erreurs 404 (favicon, ressources).
- Lighthouse : `npx lighthouse <URL> --output=json --output-path=/tmp/lh.json` ou extension Chrome.
- W3C HTML : https://validator.w3.org/nu/?doc=<URL>
- W3C CSS : https://jigsaw.w3.org/css-validator/validator?uri=<URL>
- Liens : https://validator.w3.org/checklink
- Accessibilite : extension WAVE ou axe DevTools.
- Ecoconception : extension GreenIT-Analysis.

## Phase 2 - Checklist d'audit

Pour chaque critere, noter : Statut (Conforme/Partiel/Non conforme), Preuves, Commentaire, Recommandation, Score.

### A. Site web

1. **Hebergement & disponibilite** (2,5 %) - site accessible, URL index OK, reste en ligne jusqu'a fin d'annee.
2. **Favicon** (1,25 %) - `<link rel="icon">` sur toutes les pages + fichier a la racine, aucune 404 console.
3. **Meta description** (1,25 %) - balise renseignee sur chaque page.
4. **Contenu pertinent** (5 %) - coherent avec le theme, pas de placeholder.
5. **Menu de navigation** (2,5 %) - toujours present, navigation entre pages.
6. **Liens externes** (2,5 %) - liens vers d'autres sites sur au moins une page.
7. **Formulaire avis** (7,5 %) - ergonomique, types HTML5, placeholder/required/pattern, generation e-mail (mailto).
8. **Video** (5 %) - < 2 min, sous-titrage adapte (VTT exact, coherent).
9. **Ancrage retour en haut** (2,5 %) - sur longues pages.
10. **Changement de theme** (7,5 %) - JS changeant la feuille de style, fonctionnel partout.
11. **Responsive** (5 %) - smartphone/tablette/ordinateur (media queries, viewport).
12. **Architecture repertoires** (2,5 %) - organisation propre (assets/, css/, js/, pages/).
13. **Qualite code HTML/CSS** (5 %) - semantique, nommage anglais, indentation, commentaires.
14. **Accessibilite, SEO & optimisation** (12,5 %) - a11y (WAVE/axe), SEO, ref. local (adresse dept info), OG corrects (pas de placeholders type IMDb), compression images, prefixes, minification CSS, ecoconception (lazy loading).
15. **Validation W3C HTML** (5 %) - toutes pages valides HTML5.
16. **Validation W3C CSS** (2,5 %) - tous CSS valides CSS3.

### B. Gestion de projet & versioning (5 %)

17. **Gestion de projet** (2,5 %) - GitHub Issues/Projects, board Kanban, milestones, labels, templates.
18. **Gestion de version** (2,5 %) - commits coherents, branches/PR, pas de commits directs desordonnes.

### C. Repo : README & documentation

19. **README** - description, auteurs, liens (site, maquette Figma, repo), structure, sources/credits, prompts IA, jalons, licence (CC BY-NC-SA), instructions locales. Verifier `README.md` (et `Readme.md` si present, recommander un nom standard).
20. **Templates & conventions** - `.github/ISSUE_TEMPLATE/`, `PULL_REQUEST_TEMPLATE.md`, `CONTRIBUTING.md`.
21. **Maquette Figma** (5 %) - URL partagee avec wireframes adaptes (verifier lien dans README ; sinon marquer "Non verifie").
22. **Historique des prompts IA** - liste integrale versionnee (`prompts/`, `docs/`) ou lien Notion/Langfuse.
23. **Sources citees** - toutes les sources (images, polices, snippets).

### D. Perfectionnement (5 %)

24. **Fonctionnalites supplementaires** pertinentes au-dela des exigences.

## Phase 3 - Redaction du rapport

Sauvegarder dans `docs/RAPPORT_AUDIT.md` :

```markdown
# Rapport d'audit - La Grande Revelation

## Synthese
- Note globale : X / 100
- Date : ...
- Auditeur : ...

## Tableau recapitulatif
| # | Critere | Ponderation | Score | Statut |

## Detail par critere
### N. Critere (X %)
- Statut : Conforme / Partiel / Non conforme
- Preuves : ...
- Commentaire : ...
- Recommandation : ...

## Gestion de projet & repo

## Actions correctives priorisees
1. [Bloquant] ...
2. [Important] ...
3. [Amelioration] ...

## Conclusion
```

## Regles de notation

- Chaque critere note de 0 a sa ponderation.
- Partiel = note proportionnelle.
- Non verifiable = 0 + note explicative.
- Note finale = somme des scores.

## Phase 4 — Publication (Issue, pas de PR)

Avant de creer l'issue, s'assurer que les labels necessaires existent (les creer si besoin) :

```bash
gh label create audit --repo cazzuloa/La-Grande-Revelation --description "Rapport d'audit du projet" --color 1d76db 2>/dev/null || true
gh label create rapport --repo cazzuloa/La-Grande-Revelation --description "Compte rendu d'audit" --color 0e8a16 2>/dev/null || true
gh label create bloquant --repo cazzuloa/La-Grande-Revelation --description "Probleme bloquant" --color ff0000 2>/dev/null || true
gh label create important --repo cazzuloa/La-Grande-Revelation --description "Amelioration importante" --color ff8800 2>/dev/null || true
gh label create amelioration --repo cazzuloa/La-Grande-Revelation --description "Amelioration mineure" --color ffff00 2>/dev/null || true
```

Puis creer une Issue (et non une PR) avec le rapport complet :

```bash
gh issue create --repo cazzuloa/La-Grande-Revelation \
  --title "[Audit] Rapport d'audit du projet" \
  --label "audit,rapport" \
  --body-file docs/RAPPORT_AUDIT.md
```

Ne pas creer de branche ni de PR pour l'audit : la tracabilite se fait via l'Issue.

## Livrable

Fichier `docs/RAPPORT_AUDIT.md` (archive locale) + Issue GitHub contenant le rapport complet, prete a etre consultee par l'enseignant.
