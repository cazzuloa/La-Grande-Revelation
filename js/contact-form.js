/* Page contact : validation du formulaire d'avis et ouverture de la messagerie.
   L'adresse du destinataire est lue dans l'attribut action du formulaire (contact.html). */

function initOpinionForm() {
    const form = document.querySelector(".opinion-form");

    if (!form) return;

    const status = form.querySelector(".form-status");
    const preview = status.querySelector(".message-preview");
    const mailLink = status.querySelector(".mail-link");
    const copyButton = status.querySelector(".btn-copy");
    const message = form.querySelector("#message");
    const messageCount = form.querySelector("#message-count");

    const names = [...form.querySelectorAll("[name]")].map((control) => control.name).filter((name, index, all) => all.indexOf(name) === index);

    const messages = {
        topic: "Choisissez le dossier concerné.",
        rating: "Attribuez une note de 1 à 5.",
        message: "Rédigez votre avis.",
    };

    let submitted = false;

    /* Les erreurs sont affichées sous les champs : les bulles natives sont désactivées.
       Sans JavaScript, la validation native reste active. */
    form.noValidate = true;

    function controlsOf(name) {
        return form.querySelectorAll(`[name="${name}"]`);
    }

    function showError(name, text) {
        const error = form.querySelector(`#${name}-error`);

        if (!error) return;

        error.textContent = text;

        for (const control of controlsOf(name)) {
            if (text) {
                control.setAttribute("aria-invalid", "true");
            } else {
                control.removeAttribute("aria-invalid");
            }
        }
    }

    /* Renvoie le message d'erreur d'un champ, ou une chaîne vide s'il est valide */
    function validate(name) {
        const [control] = controlsOf(name);
        const checked = control.type === "radio" ? form.querySelector(`[name="${name}"]:checked`) : control;

        const value = (checked ? checked.value : "").trim();

        let text = "";

        if (control.required && !value) {
            text = messages[name];
        } else if (control.type === "email" && value && !control.checkValidity()) {
            text = "Saisissez une adresse e-mail valide, par exemple agent@bunker.fr.";
        } else if (control.minLength > 0 && value.length < control.minLength) {
            text = `Votre avis est trop court : il faut au moins ${control.minLength} caractères.`;
        }

        showError(name, text);

        return text;
    }

    /* Construit le lien mailto : objet résumé, corps détaillant chaque champ */
    function buildMailto() {
        const data = new FormData(form);
        const topic = data.get("topic");
        const rating = data.get("rating");

        const body = [
            "Témoignage transmis depuis La Grande Révélation",
            "",
            `Nom de code : ${data.get("codename").trim() || "non renseigné"}`,
            `Adresse de contact : ${data.get("email").trim() || "non renseignée"}`,
            `Dossier concerné : ${topic}`,
            `Note : ${rating} / 5`,
            "",
            "Avis :",
            data.get("message").trim(),
        ].join("\r\n");

        const subject = `[La Grande Révélation] Avis - ${topic} - note ${rating}/5`;

        return {
            body,
            href: `${form.getAttribute("action")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        };
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        submitted = true;

        const invalid = names.filter((name) => validate(name));

        /* Champs en erreur : le focus passe au premier, son message est lu */
        if (invalid.length) {
            controlsOf(invalid[0])[0].focus();
            return;
        }

        const { body, href } = buildMailto();

        preview.textContent = body;
        mailLink.href = href;
        status.hidden = false;
        status.focus();

        /* Ouvre le client de messagerie du visiteur avec le message prêt à envoyer */
        window.location.href = href;
    });

    /* Après une première tentative, les erreurs disparaissent dès la correction */
    form.addEventListener("input", (event) => {
        if (submitted && names.includes(event.target.name)) validate(event.target.name);
    });

    message.addEventListener("input", () => {
        messageCount.textContent = `${message.value.length} / ${message.maxLength}`;
    });

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(preview.textContent);

            copyButton.textContent = "Message copié";
        } catch {
            /* Presse-papiers indisponible : le texte est sélectionné pour un copier-coller manuel */
            const range = document.createRange();

            range.selectNodeContents(preview);

            const selection = window.getSelection();

            selection.removeAllRanges();
            selection.addRange(range);

            copyButton.textContent = "Texte sélectionné : faites Ctrl + C (ou Cmd + C)";
        }
    });
}

initOpinionForm();
