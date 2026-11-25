function initTheme() {
    const link = document.getElementById("theme-link");

    if (!link) return;

    let theme = localStorage.getItem("theme");
    if (!["white", "rainbow"].includes(theme)) theme = "dark";

    const lutinSrc = new URL("../assets/images/lutin.webp", document.currentScript.src).href;
    const lutins = creerLutins();

    function setTheme(newTheme) {
        theme = newTheme;
        link.href = new URL(`${theme}.css`, link.href).href;
        localStorage.setItem("theme", theme);
        afficherLutins(theme === "rainbow");
    }

    function afficherLutins(visible) {
        if (visible && !lutins.childElementCount) {
            for (let i = 0; i < 12; i++) {
                const lutin = document.createElement("img");

                lutin.src = lutinSrc;
                lutin.alt = "";

                lutin.style.setProperty("--x", `${Math.random() * 100}vw`);
                lutin.style.setProperty("--taille", `${2.5 + Math.random() * 2.5}em`);
                lutin.style.setProperty("--duree", `${7 + Math.random() * 8}s`);
                lutin.style.setProperty("--delai", `${-Math.random() * 15}s`);

                lutins.append(lutin);
            }
        }

        lutins.hidden = !visible;
    }

    function creerLutins() {
        const lutins = document.createElement("div");

        lutins.className = "lutins";
        lutins.setAttribute("aria-hidden", "true");
        lutins.setAttribute("inert", "");
        lutins.hidden = true;

        return lutins;
    }

    document.addEventListener("DOMContentLoaded", () => document.body.append(lutins));

    setTheme(theme);

    document.addEventListener("click", (event) => {
        if (event.target.closest("#analyse-spectrale")) {
            event.preventDefault();
            setTheme(theme === "rainbow" ? "dark" : "rainbow");
        }

        if (event.target.closest("#supprime-mes-traces")) {
            setTheme(theme === "dark" ? "white" : "dark");
        }
    });
}

initTheme();
