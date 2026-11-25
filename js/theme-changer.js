/* Gestion du thème : la feuille de couleur (dark, white ou rainbow) est échangée via la
   balise link#theme-link, et le choix est mémorisé dans le navigateur. */

function initTheme() {
    const link = document.getElementById("theme-link");

    if (!link) return;

    let theme = localStorage.getItem("theme");
    if (!["white", "rainbow"].includes(theme)) theme = "dark";

    const leprechaunSrc = new URL("../assets/images/leprechaun.webp", document.currentScript.src).href;
    const leprechauns = createLeprechauns();

    /* Applique un thème : échange la feuille de style, mémorise le choix
       et affiche ou masque la pluie de lutins propre au thème arc-en-ciel */
    function setTheme(newTheme) {
        theme = newTheme;
        link.href = new URL(`${theme}.min.css`, link.href).href;
        localStorage.setItem("theme", theme);
        showLeprechauns(theme === "rainbow");
    }

    /* Les images de lutins ne sont créées qu'au premier affichage :
       l'image n'est pas téléchargée dans les autres thèmes */
    function showLeprechauns(visible) {
        if (visible && !leprechauns.childElementCount) {
            for (let i = 0; i < 12; i++) {
                const leprechaun = document.createElement("img");

                leprechaun.src = leprechaunSrc;
                leprechaun.alt = "";

                leprechaun.style.setProperty("--x", `${Math.random() * 100}vw`);
                leprechaun.style.setProperty("--size", `${2.5 + Math.random() * 2.5}em`);
                leprechaun.style.setProperty("--duration", `${7 + Math.random() * 8}s`);
                leprechaun.style.setProperty("--delay", `${-Math.random() * 15}s`);

                leprechauns.append(leprechaun);
            }
        }

        leprechauns.hidden = !visible;
    }

    /* Couche fixe au-dessus de la page : purement décorative, donc ignorée
       des lecteurs d'écran (aria-hidden) et des clics (inert) */
    function createLeprechauns() {
        const leprechauns = document.createElement("div");

        leprechauns.className = "leprechauns";
        leprechauns.setAttribute("aria-hidden", "true");
        leprechauns.setAttribute("inert", "");
        leprechauns.hidden = true;

        return leprechauns;
    }

    document.addEventListener("DOMContentLoaded", () => document.body.append(leprechauns));

    setTheme(theme);

    /* Clics : le lien « analyse spectrale » de l'accueil bascule le thème arc-en-ciel,
       le bouton « effacer mes traces » bascule entre sombre et blanc */
    document.addEventListener("click", (event) => {
        if (event.target.closest("#spectral-analysis")) {
            event.preventDefault();
            setTheme(theme === "rainbow" ? "dark" : "rainbow");
        }

        if (event.target.closest("#clear-my-traces")) {
            alert("Trop tard, ils savent");
            setTheme(theme === "dark" ? "white" : "dark");
        }
    });

    /* Événement envoyé par la page du grille-pain (« purger le cache ») : retour au sombre */
    document.addEventListener("reset-theme", () => setTheme("dark"));
}

initTheme();
