function initTheme() {
    const link = document.getElementById("theme-link");
    const btn = document.getElementById("supprime-mes-traces");

    if (!link) return;

    const cssBase = window.location.pathname.includes("/pages/") ? "../css/" : "css/";

    function setTheme(theme) {
        link.href = `${cssBase}${theme}.css`;
        localStorage.setItem("theme", theme);
    }

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(localStorage.getItem("theme") || "dark");

    if (btn) {
        btn.addEventListener("click", () => {
            const current = localStorage.getItem("theme");
            setTheme(current === "dark" ? "light" : "dark");
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
} else {
    initTheme();
}