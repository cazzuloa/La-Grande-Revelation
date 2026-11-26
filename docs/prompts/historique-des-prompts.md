# Historique des prompts

> V1.0.0

Cette œuvre de Mickaël Martin Nevot est mise à disposition sous licence Creative Commons Attribution - Utilisation non commerciale - Partage dans les mêmes conditions.

Document en ligne : [Mickaël Martin Nevot - Recueil des cours](http://www.mickael-martin-nevot.com/)


## Mise en garde face à l’atrophie cognitive

Les systèmes algorithmiques d'aide à la décision (SAAD, ou « IA ») peuvent, ne serait-ce qu’en informatique, apporter une grande aide au développement, rendre le débogage plus efficace, faire penser à des solutions inédites, être un support à la conception, etc.

> Mais ces outils ne dispensent pas de comprendre ce que l’on fait.

Un code source généré qui n’est pas maîtrisé ne pourra pas être amélioré, maintenu, corrigé, ni même compris et présenté correctement lors d’une démonstration. La recherche scientifique emploie le terme d’atrophie cognitive pour qualifier ce phénomène : à force de déléguer sans réfléchir suffisamment, on perd progressivement l’habitude de le faire, on conceptualise de manière moins efficace et on a de plus en plus de difficultés à résoudre des problèmes.

> La capacité d’analyse distingue un professionnel compétent d’un simple utilisateur.

Ce modèle d’historique de prompts, duplicable, offre à son utilisateur un soutien pour une utilisation en conscience de ces nouveaux systèmes.

## Modèle

| Tâche | Outil | Utilité | Solution proposée | Prompt (résumé) |
| --- | --- | --- | --- | --- |
| Vérification du projet | Opencode + Skill custom | Oui, permet d'avoir une idée de l'avancer du projet | Rapport complet ici : https://github.com/cazzuloa/La-Grande-Revelation/issues/9  | Voir docs/skill/audit-projet/SKILL.md |
| Prompts GIFs vidéo | Opencode | Oui, série de 8 prompts Gemini pour la vidéo « L'œil du bunker » | Fichier : docs/prompts/prompts-gifs-video.md | Voir docs/prompts/prompts-gifs-video.md |
| Assemblage vidéo + voix off | Opencode + ffmpeg | Oui, montage des 8 GIFs en MP4 24 s avec voix off (trailer) | Fichiers : assets/videos/evidence.mp4, evidence.fr.vtt, tools/assemble-video.sh, docs/prompts/script-voix-off-oeil-du-bunker.md | Voir docs/prompts/script-voix-off-oeil-du-bunker.md |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |