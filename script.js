// =========================
// TEMA CLARO / OSCURO
// =========================
const body = document.body;
const themeToggleBtn = document.getElementById("themeToggle");
const THEME_KEY = "portfolio-theme";

function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light") {
    body.classList.add("light-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("light-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }
}

applyStoredTheme();

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-theme");
    localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
    themeToggleBtn.textContent = isLight ? "☀️" : "🌙";
  });
}

// =========================
// AÑO ACTUAL EN EL FOOTER
// =========================
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =========================
// INTERACCIÓN CON EL MODELO 3D
// (cambiar iluminación ambiente)
// =========================
const lightToggleBtn = document.getElementById("lightToggle");
const modelViewer = document.querySelector("model-viewer");

if (lightToggleBtn && modelViewer) {
  let lightMode = 0;

  lightToggleBtn.addEventListener("click", () => {
    lightMode = (lightMode + 1) % 3;

    if (lightMode === 0) {
      modelViewer.setAttribute("exposure", "1");
      modelViewer.setAttribute("shadow-intensity", "1");
      lightToggleBtn.textContent = "Cambiar ambiente de luz";
    } else if (lightMode === 1) {
      modelViewer.setAttribute("exposure", "1.4");
      modelViewer.setAttribute("shadow-intensity", "0.8");
      lightToggleBtn.textContent = "Modo luz intensa";
    } else if (lightMode === 2) {
      modelViewer.setAttribute("exposure", "0.8");
      modelViewer.setAttribute("shadow-intensity", "1.2");
      lightToggleBtn.textContent = "Modo luz suave";
    }
  });
}
