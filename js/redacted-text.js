/* Page de la Terre plate : passages censurés, masqués par une bande.
   Un clic, ou les touches Entrée ou Espace, révèle ou masque le passage. */

function initRedactedText() {
    /* Inverse l'état d'un passage et met à jour l'information du lecteur d'écran */
    function toggle(redacted) {
        const revealed = redacted.classList.toggle("revealed");

        redacted.setAttribute("aria-expanded", String(revealed));
    }

    for (const redacted of document.querySelectorAll(".redacted")) {
        redacted.addEventListener("click", () => toggle(redacted));

        redacted.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggle(redacted);
            }
        });
    }
}

initRedactedText();
