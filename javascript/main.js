const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggleButton.classList.add("dark");
}

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggleButton.classList.add("dark");
    themeToggleButton.classList.remove("light");
  } else {
    localStorage.setItem("theme", "light");
    themeToggleButton.classList.remove("dark");
    themeToggleButton.classList.add("light");
  }
});
