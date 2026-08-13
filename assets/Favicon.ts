function prefersDarkColorScheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function updateFavicon() {
    const favicon = document.querySelector("link[rel=icon]") as HTMLLinkElement;

    favicon.href = prefersDarkColorScheme() ? "favicon-dark.png" : "favicon.png";
}

updateFavicon();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => updateFavicon());
