function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Kauê Vitor Morsch, usando um óculos escuro com o cabelo despenteado e sorrindo."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Kauê Vitor Morsch sorrindo usando óculos escuro e terno em uma sala de aula"
    )
  }
}
