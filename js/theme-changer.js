function initTheme() {
    const link = document.getElementById("theme-link");

    if (!link) return;

    let theme = localStorage.getItem("theme");
    if (theme !== "white") theme = "dark";

    function setTheme(newTheme) {
        theme = newTheme;
        link.href = new URL(`${theme}.css`, link.href).href;
        localStorage.setItem("theme", theme);
    }

    setTheme(theme);

    document.addEventListener("click", (event) => {
        if (event.target.closest("#supprime-mes-traces")) {
            setTheme(theme === "dark" ? "white" : "dark");
        }
    });
}

initTheme();
