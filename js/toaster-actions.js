/* Page du grille-pain : faux scan de la cuisine et purge du cache des miettes.
   Le scan affiche un journal ligne par ligne, sans aucun appel réseau. */

function initToasterActions() {
    const scanButton = document.querySelector(".btn-scan");
    const purgeButton = document.querySelector(".btn-purge");
    const log = document.querySelector(".scan-log");

    if (!scanButton || !purgeButton || !log) return;

    const scanLines = [
        "Analyse de la cuisine en cours…",
        "Four : propre, donc suspect.",
        "Réfrigérateur : 3 aimants, 0 microphone.",
        "Grille-pain : NON CONFORME, transmet vers Cap Canaveral.",
        "Scan terminé : 2 appareils sous surveillance.",
    ];

    let scanning = false;

    /* Affiche une ligne dans le journal, puis la suivante après un court délai.
       Si le visiteur demande la réduction des mouvements, tout s'affiche aussitôt. */
    function showLine(index) {
        if (index === scanLines.length) {
            scanning = false;
            scanButton.disabled = false;
            return;
        }

        const line = document.createElement("p");

        line.textContent = `> ${scanLines[index]}`;
        log.append(line);

        const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;

        window.setTimeout(() => showLine(index + 1), delay);
    }

    scanButton.addEventListener("click", () => {
        if (scanning) return;

        scanning = true;
        scanButton.disabled = true;

        log.replaceChildren();
        log.hidden = false;

        showLine(0);
    });

    /* Purge : le script de thème est prié de revenir au sombre, puis le journal confirme */
    purgeButton.addEventListener("click", () => {
        document.dispatchEvent(new Event("reset-theme"));

        const line = document.createElement("p");

        line.textContent = "> Cache purgé : 0 miette récupérée. Retour au thème sombre.";
        log.replaceChildren(line);

        log.hidden = false;
    });
}

initToasterActions();
