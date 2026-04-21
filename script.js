function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag imagem
  const img = document.querySelector("#profile img");
  //se tiver light mode, adicione a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto.png");
  } else {
    // se tiver sem light mode, adicione a imagem normal
    img.setAttribute("src", "./assets/link-foto.png");
  }
}
