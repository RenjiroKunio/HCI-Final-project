(function () {
  const STORAGE_KEY = "nla-theme";        // "dark" or "light"
const DARK_CLASS = "dark-mode";

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle(DARK_CLASS, isDark);

    // Update all toggle buttons on the page
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.textContent = isDark ? "Light mode" : "Dark mode";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
}

function init() {
    // Attach handlers to any toggle buttons that exist right now
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
        const currentlyDark = document.documentElement.classList.contains(DARK_CLASS);
        const nextTheme = currentlyDark ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
        // We don't need to dispatch custom events: other tabs will receive 'storage'.
    });
    });

    // On load, read saved theme or use prefers-color-scheme
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
    applyTheme(saved);
    } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
    }

    // Sync across tabs: when another tab changes the key, update this page
    window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) applyTheme(e.newValue);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
})();
