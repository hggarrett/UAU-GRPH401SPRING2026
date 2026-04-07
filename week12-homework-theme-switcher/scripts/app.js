function setTheme(themeName) {
  const body = document.querySelector("body");
  body.classList.remove("theme-two", "theme-three");
  if (themeName !== "theme-one") {
    body.classList.add(themeName);
  }
}
